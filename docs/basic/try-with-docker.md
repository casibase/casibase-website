---
title: (Optional) Try with Docker
description: Try Casibase with Docker
keywords: [Casibase, Docker]
authors: [hsluoyz]
---

## Requirements

### Hardware

If you want to build the Docker image yourself, please ensure that your machine has at least **2GB** of memory. Casibase's frontend is an NPM project of React. Building the frontend requires at least **2GB** of memory. Having less than **2GB** of memory may result in a frontend build failure.

If you only need to run the pre-built image, please ensure that your machine has at least **100MB** of memory.

### OS

All operating systems (Linux, Windows, and macOS) are supported.

### Docker

You can use **Docker (docker-engine version >= 17.05)** in Linux or **Docker Desktop** in Windows and macOS.

* [Docker](https://docs.docker.com/get-docker/)

Regardless of the operating system, users must ensure that they have **docker-engine version >= 17.05**. This is because we utilize the multi-stage build feature in the docker-compose.yml, which is supported in versions 17.05 and above. For more information, see <https://docs.docker.com/develop/develop-images/multistage-build/>.

If you use docker-compose, please ensure you have **docker-compose version >= 2.2**. For Linux users, note that docker-compose needs to be installed separately from docker-engine.

## Get the image

We have provided two DockerHub images:

| Name                                                                       | Description                                                  | Suggestion                                                                  |
|----------------------------------------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------------------------------|
| [casibase-all-in-one](https://hub.docker.com/r/casbin/casibase-all-in-one) | Both Casibase and a MySQL database are included in the image | This image already includes a toy database and is only for testing purposes |
| [casibase](https://hub.docker.com/r/casbin/casibase)                       | Only Casibase is included in the image                       | This image can be connected to your own database and used in production     |

1. casbin/casibase-all-in-one: This image includes the casibase binary, a MySQL database, and all the necessary configurations. It is designed for new users who want to try Casibase quickly. With this image, you can start Casibase immediately with just one or two commands, without any complex configuration. However, please note that we **do not recommend** using this image in a production environment.

### **Option-1**: Use the toy database

Run the container with port `14000` exposed to the host. The image will be automatically pulled if it doesn't exist on the local host.

```shell
docker run -p 14000:14000 casbin/casibase-all-in-one
```

Visit [**http://localhost:14000**](http://localhost:14000) in your browser. Log into the Casibase dashboard with the default global admin account: `built-in/admin`

```bash
admin
123
```

### **Option-2**: Try with docker-compose

Create a `conf/app.conf` directory in the same directory level as the `docker-compose.yml` file. Then, copy [app.conf](https://github.com/casibase/casibase/blob/master/conf/app.conf) from Casibase. For more details about `app.conf`, you can see [Via Ini file](/docs/basic/server-installation#via-ini-file).

Below is a minimal but complete `docker-compose.yml` example that starts a MySQL database and the Casibase service. It configures Casibase to connect to the database using MySQL. Save this file as `docker-compose.yml` (next to a `conf` folder if you want to mount a custom `app.conf`).

```yaml
services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_DATABASE: casibase
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - "3306:3306" # optional: expose DB to host

  casibase:
    image: casbin/casibase:latest
    restart: unless-stopped
    depends_on:
      - db
    environment:
      # Use MySQL driver and point to the db service (service name = host)
      - driverName=mysql
      - dataSourceName=root:123456@tcp(db:3306)/
    ports:
      - "14000:14000"
    volumes:
      # optional: mount your configuration
      - ./conf/app.conf:/conf/app.conf

volumes:
  db_data:
```

What does the above compose file do:

* The Casibase container connects to the database using the Compose service name `db` (i.e. `db:3306`). When both services run in the same Docker network (default for compose), using the service name as host is the simplest and most reliable approach.
* The `dataSourceName` above uses the MySQL root account for simplicity. For production use please create a dedicated DB user and a strong password.
* Mounting `./conf/app.conf` into `/conf/app.conf` is optional. If you prefer environment variables, you can remove the mount and rely on the `driverName` and `dataSourceName` variables.
* If both `app.conf` and environment variables are provided, the environment variables take precedence and will override the corresponding settings in app.conf.

:::note
**Casdoor**: By default Casibase uses the hosted Casdoor instance at `https://door.casdoor.com` for user authentication. If you need to manage users, applications, or customize the authentication flow, you must deploy your own Casdoor instance and update Casibase's `app.conf` (or the equivalent environment variables) to point to your Casdoor server. You can look at **[Casdoor configuration](/docs/basic/server-installation#configure-casdoor)** for more details.

**`RUNNING_IN_DOCKER`**: By default `RUNNING_IN_DOCKER` is enabled in docker image. When enabled, Casibase replaces `localhost` with the Docker bridge address (for example, `host.docker.internal` or the equivalent bridge hostname) so that the container can reach services running on the host.
:::

Bring up the services:

```bash
docker-compose up -d
```

Check logs (follow):

```bash
docker-compose logs -f casibase
```

Visit [**http://localhost:14000**](http://localhost:14000) in your browser. Log into the Casibase dashboard with the default global admin account: `built-in/admin`

```bash
admin
123
```

Stop and remove containers and volumes (data removed):

```bash
docker-compose down -v
```

### **Option-3**: Try directly with the standard image

:::tip

If it is not convenient to mount the configuration file to a container, using environment variables is also a possible solution.

```bash title="example"

docker run \
  -e driverName=mysql \
  -e dataSourceName='user:password@tcp(x.x.x.x:3306)/' \
  -p 14000:14000 \
  casbin/casibase:latest

```

:::

Create `conf/app.conf`. You can copy it from [conf/app.conf](https://github.com/casibase/casibase/blob/master/conf/app.conf) in Casibase. For more details about `app.conf`, you can see [Via Ini file](/docs/basic/server-installation#via-ini-file).

Then run

```bash
docker run  -p 14000:14000 -v /folder/of/app.conf:/conf casbin/casibase:latest
```

Anyway, just **mount the app.conf to /conf/app.conf** and start the container.

Visit [**http://localhost:14000**](http://localhost:14000) in your browser. Log into the Casibase dashboard with the default global admin account: `built-in/admin`

```bash
admin
123
```

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

#### Using with Local Casdoor

If you want to run Casibase with a local Casdoor instance (instead of the public `https://door.casdoor.com`), you can use the following docker-compose example:

```yaml title="docker-compose.yml"
version: "3.8"

services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_DATABASE: casdoor
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - casibase_network
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      timeout: 20s
      retries: 10

  casdoor:
    image: casbin/casdoor:latest
    restart: always
    ports:
      - "8000:8000"
    depends_on:
      db:
        condition: service_healthy
    environment:
      RUNNING_IN_DOCKER: "true"
    volumes:
      - ./conf/casdoor:/conf
    networks:
      - casibase_network

  casibase:
    image: casbin/casibase:latest
    restart: always
    ports:
      - "14000:14000"
    depends_on:
      - casdoor
      - db
    environment:
      RUNNING_IN_DOCKER: "true"
      # Database configuration
      driverName: mysql
      dataSourceName: "root:123456@tcp(db:3306)/"
      dbName: casibase
      # Casdoor configuration - use environment variables to override app.conf
      casdoorEndpoint: "http://casdoor:8000"
      clientId: "your-casdoor-client-id"
      clientSecret: "your-casdoor-client-secret"
      casdoorOrganization: "your-organization"
      casdoorApplication: "your-application"
    volumes:
      - ./conf/casibase:/conf
    networks:
      - casibase_network

volumes:
  mysql_data:

networks:
  casibase_network:
    driver: bridge
```

**Important Configuration Steps:**

1. **Create Casdoor configuration**: Create a directory `conf/casdoor` and add the Casdoor configuration file. You can copy it from [Casdoor's app.conf](https://github.com/casdoor/casdoor/blob/master/conf/app.conf).

2. **Create Casibase configuration**: Create a directory `conf/casibase` and add the Casibase configuration file. You can copy it from [Casibase's app.conf](https://github.com/casibase/casibase/blob/master/conf/app.conf).

3. **Configure Casdoor**: Before starting, you need to set up Casdoor:
   * Start Casdoor: `docker-compose up casdoor db`
   * Access Casdoor at [http://localhost:8000](http://localhost:8000)
   * Follow the [Casdoor SSO setup guide](/docs/basic/casdoor-sso) to create an organization, application, and get your `clientId` and `clientSecret`
   * Update the environment variables in the docker-compose.yml file with your Casdoor credentials

4. **Start all services**: Once Casdoor is configured, start all services:

```bash
docker-compose up
```

:::tip Using Environment Variables

Environment variables in the docker-compose.yml file will **override** the values in `app.conf`. This is the recommended approach for Docker deployments because:

* You don't need to modify the app.conf file for each environment
* Sensitive credentials can be managed separately
* Container networking (like `http://casdoor:8000`) is automatically handled

**Available environment variables** for Casibase Docker configuration include:

* `driverName` - Database driver (mysql, postgres, sqlite, etc.)
* `dataSourceName` - Database connection string
* `dbName` - Database name
* `casdoorEndpoint` - Casdoor server URL (e.g., `http://casdoor:8000` for local setup)
* `clientId` - Casdoor application client ID
* `clientSecret` - Casdoor application client secret
* `casdoorOrganization` - Casdoor organization name
* `casdoorApplication` - Casdoor application name
* `RUNNING_IN_DOCKER` - Set to `"true"` to enable Docker-specific networking

:::

#### Using with Public Casdoor

If you prefer to use the public Casdoor instance at `https://door.casdoor.com`, create a simpler docker-compose setup:

```yaml title="docker-compose.yml"
version: "3.8"

services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - casibase_network
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      timeout: 20s
      retries: 10

  casibase:
    image: casbin/casibase:latest
    restart: always
    ports:
      - "14000:14000"
    depends_on:
      db:
        condition: service_healthy
    environment:
      RUNNING_IN_DOCKER: "true"
      driverName: mysql
      dataSourceName: "root:123456@tcp(db:3306)/"
      dbName: casibase
    volumes:
      - ./conf:/conf
    networks:
      - casibase_network

volumes:
  mysql_data:

networks:
  casibase_network:
    driver: bridge
```

Create a `conf/app.conf` directory in the same directory level as the `docker-compose.yml` file. Then, copy [app.conf](https://github.com/casibase/casibase/blob/master/conf/app.conf) from Casibase. For more details about `app.conf`, you can see [Via Ini file](/docs/basic/server-installation#via-ini-file).

Start the services:

```bash
docker-compose up
```

That's it! :small_airplane:

Visit [**http://localhost:14000**](http://localhost:14000) in your browser. Log into the Casibase dashboard with the default global admin account: `built-in/admin`

```bash
admin
123
```

*Note: If you dig deeper into the docker-compose.yml file, you may be puzzled by the environment variable we created called "RUNNING_IN_DOCKER". When the database 'db' is created via docker-compose, it is available on your PC's localhost but not the localhost of the Casibase container. To prevent you from running into troubles caused by modifying app.conf, which can be quite difficult for a new user, we provided this environment variable and pre-assigned it in the docker-compose.yml. When this environment variable is set to true, localhost will be replaced with host.docker.internal so that Casibase can access the database.*

### **Option-3**: Try directly with the standard image

:::tip

If it is not convenient to mount the configuration file to a container, using environment variables is also a possible solution.

**Example: Database configuration with environment variables**

```bash
docker run \
  -e driverName=mysql \
  -e dataSourceName='user:password@tcp(x.x.x.x:3306)/' \
  -e dbName=casibase \
  -p 14000:14000 \
  casbin/casibase:latest
```

**Example: Full configuration with Casdoor environment variables**

```bash
docker run \
  -e driverName=mysql \
  -e dataSourceName='user:password@tcp(x.x.x.x:3306)/' \
  -e dbName=casibase \
  -e casdoorEndpoint='http://your-casdoor-host:8000' \
  -e clientId='your-client-id' \
  -e clientSecret='your-client-secret' \
  -e casdoorOrganization='your-organization' \
  -e casdoorApplication='your-application' \
  -p 14000:14000 \
  casbin/casibase:latest
```

Environment variables will **override** any values set in the app.conf file.

:::

**Alternative: Using configuration file**

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

## Troubleshooting

### Login Page Points to Wrong Casdoor Instance

If your Casibase login page redirects to `https://door.casdoor.com/` instead of your local Casdoor instance, check the following:

1. **Environment variables take precedence**: Make sure you've set the `casdoorEndpoint` environment variable in your docker-compose.yml:

   ```yaml
   environment:
     casdoorEndpoint: "http://casdoor:8000"
   ```

2. **Use container networking**: When running in Docker, use the service name as the hostname. For example, if your Casdoor service is named `casdoor` in docker-compose.yml, use `http://casdoor:8000` (not `http://localhost:8000`).

3. **Volume mounting**: If you're mounting app.conf as a volume, ensure the path is correct:

   ```yaml
   volumes:
     - ./conf/app.conf:/conf/app.conf  # Mount file directly
   ```

   or

   ```yaml
   volumes:
     - ./conf:/conf  # Mount entire directory
   ```

4. **Check app.conf**: If not using environment variables, verify your app.conf has the correct `casdoorEndpoint`:

   ```ini
   casdoorEndpoint = http://casdoor:8000
   ```

5. **Restart containers**: After changing configuration, restart the containers:

   ```bash
   docker-compose down
   docker-compose up -d
   ```

### Cannot Connect to Casdoor from Casibase

If Casibase cannot reach Casdoor:

1. **Ensure both services are on the same network**: Check that both services are in the same Docker network in docker-compose.yml
2. **Wait for Casdoor to be ready**: Add a `depends_on` clause with health checks to ensure Casdoor is running before Casibase starts
3. **Check Casdoor logs**: Run `docker-compose logs casdoor` to see if there are any errors

### Database Connection Issues

If you see database connection errors:

1. **Wait for MySQL to be ready**: Use health checks in docker-compose.yml to ensure the database is ready before starting Casibase
2. **Verify connection string**: Use the container name (e.g., `db:3306`) instead of `localhost:3306` in the `dataSourceName`
3. **Check database name**: Ensure the database specified in `dbName` exists or will be created by Casibase

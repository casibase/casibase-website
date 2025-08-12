---
title: (Optional) Try with K8s Helm
description: Learn how to deploy Casibase on Kubernetes using Helm
keywords: [Casibase, Helm, Kubernetes, K8s]
authors: [flysky-z]
---

## Introduction

This guide shows how to deploy Casibase on Kubernetes using Helm for easy and scalable management. Helm simplifies the deployment process and allows for easy configuration management.

## Prerequisites

- A running Kubernetes cluster
- Helm v3 installed
- kubectl configured to connect to your cluster
- A MySQL/PostgreSQL database (recommended for production)
- A Casdoor instance for authentication

## Configuration

**Before installation**, you must create an application configuration file. The Helm chart will not work with default values.

### Pre step: Create app.conf File

Create an `app.conf` file with your specific settings:

You can view more details about the configuration options in the [Casibase Configuration Documentation](./server-installation#configuration).

Or check the latest configuration options in [app.conf example](https://github.com/casibase/casibase/blob/master/conf/app.conf).

```ini
appname = casibase
httpport = 14000
runmode = prod
SessionOn = true
copyrequestbody = true

# Database Configuration - REQUIRED
driverName = mysql
dataSourceName = your-username:your-password@tcp(your-db-host:3306)/
dbName = your-database

# Casdoor Authentication - REQUIRED
casdoorEndpoint = https://door.casdoor.com
clientId = your-client-id
clientSecret = your-client-secret
casdoorOrganization = "your-organization"
casdoorApplication = "your-application"
redirectPath = /callback

# Optional Settings
redisEndpoint =
guacamoleEndpoint = 127.0.0.1:4822
isDemoMode = false
disablePreviewMode = false
logPostOnly = true
landingFolder =
cacheDir = "C:/casibase_cache"
appDir = ""
isLocalIpDb = false
audioStorageProvider = ""
providerDbName = ""
socks5Proxy = "127.0.0.1:10808"
publicDomain = ""
adminDomain = ""
enableExtraPages = false
shortcutPageItems = []
usageEndpoints = []
iframeUrl = ""
forceLanguage = ""
defaultLanguage = "en"
staticBaseUrl = "https://cdn.casibase.org"
htmlTitle = "Casibase"
faviconUrl = "https://cdn.casibase.com/static/favicon.png"
logoUrl = "https://cdn.casibase.org/img/casibase-logo_1200x256.png"
navbarHtml = ""
footerHtml = "Powered by <a target="_blank" href="https://github.com/casibase/casibase" rel="noreferrer"><img style="padding-bottom: 3px;" height="20" alt="Casibase" src="https://cdn.casibase.org/img/casibase-logo_1200x256.png" /></a>"
appUrl = ""
frontendBaseDir = "../casibase"
showGithubCorner = false
defaultThemeType = "default"
defaultColorPrimary = "#5734d3"
defaultBorderRadius = 6
defaultIsCompact = false
avatarErrorUrl = "https://cdn.casibase.org/gravatar/error.png"
```

### Optional: Using Secrets for Sensitive Data

For production environments, create a Kubernetes secret with your configuration:

```bash
# Create secret from app.conf file
kubectl create secret generic casibase-config --from-file=app.conf=./app.conf
```

## Installation Steps

### Step 1: Prepare Configuration Files

Ensure you have created both:
- `app.conf` - Application configuration

### Step 2: Install with Configuration File

:::info
Visit the [Casbin Helm Chart](https://hub.docker.com/r/casbin/casibase-helm-chart/tags) to find the latest version.
:::

Install Casibase by passing the app.conf file directly:

```bash
# Method 1: Pass app.conf content as appConfig parameter
helm install casibase oci://registry-1.docker.io/casbin/casibase-helm-chart \
  --version v1.549.0 \
  --set-file appConfig=./app.conf
```

### Alternative Installation with Secret

If using secrets for sensitive data:

```bash
# Create secret first
kubectl create secret generic casibase-config --from-file=app.conf=./app.conf

# Install with secret reference (no additional values file needed)
helm install casibase oci://registry-1.docker.io/casbin/casibase-helm-chart \
  --version v1.549.0 \
  --set appConfig="" \
  --set appConfigFromSecret=casibase-config
```

### Step 3: Verify Installation

Check the deployment status:

```shell
kubectl get pods
kubectl get services
kubectl logs -l app.kubernetes.io/name=casibase
```

### Step 4: Access Casibase

Once installed, Casibase will be accessible through the Kubernetes service on port 14000. If you enabled ingress, it will be available at your configured domain.

## Configuration Options Reference

The following table shows the main configuration parameters available in the Helm chart:

| Parameter | Description | Default Value |
|-----------|-------------|---------------|
| `replicaCount` | Number of Casibase replicas to run | `1` |
| `image.repository` | Docker image repository | `casbin` |
| `image.name` | Docker image name | `casibase` |
| `image.pullPolicy` | Image pull policy | `IfNotPresent` |
| `image.tag` | Image tag (defaults to chart appVersion) | `""` |
| `appConfig` | Application configuration (app.conf content) | See values.yaml |
| `appConfigFromSecret` | Mount app.conf from secret instead | `""` |
| `service.type` | Kubernetes service type | `ClusterIP` |
| `service.port` | Service port | `14000` |
| `ingress.enabled` | Enable ingress | `false` |
| `ingress.hosts` | Ingress hosts configuration | `[]` |
| `resources` | CPU/Memory resource requests and limits | `{}` |
| `autoscaling.enabled` | Enable horizontal pod autoscaler | `false` |
| `autoscaling.minReplicas` | Minimum number of replicas | `1` |
| `autoscaling.maxReplicas` | Maximum number of replicas | `100` |
| `autoscaling.targetCPUUtilizationPercentage` | CPU utilization threshold | `80` |
| `nodeSelector` | Node labels for pod assignment | `{}` |
| `tolerations` | Toleration labels for pod assignment | `[]` |
| `affinity` | Affinity settings for pod assignment | `{}` |

### Advanced Configuration Options

For production deployments, consider these additional options:

```yaml
# Autoscaling
autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
```

## Managing the Deployment

### Upgrading Casibase

To upgrade your Casibase deployment to a new version:

```shell
helm upgrade casibase oci://registry-1.docker.io/casbin/casibase-helm-chart --version <new-version>
```

To upgrade with custom values:

```shell
helm upgrade casibase oci://registry-1.docker.io/casbin/casibase-helm-chart --version <new-version> \
  -f custom-values.yaml
```

### Checking Deployment Status

Monitor your deployment:

```shell
# Check pod status
kubectl get pods -l app.kubernetes.io/name=casibase

# Check service status
kubectl get svc -l app.kubernetes.io/name=casibase

# View logs
kubectl logs -l app.kubernetes.io/name=casibase

# Describe deployment
helm status casibase
```

### Uninstalling Casibase

To completely remove Casibase from your cluster:

```shell
helm uninstall casibase
```

## Troubleshooting

### Common Issues

1. **Pod not starting**: Check logs with `kubectl logs <pod-name>`
2. **Service not accessible**: Verify service configuration and ingress setup
3. **Database connection issues**: Ensure database credentials and connectivity are correct
4. **Configuration errors**: Validate your `appConfig` syntax
5. **Casdoor authentication failures**: Verify Casdoor endpoint and credentials
6. **Domain/URL issues**: Check domain configuration and DNS resolution

### Configuration-Related Issues

**Problem**: Casdoor authentication not working
- Verify `casdoorEndpoint` is accessible from the cluster
- Check `clientId` and `clientSecret` are correct
- Ensure `redirectPath` matches your Casdoor application configuration

**Problem**: Configuration syntax errors
```bash
# Validate YAML syntax before deployment
helm template casibase oci://registry-1.docker.io/casbin/casibase-helm-chart -f custom-values.yaml --dry-run
```

### Getting Help

- Check pod events: `kubectl describe pod <pod-name>`
- View Helm release info: `helm status casibase`
- Review configuration: `helm get values casibase`

## Conclusion

Using Helm to deploy Casibase on Kubernetes provides a robust, scalable solution for managing your knowledge base platform. The chart offers flexible configuration options to suit various deployment scenarios, from development environments to production clusters.

Key benefits of this approach:
- **Easy deployment and updates** through Helm commands
- **Flexible configuration** through values files
- **Kubernetes-native** scaling and management
- **Production-ready** with proper resource management and health checks

For more advanced configurations and troubleshooting, refer to the [Kubernetes documentation](https://kubernetes.io/docs/) and [Helm documentation](https://helm.sh/docs/).
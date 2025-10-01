---
title: Creating Databases with KubeBlocks
description: Learn how to create and manage databases on Kubernetes using KubeBlocks.
keywords: [Casibase, Private Cloud, Kubernetes, K8s, Application, Database, KubeBlocks, High Availability]
authors: [Flysky-z]
---

## Overview

[KubeBlocks](https://kubeblocks.io/) is an open-source Kubernetes operator and toolset designed to simplify the complexity of running and managing data infrastructure, such as databases, message queues, and streaming systems, on Kubernetes. It provides a declarative approach to deploying and managing stateful applications, allowing you to manage them as easily as stateless ones.

This guide will walk you through the process of creating a database cluster using KubeBlocks.

## Why KubeBlocks?

- **Simplified Management**: Automates the database lifecycle, including deployment, upgrades, scaling, and monitoring.
- **Production-Ready**: Supports high availability, backup and restore, and robust monitoring.
- **Versatile**: Supports a wide range of databases, including MySQL, PostgreSQL, MongoDB, Redis, and more.

## Installing KubeBlocks

You can install KubeBlocks using `Helm`. For more installation options, refer to the [KubeBlocks Installation Guide](https://kubeblocks.io/docs/preview/user_docs/overview/install-kubeblocks).

This guide will use Helm for the installation.

### Step 1: Deploy Snapshot Controller

KubeBlocks requires the Snapshot Controller to manage volume snapshots. First, check if it is already installed in your cluster.

```bash
kubectl get crd volumesnapshotclasses.snapshot.storage.k8s.io
kubectl get crd volumesnapshots.snapshot.storage.k8s.io
kubectl get crd volumesnapshotcontents.snapshot.storage.k8s.io
```

If it is not installed, you can deploy it using the following commands:

```bash
helm repo add piraeus-charts https://piraeus.io/helm-charts/
helm repo update
# Update the namespace to an appropriate value for your environment (e.g. kb-system)
helm install snapshot-controller piraeus-charts/snapshot-controller -n kb-system --create-namespace
```
Then, verify the installation:

```bash
kubectl get pods -n kb-system | grep snapshot-controller
```

The Snapshot Controller should be in the `Running` state.

### Step 2: Get the Latest KubeBlocks Version

Get the latest stable version tag (e.g. v1.0.1):

```bash
curl -s "https://api.github.com/repos/apecloud/kubeblocks/releases?per_page=100&page=1" | jq -r '.[] | select(.prerelease == false) | .tag_name' | sort -V -r | head -n 1

# Example output:
# v1.0.1
```

### Step 3: Create KubeBlocks CRDs

Create the Custom Resource Definitions (CRDs) required by KubeBlocks.

```bash
# Replace <VERSION> with the version you selected
kubectl create -f https://github.com/apecloud/kubeblocks/releases/download/<VERSION>/kubeblocks_crds.yaml

# Example: If the version is v1.0.1
kubectl create -f https://github.com/apecloud/kubeblocks/releases/download/v1.0.1/kubeblocks_crds.yaml
```

### Step 4: Install KubeBlocks with Helm

1. **Add the KubeBlocks Helm repository:**

    ```bash
    helm repo add kubeblocks https://apecloud.github.io/helm-charts
    helm repo update
    ```

2.  **Install KubeBlocks:**
    This command installs the KubeBlocks chart into the `kb-system` namespace.

    ```bash
    helm install kubeblocks kubeblocks/kubeblocks --namespace kb-system --create-namespace
    ```

## Creating a Database

Once KubeBlocks is installed, you can create a database cluster using `kubectl`.

Currently supported databases include:

- [MySQL](https://kubeblocks.io/docs/preview/kubeblocks-for-mysql/02-quickstart)
- [PostgreSQL](https://kubeblocks.io/docs/preview/kubeblocks-for-postgresql/02-quickstart)
- [MongoDB](https://kubeblocks.io/docs/preview/kubeblocks-for-mongodb/02-quickstart)
- [Redis](https://kubeblocks.io/docs/preview/kubeblocks-for-redis/02-quickstart)
- [Kafka](https://kubeblocks.io/docs/preview/kubeblocks-for-kafka/02-quickstart)
- [Milvus](https://kubeblocks.io/docs/preview/kubeblocks-for-milvus/02-quickstart)
- [Qdrant](https://kubeblocks.io/docs/preview/kubeblocks-for-qdrant/02-quickstart)
- [RabbitMQ](https://kubeblocks.io/docs/preview/kubeblocks-for-rabbitmq/02-quickstart)
- [Elasticsearch](https://kubeblocks.io/docs/preview/kubeblocks-for-elasticsearch/02-quickstart)

### Example: Creating a Demo MySQL Cluster

1.  **Create a file named `my-mysql-cluster.yaml`:**

    ```yaml
    apiVersion: apps.kubeblocks.io/v1
    kind: Cluster
    metadata:
      name: mycluster
      namespace: demo
    spec:
      # Deletes all resources when the cluster is deleted
      terminationPolicy: Delete
      componentSpecs:
        - name: mysql
          # Defines the MySQL component and version
          componentDef: "mysql-8.0" 
          serviceVersion: 8.0.35
          disableExporter: false
          # Number of replicas for high availability
          replicas: 2
          # Resource allocation for each replica
          resources:
            limits:
              cpu: '0.5'
              memory: 0.5Gi
            requests:
              cpu: '0.5'
              memory: 0.5Gi
          # Defines the persistent storage for data
          volumeClaimTemplates:
            - name: data
              spec:
                storageClassName: ""
                accessModes:
                  - ReadWriteOnce
                resources:
                  requests:
                    storage: 20Gi
    ```

2.  **Apply the manifest to create the cluster:**

    ```bash
    kubectl apply -f my-mysql-cluster.yaml
    ```

## More Information

For more detailed information, advanced configurations, and troubleshooting with KubeBlocks, please refer to the [official KubeBlocks documentation](https://kubeblocks.io).

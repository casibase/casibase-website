---
title: Application
keywords: [Casibase, Private Cloud, Kubernetes, K8s, Application, Kustomize]
authors: [Dark-Qy]
---

An **Application** in Casibase is a specific, deployable instance created from a **Template**. Before you can create an application, you must first have at least one template defined. When you create an application, you select a base template and can then apply specific customizations before deploying it to your Kubernetes cluster.

This chapter will guide you through creating, deploying, and managing applications in Casibase.

## Create a New Application

Navigate to the **Cloud Resources** > **Applications** section and click the `Add` button to open the creation page.

![Add a New Application](/img/kubernetes/add-application.png)

The key fields for an application are:

- `Name`: A unique name for your application instance (e.g., `my-app-prod`). This is a required field.
- `Display name`: A user-friendly name that will be shown in the UI (e.g., `My App (Production)`).
- `Description`: A brief description of this specific application instance.
- `Template`: Select a pre-existing template from the dropdown list. This will be the base for your application.
- `Parameters`: This field is used for customization. Here you can provide specific Kustomize patches or other variable substitutions in YAML format to override or extend the base `Manifest` from the selected template.

**Note**: Fields like `Status` and `Namespace` are managed by the system. The **`Namespace` is automatically generated based on the application name upon creation and cannot be modified by the user**. The `Status` is updated based on its deployment state (e.g., `Not Deployed`, `Running`, `Pending`).

![Create a New Application](/img/kubernetes/application-form.png)

## Deploying and Monitoring an Application

After creating an application, it will appear in the applications list. From here, you can manage its lifecycle.

- **Deploy**: Click the `Deploy` button to apply the application's configuration to your Kubernetes cluster. Casibase will use Kustomize to merge the base template's `Manifest` with your application's `Parameters` and run `kubectl apply`.
- **Undeploy**: The `Undeploy` button will remove the application's resources from your Kubernetes cluster.

![Application List and Actions](/img/kubernetes/application-list.png)

By using this template-and-application model, you can effectively standardize and scale your Kubernetes deployments through the Casibase interface.

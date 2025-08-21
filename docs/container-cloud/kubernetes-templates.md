---
title: Template
keywords: [Casibase, Private Cloud, Kubernetes, K8s, Template, Kustomize]
authors: [Dark-Qy]
---

In Casibase, a **Template** is a reusable base configuration for an application. It contains the core Kubernetes manifest files, typically structured for use with Kustomize. You define a template once, and it can then be used as a blueprint to create multiple, customized application instances.

This model allows you to standardize your deployment patterns, ensuring consistency and simplifying the process of launching new services.

This chapter will guide you through creating and managing templates in Casibase.

## Create a New Template

First, navigate to the **Cloud Resources** > **Templates** section and click the `Add` button to open the creation page.

![Add a New Template](/img/kubernetes/add-template.png)

You will need to fill in the following fields, which correspond to the template's properties:

- `Name`: A unique identifier for the template (e.g., `my-app-template`). This is a required field.
- `Display name`: A user-friendly name that will be shown in the UI (e.g., `My App Template`).
- `Description`: A brief description of what this template is for.
- `Version`: The version of the template (e.g., `1.0.0`).
- `Icon`: A URL to an icon image that represents the template in the UI.
- `Manifest`: The raw YAML text of your Kubernetes manifests. This content serves as the base for Kustomize deployments.

![Create a New Template Form](/img/kubernetes/template-form.png)

After saving, your template will be available in the selection list when you create a new application.

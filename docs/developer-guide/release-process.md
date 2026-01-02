---
title: Release Process
description: How Casibase releases are automated and published
keywords: [release, CI/CD, GoReleaser, GitHub Actions]
authors: [copilot]
---

## Automated Releases

Casibase uses GitHub Actions and GoReleaser to automate the release process. When a new version tag is pushed, the CI automatically builds binaries for multiple platforms and publishes them to GitHub Releases.

### Supported Platforms

Each release includes pre-built binaries for:

- **Linux**: x86_64 and ARM64
- **Windows**: x86_64 and ARM64
- **macOS (Darwin)**: x86_64 and ARM64

32-bit architectures (i386) are no longer supported to focus on modern 64-bit systems.

### Release Workflow

The release is triggered when code is pushed to the master branch. The workflow performs these steps:

1. Builds the frontend React application
2. Runs semantic versioning to determine the next version
3. Executes GoReleaser to build binaries for all supported platforms
4. Publishes binaries and artifacts to GitHub Releases

### Binary Contents

Each release archive includes:

- The compiled Casibase binary for the target platform
- Pre-built web frontend (`web/build`)
- Default configuration file (`conf/app.conf`)
- Sample data directory

This means you can download a binary and run it immediately without building the frontend separately.

### GoReleaser Configuration

The release configuration is defined in `.goreleaser.yaml` at the root of the repository. Key settings:

```yaml
builds:
  - env:
      - CGO_ENABLED=0
    goos:
      - linux
      - windows
      - darwin
    goarch:
      - amd64
      - arm64
```

The `CGO_ENABLED=0` setting ensures binaries are statically linked and don't require external C dependencies, making them portable across different systems.

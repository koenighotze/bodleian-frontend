#!/usr/bin/env bash

set -Eeuo pipefail

: "${GITHUB_SHA?'Expected env var GITHUB_SHA not set'}"
: "${GITHUB_REF?'Expected env var GITHUB_REF not set'}"
: "${CONTAINER_REGISTRY?'Expected env var CONTAINER_REGISTRY not set'}"
: "${CONTAINER_PORTS:=8080}"
# CONTAINER_REGISTRY="europe-west3-docker.pkg.dev/platform-398addce/platform-registry-11757"
IMAGE_NAME="$CONTAINER_REGISTRY/$GITHUB_REPOSITORY:$GITHUB_SHA"
gcloud auth configure-docker "$(echo $CONTAINER_REGISTRY | cut -d/ -f1)"
# gcloud auth configure-docker europe-west3-docker.pkg.dev
NOW=$(date -u +%Y-%m-%dT%T%z)
CONTAINER_LABELS="org.opencontainers.image.revision=${GITHUB_SHA},org.opencontainers.image.created=${NOW}"

if [[ "$GITHUB_REF" = refs/tags/* ]]; then
    GIT_TAG=${GITHUB_REF/refs\/tags\/}
    echo "::set-output name=git-tag::$GIT_TAG"
fi

echo "::group:: Building image ${IMAGE_NAME}"

if [[ "$GITHUB_REF" = refs/tags/* ]]; then
  docker build -t "$IMAGE_NAME" .
  # TODO Docker push
  echo "::set-output name=image-name::$CONTAINER_REGISTRY/$GITHUB_REPOSITORY:$GIT_TAG"
else
  echo "Not running on tag, only building a tar and not pushing"
  docker build -t "$IMAGE_NAME" .
fi

echo "::endgroup::"
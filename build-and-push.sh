#!/bin/bash

IMAGE=gaeba95/resume-gbacso:latest

PLATFORMS=linux/amd64,linux/arm64

docker login
docker buildx build --platform $PLATFORMS -t $IMAGE --push .

echo "Image pushed: $IMAGE"

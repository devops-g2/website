# Set the name for the builder, you can choose any name
BUILDER_NAME=mybuilder

# Create a new builder using Buildx
docker buildx create --use --name $BUILDER_NAME

# Build the image for multiple platforms
docker buildx build --platform linux/amd64,linux/arm64 -t dev22acr.azurecr.io/website:latest . --push

# Remove the builder after the build is completed (optional)
docker buildx rm $BUILDER_NAME

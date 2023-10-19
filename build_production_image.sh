#!/bin/bash

# This is a really hacky build script. It attempts to build a docker image
# that only contains the production dependencies.

export NODE_ENV="build"

# Get the directory of the Bash script
WORKING_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Assign the node_modules and dist locations
NODE_MODULES_DIR="node_modules"
DIST_DIR="dist"

# Using a subshell to ensure we're cd'd into the correct directory
(
  cd $WORKING_DIR

  # Error out if the node_modules directory doesn't exist
  if [ ! -d $NODE_MODULES_DIR ]; then
    echo "The $NODE_MODULES_DIR directory doesn't exist. Please build via \`npm install\`"
    exit 1
  fi

  # Build the project, which should create a dist directory
  npm run build

  # Move the current node_modules directory into a temporary directory
  TEMP_NODE_MODULES_DIR=$(mktemp -d)
  mv $NODE_MODULES_DIR $TEMP_NODE_MODULES_DIR

  # Create a new node_modules, this time with only the production dependencies
  npm install --only="prod"

  # Build the image
  docker compose -f compose.production.yml build

  # Remove the production mode_modules directory
  rm -r $NODE_MODULES_DIR

  # Remove the dist dir
  rm -r $DIST_DIR

  # Move the original node_modules directory back in the working directory
  mv $TEMP_NODE_MODULES_DIR/$NODE_MODULES_DIR ./
  rm -r $TEMP_NODE_MODULES_DIR
)
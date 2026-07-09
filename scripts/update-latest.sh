#!/bin/bash

set -euo pipefail
BRAND_DIR="brands"
LATEST_VERSION=$(ls -d "$BRAND_DIR"/v.*/ 2> /dev/null | sort -V | tail -n 1)
if [ -z "$LATEST_VERSION" ]; then
  echo "Error: No version folders found"
  exit 1
fi

echo "Latest: $(basename "$LATEST_VERSION")"
rm -rf "$BRAND_DIR/latest"
cp -r "$LATEST_VERSION" "$BRAND_DIR/latest/"
echo "Updated brands/latest/"

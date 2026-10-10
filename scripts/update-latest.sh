#!/bin/bash

set -euo pipefail
BRAND_DIR="logomark"
LATEST_VERSION=$(find "$BRAND_DIR" -mindepth 1 -maxdepth 1 -type d -name "v*" 2>/dev/null | sort -V | tail -n 1)
if [ -z "$LATEST_VERSION" ]; then
	echo "Error: No version folders found"
	exit 1
fi

echo "Latest: $(basename "$LATEST_VERSION")"
rm -rf "$BRAND_DIR/latest"
cp -r "$LATEST_VERSION" "$BRAND_DIR/latest/"
echo "Updated logomark/latest/"

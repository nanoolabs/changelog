#!/bin/bash

set -euo pipefail
SOURCE="brands/"
REMOTE="b2-assets"
BUCKET="nanoo-assets"
DRY_RUN="--dry-run"
[ "$1" = "confirm" ] && DRY_RUN=""
rclone sync "$SOURCE" :b2:"$BUCKET" $DRY_RUN --b2-hard-delete --progress --fast-list
echo "Sync complete"

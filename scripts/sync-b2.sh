#!/bin/bash

set -euo pipefail
SOURCE="brands/"
BUCKET="${B2_BUCKET_NAME}"
DRY_RUN="--dry-run"
[ "$1" = "confirm" ] && DRY_RUN=""
rclone sync "$SOURCE" :b2:"$BUCKET" \
  $DRY_RUN \
  --b2-account "$B2_KEY_ID" \
  --b2-key "$B2_APPLICATION_KEY" \
  --b2-hard-delete --progress --fast-list
echo "Sync complete"

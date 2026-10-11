#!/bin/bash

set -euo pipefail
BUCKET="${B2_BUCKET_NAME}"
DRY_RUN="--dry-run"
[ "$1" = "confirm" ] && DRY_RUN=""
for DIR in logomark logotype; do
	rclone sync "$DIR" :b2:"$BUCKET"/$DIR \
		$DRY_RUN \
		--b2-account "$B2_KEY_ID" \
		--b2-key "$B2_APPLICATION_KEY"
done
echo "Sync complete"

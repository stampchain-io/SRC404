import hashlib
import json
from datetime import datetime

def generate_src404_payload(image_path, block_height, storage_uri):
    # 1. Generate the SHA-256 Hash (The "Art")
    sha256_hash = hashlib.sha256()
    with open(image_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    
    image_hash = sha256_hash.hexdigest()

    # 2. Capture Current ISO Timestamp
    dt_now = datetime.utcnow().isoformat() + "Z"

    # 3. Construct SRC404 JSON
    payload = {
        "p": "src-404",
        "op": "deploy",
        "tick": "SRC404",
        "hash": image_hash,
        "meta": {
            "bh": str(block_height),
            "dt": dt_now,
            "net": "kontor",
            "uri": storage_uri
        }
    }

    return json.dumps(payload, indent=2)

# Example Usage:
# print(generate_src404_payload("photo.jpg", 840123, "kontor://assets/uuid-123"))

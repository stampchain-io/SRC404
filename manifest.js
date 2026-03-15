/** Use this file in your repository to track different deployments and ensure your local database matches the on-chain SRC404 records. **/

{
  "project": "SRC404-Provenance-Archive",
  "version": "1.0.0",
  "protocol": "src-404",
  "deployments": [
    {
      "asset_name": "Sunset_Over_Toronto",
      "file_path": "./images/sunset.jpg",
      "on_chain_hash": "7d8f9e21b1a5c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b",
      "block_height": "840123",
      "kontor_uri": "kontor://assets/sunset-001",
      "status": "stamped"
    }
  ],
  "config": {
    "network": "bitcoin-mainnet",
    "storage": "kontor-network",
    "hashing_algo": "sha256"
  }
}

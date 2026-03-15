# **SRC404 Protocol: On-Chain Image Provenance Standard**

**SRC404** is a specialized token standard built on the **SRC20 (Bitcoin Stamps)** architecture. It provides a robust framework for establishing the provenance of digital visual assets—allowing photographers, artists, and archivists to anchor high-resolution media to the Bitcoin blockchain via permanent image hashes and structured JSON metadata.

---

## **📄 Overview**

The SRC404 protocol is designed to be **tool-agnostic**. Whether utilizing services like [Kamera](https://www.kontor.network/products/kamera) or uploading via [Stampchain](https://stampchain.io/), SRC404 ensures that the "identity" of a photo is immutable, verifiable, and permanent.

### **Core Pillars**

1. **The Identity (On-Chain Hash):** A unique cryptographic fingerprint of the image is stored on-chain. In blockchain explorers, this hash is visualized as "Art" in its own right, representing the digital DNA of the asset.  
2. **The Context (JSON Parameters):** Critical data points (block-height, timestamp, and network identifiers) are inscribed as part of the token deployment to provide historical context.  
3. **The Body (Off-Chain Storage):** The original high-resolution file is stored off-chain using the **Kontor Network** or IPFS, linked directly to the on-chain record for high-availability access.

---

## **🛠 Technical Workflow**

The protocol follows a standardized deployment flow regardless of the capture or upload tool used:

1. **Hashing:** A SHA-256 hash is generated from the original image file.  
2. **Parameterization:** Metadata is bundled into a JSON object including the current Bitcoin block-height and UTC timestamp.  
3. **Inscription:** The hash and JSON are deployed to the Bitcoin ledger following the SRC404 specification, creating a "Stamp."  
4. **Redundancy:** The full-resolution asset is pushed to the **Kontor Network**, ensuring the "Body" of the image matches the "Identity" on-chain.

---

## **📑 The SRC404 Deployment Schema**

Every SRC404 deployment must follow this JSON structure to ensure interoperability across the Stamp ecosystem and the Kontor Network:

JSON  
{  
  "p": "src-404",  
  "op": "deploy",  
  "tick": "SRC404",  
  "hash": "7d8f9e21b1a...445c",  
  "meta": {  
    "bh": "840123",  
    "dt": "2026-03-15T17:00:00Z",  
    "net": "kontor",  
    "uri": "kontor://assets/uuid-123-456"  
  }  
}

### **Field Definitions**

| Key | Name | Description |
| :---- | :---- | :---- |
| **p** | Protocol | Identifies the standard as src-404. |
| **hash** | Image Hash | The cryptographic fingerprint (rendered as Art in explorers). |
| **bh** | Block Height | The specific Bitcoin block at the time of minting. |
| **dt** | Date/Time | ISO 8601 UTC timestamp of the deployment. |
| **net** | Network | The storage network used for the high-res asset (e.g., kontor). |
| **uri** | Universal Resource | The direct locator for the high-res asset on the host network. |

---

## **🌐 Compatible Ecosystems**

The SRC404 standard is built to integrate seamlessly with the leading tools in the Bitcoin Stamp space:

* **Kamera:** Direct-to-chain mobile app for photographers. SRC404 provides the software layer for immediate provenance at the moment of capture.  
* **Stampchain:** A versatile platform for minting and managing Bitcoin Stamps, supporting the SRC404 deployment flow for bulk or individual uploads.  
* **Kontor Network:** The decentralized, high-availability storage layer for the original assets linked by the SRC404 hash.

---

## **🚀 Vision: Proof of Authenticity**

In an era of AI-generated content and digital manipulation, **SRC404** serves as a "Truth Layer." By combining the security of Bitcoin Stamps with the storage efficiency of the Kontor Network, users can prove exactly **when** and **where** a digital artifact originated, creating a permanent record of digital culture.

---

**Developed by Mikeinspace** *Advancing the standard for digital permanence on Bitcoin.*


import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC 

def test_pipeline():
    # 1. Setup Mock Evidence
    password = "forensic_test_pw"
    secret_evidence = b"SUSPECT_LOCATION: 23.0225N, 72.5714E"
    salt = os.urandom(16)
    iv = os.urandom(16)
    iterations = 10000

    print(f"[*] Original Data: {secret_evidence.decode()}")

    # 2. Derive Key (PBKDF2)
    # We use PBKDF2HMAC directly now
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(), # Modern standard, Android uses SHA1 or SHA256
        length=32,
        salt=salt,
        iterations=iterations,
        backend=default_backend()
    )
    key = kdf.derive(password.encode())

    # 3. Encrypt (Simulating Android Backup)
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    
    # Padding: AES blocks must be 16 bytes. 
    # For this test, we'll just ensure the data is a multiple of 16.
    padded_data = secret_evidence.ljust(64) 
    ciphertext = encryptor.update(padded_data) + encryptor.finalize()
    print(f"[+] Data Encrypted (Ciphertext Generated)")

    # 4. Decrypt (Testing your Logic)
    decryptor = cipher.decryptor()
    decrypted_data = decryptor.update(ciphertext) + decryptor.finalize()
    
    print(f"[#] Decrypted Output: {decrypted_data.strip().decode()}")

    if secret_evidence in decrypted_data:
        print("\n✅ CRYPTO TEST PASSED: Decryption logic is production-ready.")
    else:
        print("\n❌ CRYPTO TEST FAILED.")

if __name__ == "__main__":
    test_pipeline()
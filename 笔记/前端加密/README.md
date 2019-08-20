# 加密
+ Md5加密
   + [md5.js](md5.js)
   + 使用方法
   ```
   hex_md5(str_to_be_encrypted)
   ```
+ sha1加密
   + [sha1.js](sha1.js)
   + 使用方法
   ```
   hex_sha1(str_to_be_encrypted)
   ```
+ RSA加密
   + [jsencrypt.js](jsencrypt.js)
   + 使用方法
   ```
   //公钥
   var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfp4T5UK76SfSvn1wr4+PyStkHWONLVITZp5JLkFkHpiERchwShET+WVlLsbbgyt7Yt/boMoxr+XTD2NXd1gPvq11OU3dNYLE5hL2j8BCBw8EswkCbP+GgYdGF3FRw4eGURA4fcSO44IKuWtmtSyw7y1OMqzMUb6PROXrMFbrntQIDAQAB";
   //私钥
   var privateKey = "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJ+nhPlQrvpJ9K+fXCvj4/JK2QdY40tUhNmnkkuQWQemIRFyHBKERP5ZWUuxtuDK3ti39ugyjGv5dMPY1d3WA++rXU5Td01gsTmEvaPwEIHDwSzCQJs/4aBh0YXcVHDh4ZREDh9xI7jggq5a2a1LLDvLU4yrMxRvo9E5eswVuue1AgMBAAECgYBBGEtmX9hIIplKdf5dwtgw9QWSMlLSZw6Xs/Q5LQyvyrOW6mC5yAZdck6vRzFabDz6Pd/FAr8wUxChvapNfbIyhCsyAuqjVWV/aGDhaauQvwm3MrZ33jnMxI1z9UXPHTzWrYOltv/cKVqvDTKzEokDoTzEVLQClaYcEVMwhRrpYQJBANR48h9o1s7y0sAOoVBo5ktGZhb6gHtwNJ4Yw7Aey2bAWjgU4PevUq985+jBWhdAj81dZ0lMwARBIcYzyo0RLMkCQQDAXIup+fViw0BD+gl36kOo5RkTgz3aoALJsDBLGWi2J9QY9i0UZO9LsjNlYlTldKRzJWkhjdAdxuZe+8Mr8tWNAkB39HB92yqrW9wwIhJg21hpVy17+6FeD1MljsWsQTaEpERLNT5tl8YO3W3wsniyd/i38OvHLlWaEUuIIuVQD0pBAkAFXk/ThZNQl0xi2UaMXzBWNVaW0dHXGSIayN0AK4xdkQz9SVmGuS5oeWevy6e84513TTL66b9GJXfmbLZMsrE9AkAXuppwZW4I/xWZ2RaIsKqyyYYJUPbZ9HT3iO6FSUVPskzaOIPgU9sir+UcvJfWgXDWQ2F/4uUogB2ZS45YcFM8";
  //加密
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  encrypt.encrypt(str_to_be_encrypted);
  //解密
  var decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  decrypt.decrypt(encrypt.encrypt(str_to_be_encrypted));
  ```

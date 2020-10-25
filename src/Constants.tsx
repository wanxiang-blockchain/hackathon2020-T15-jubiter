export const BASE_URL = "http://127.0.0.1";
export const MNEMONIC = "reopen symptom voice cabbage annual faint token flower random rifle couch best";
export const PATH = "44\'/118\'/0\'/0/0";
export const USER_INFO = {
    type: "0",
    data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InVzZXJJbmZvIjp7InVzZXJOYW1lIjoianViaXRlciIsIklETnVtIjoiMTEwMTEwMjAyMDAxMDEwMDExIiwiYWdlIjoxOCwic2V4Ijoi55S3IiwibmF0aW9uYWxpdHkiOiLkuK3lm70ifX19LCJzdWIiOiJIb3RlbCBPcmRlciIsIm5iZiI6MTU2Mjk1MDI4MiwiaXNzIjoiZGlkOmp1YjpmdHNhZmUxNWN5ZTgyejhlbmhsMDNkcGVsOWZrOWtuc2x1ZmRwZWp5NWZ1amsifQ.MH9w2KsYjw-NAdh84oMwvm7J_pdk0UWtO8hQYM70Izbfkb4xLZUlA-LzkJEdA-2zBxQGLd6QJFCkMhJY4OHBAw",
    details:
    {
        "payload": {
            "vc": {
                "@context": [
                    "https://www.w3.org/2018/credentials/v1"
                ],
                "type": [
                    "VerifiableCredential"
                ],
                "credentialSubject": {
                    "userInfo": {
                        "userName": "jubiter",
                        "IDNum": "110110202001010011",
                        "age": 18,
                        "sex": "男",
                        "nationality": "中国"
                    }
                }
            },
            "sub": "Hotel Order",
            "nbf": 1562950282,
            "iss": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk"
        },
        "doc": {
            "@context": "https://www.w3.org/2019/did/v1",
            "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk",
            "service": [

            ],
            "authentication": [
                {
                    "type": "Secp256k1SignatureAuthentication2018",
                    "publicKey": [
                        "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1"
                    ]
                }
            ],
            "publicKey": [
                {
                    "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1",
                    "type": "Secp256k1VerificationKey2018",
                    "publicKeyHex": "03f7d4150580c1fb823833719d4ae3a164cdeed38e3968cf33704047aae27682a7"
                }
            ]
        },
        "issuer": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk",
        "signer": {
            "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1",
            "type": "Secp256k1VerificationKey2018",
            "publicKeyHex": "03f7d4150580c1fb823833719d4ae3a164cdeed38e3968cf33704047aae27682a7"
        },
        "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InVzZXJJbmZvIjp7InVzZXJOYW1lIjoianViaXRlciIsIklETnVtIjoiMTEwMTEwMjAyMDAxMDEwMDExIiwiYWdlIjoxOCwic2V4Ijoi55S3IiwibmF0aW9uYWxpdHkiOiLkuK3lm70ifX19LCJzdWIiOiJIb3RlbCBPcmRlciIsIm5iZiI6MTU2Mjk1MDI4MiwiaXNzIjoiZGlkOmp1YjpmdHNhZmUxNWN5ZTgyejhlbmhsMDNkcGVsOWZrOWtuc2x1ZmRwZWp5NWZ1amsifQ.MH9w2KsYjw-NAdh84oMwvm7J_pdk0UWtO8hQYM70Izbfkb4xLZUlA-LzkJEdA-2zBxQGLd6QJFCkMhJY4OHBAw",
        "verifiableCredential": {
            "credentialSubject": {
                "userInfo": {
                    "userName": "jubiter",
                    "IDNum": "110110202001010011",
                    "age": 18,
                    "sex": "男",
                    "nationality": "中国"
                },
                "id": "Hotel Order"
            },
            "issuer": {
                "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk"
            },
            "type": [
                "VerifiableCredential"
            ],
            "@context": [
                "https://www.w3.org/2018/credentials/v1"
            ],
            "issuanceDate": "2019-07-12T16:51:22.000Z",
            "proof": {
                "type": "JwtProof2020",
                "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InVzZXJJbmZvIjp7InVzZXJOYW1lIjoianViaXRlciIsIklETnVtIjoiMTEwMTEwMjAyMDAxMDEwMDExIiwiYWdlIjoxOCwic2V4Ijoi55S3IiwibmF0aW9uYWxpdHkiOiLkuK3lm70ifX19LCJzdWIiOiJIb3RlbCBPcmRlciIsIm5iZiI6MTU2Mjk1MDI4MiwiaXNzIjoiZGlkOmp1YjpmdHNhZmUxNWN5ZTgyejhlbmhsMDNkcGVsOWZrOWtuc2x1ZmRwZWp5NWZ1amsifQ.MH9w2KsYjw-NAdh84oMwvm7J_pdk0UWtO8hQYM70Izbfkb4xLZUlA-LzkJEdA-2zBxQGLd6QJFCkMhJY4OHBAw"
            }
        }
    }
}
export const HEALTH_INFO = {
    type: "1",
    data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImhlYWx0aENvZGUiOnsidXNlck5hbWUiOiJqdWJpdGVyIiwiSUROdW0iOiIxMTAxMTAyMDIwMDEwMTAwMTEiLCJzdGFydFRpbWUiOiIyMDIwLTEwLTIzIiwiZW5kVGltZSI6IjIwMjAtMTAtMjUiLCJzdGF0dXMiOiJncmVlbiJ9fX0sInN1YiI6IkhvdGVsIE9yZGVyIiwibmJmIjoxNTYyOTUwMjgyLCJpc3MiOiJkaWQ6anViOmZ0c2FmZTE1Y3llODJ6OGVuaGwwM2RwZWw5Zms5a25zbHVmZHBlank1ZnVqayJ9.Ke3KPuamRLSvGGc-YJ0hHh8us9uqJLmh-DUfeyd1qaC42pWUek1jvVs_Y1lLpM4J0g3V6MzGql_ZdKvlyLJMPA",
    details:
    {
        "payload": {
            "vc": {
                "@context": [
                    "https://www.w3.org/2018/credentials/v1"
                ],
                "type": [
                    "VerifiableCredential"
                ],
                "credentialSubject": {
                    "healthCode": {
                        "userName": "jubiter",
                        "IDNum": "110110202001010011",
                        "startTime": "2020-10-23",
                        "endTime": "2020-10-25",
                        "status": "green"
                    }
                }
            },
            "sub": "Hotel Order",
            "nbf": 1562950282,
            "iss": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk"
        },
        "doc": {
            "@context": "https://www.w3.org/2019/did/v1",
            "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk",
            "service": [

            ],
            "authentication": [
                {
                    "type": "Secp256k1SignatureAuthentication2018",
                    "publicKey": [
                        "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1"
                    ]
                }
            ],
            "publicKey": [
                {
                    "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1",
                    "type": "Secp256k1VerificationKey2018",
                    "publicKeyHex": "03f7d4150580c1fb823833719d4ae3a164cdeed38e3968cf33704047aae27682a7"
                }
            ]
        },
        "issuer": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk",
        "signer": {
            "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1",
            "type": "Secp256k1VerificationKey2018",
            "publicKeyHex": "03f7d4150580c1fb823833719d4ae3a164cdeed38e3968cf33704047aae27682a7"
        },
        "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImhlYWx0aENvZGUiOnsidXNlck5hbWUiOiJqdWJpdGVyIiwiSUROdW0iOiIxMTAxMTAyMDIwMDEwMTAwMTEiLCJzdGFydFRpbWUiOiIyMDIwLTEwLTIzIiwiZW5kVGltZSI6IjIwMjAtMTAtMjUiLCJzdGF0dXMiOiJncmVlbiJ9fX0sInN1YiI6IkhvdGVsIE9yZGVyIiwibmJmIjoxNTYyOTUwMjgyLCJpc3MiOiJkaWQ6anViOmZ0c2FmZTE1Y3llODJ6OGVuaGwwM2RwZWw5Zms5a25zbHVmZHBlank1ZnVqayJ9.Ke3KPuamRLSvGGc-YJ0hHh8us9uqJLmh-DUfeyd1qaC42pWUek1jvVs_Y1lLpM4J0g3V6MzGql_ZdKvlyLJMPA",
        "verifiableCredential": {
            "credentialSubject": {
                "healthCode": {
                    "userName": "jubiter",
                    "IDNum": "110110202001010011",
                    "startTime": "2020-10-23",
                    "endTime": "2020-10-25",
                    "status": "green"
                },
                "id": "Hotel Order"
            },
            "issuer": {
                "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk"
            },
            "type": [
                "VerifiableCredential"
            ],
            "@context": [
                "https://www.w3.org/2018/credentials/v1"
            ],
            "issuanceDate": "2019-07-12T16:51:22.000Z",
            "proof": {
                "type": "JwtProof2020",
                "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImhlYWx0aENvZGUiOnsidXNlck5hbWUiOiJqdWJpdGVyIiwiSUROdW0iOiIxMTAxMTAyMDIwMDEwMTAwMTEiLCJzdGFydFRpbWUiOiIyMDIwLTEwLTIzIiwiZW5kVGltZSI6IjIwMjAtMTAtMjUiLCJzdGF0dXMiOiJncmVlbiJ9fX0sInN1YiI6IkhvdGVsIE9yZGVyIiwibmJmIjoxNTYyOTUwMjgyLCJpc3MiOiJkaWQ6anViOmZ0c2FmZTE1Y3llODJ6OGVuaGwwM2RwZWw5Zms5a25zbHVmZHBlank1ZnVqayJ9.Ke3KPuamRLSvGGc-YJ0hHh8us9uqJLmh-DUfeyd1qaC42pWUek1jvVs_Y1lLpM4J0g3V6MzGql_ZdKvlyLJMPA"
            }
        }
    }
}
export const HOTEL_INFO = {
    type: "2",
    data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImhvdGVsT3JkZXIiOnsidXNlcm5hbWUiOiIxMjMiLCJob3RlbE5hbWUiOiLphZLlupcxIiwic3RhcnRUaW1lIjoiMjAyMC0xMS0xMSAwMDowMDowMCIsImVuZFRpbWUiOiIyMDIwLTExLTExIDAwOjAwOjAwIiwidHlwZSI6IuixquWNjuWkp-W6iuaIvy0yOTnlhYMiLCJwaG9uZU51bWJlciI6IjEzODg4ODg4ODg4In19fSwic3ViIjoiSG90ZWwgT3JkZXIiLCJuYmYiOjE1NjI5NTAyODIsImlzcyI6ImRpZDpqdWI6ZnRzYWZlMTVjeWU4Mno4ZW5obDAzZHBlbDlmazlrbnNsdWZkcGVqeTVmdWprIn0.iDIj0Di8zbsnHTRkAiq9ZqgXnzU_NsF7TucTB-nZ0EqbJgB-eg9QCkeyOi5pZPm5X5nCW8zuugwiQ7YVawVbyg",
    details: {
        "payload": {
            "vc": {
                "@context": [
                    "https://www.w3.org/2018/credentials/v1"
                ],
                "type": [
                    "VerifiableCredential"
                ],
                "credentialSubject": {
                    "hotelOrder": {
                        "username": "123",
                        "hotelName": "酒店1",
                        "startTime": "2020-11-11 00:00:00",
                        "endTime": "2020-11-11 00:00:00",
                        "type": "豪华大床房-299元",
                        "phoneNumber": "13888888888"
                    }
                }
            },
            "sub": "Hotel Order",
            "nbf": 1562950282,
            "iss": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk"
        },
        "doc": {
            "@context": "https://www.w3.org/2019/did/v1",
            "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk",
            "service": [

            ],
            "authentication": [
                {
                    "type": "Secp256k1SignatureAuthentication2018",
                    "publicKey": [
                        "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1"
                    ]
                }
            ],
            "publicKey": [
                {
                    "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1",
                    "type": "Secp256k1VerificationKey2018",
                    "publicKeyHex": "03f7d4150580c1fb823833719d4ae3a164cdeed38e3968cf33704047aae27682a7"
                }
            ]
        },
        "issuer": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk",
        "signer": {
            "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1",
            "type": "Secp256k1VerificationKey2018",
            "publicKeyHex": "03f7d4150580c1fb823833719d4ae3a164cdeed38e3968cf33704047aae27682a7"
        },
        "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImhvdGVsT3JkZXIiOnsidXNlcm5hbWUiOiIxMjMiLCJob3RlbE5hbWUiOiLphZLlupcxIiwic3RhcnRUaW1lIjoiMjAyMC0xMS0xMSAwMDowMDowMCIsImVuZFRpbWUiOiIyMDIwLTExLTExIDAwOjAwOjAwIiwidHlwZSI6IuixquWNjuWkp-W6iuaIvy0yOTnlhYMiLCJwaG9uZU51bWJlciI6IjEzODg4ODg4ODg4In19fSwic3ViIjoiSG90ZWwgT3JkZXIiLCJuYmYiOjE1NjI5NTAyODIsImlzcyI6ImRpZDpqdWI6ZnRzYWZlMTVjeWU4Mno4ZW5obDAzZHBlbDlmazlrbnNsdWZkcGVqeTVmdWprIn0.iDIj0Di8zbsnHTRkAiq9ZqgXnzU_NsF7TucTB-nZ0EqbJgB-eg9QCkeyOi5pZPm5X5nCW8zuugwiQ7YVawVbyg",
        "verifiableCredential": {
            "credentialSubject": {
                "hotelOrder": {
                    "username": "123",
                    "hotelName": "酒店1",
                    "startTime": "2020-11-11 00:00:00",
                    "endTime": "2020-11-11 00:00:00",
                    "type": "豪华大床房-299元",
                    "phoneNumber": "13888888888"
                },
                "id": "Hotel Order"
            },
            "issuer": {
                "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk"
            },
            "type": [
                "VerifiableCredential"
            ],
            "@context": [
                "https://www.w3.org/2018/credentials/v1"
            ],
            "issuanceDate": "2019-07-12T16:51:22.000Z",
            "proof": {
                "type": "JwtProof2020",
                "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImhvdGVsT3JkZXIiOnsidXNlcm5hbWUiOiIxMjMiLCJob3RlbE5hbWUiOiLphZLlupcxIiwic3RhcnRUaW1lIjoiMjAyMC0xMS0xMSAwMDowMDowMCIsImVuZFRpbWUiOiIyMDIwLTExLTExIDAwOjAwOjAwIiwidHlwZSI6IuixquWNjuWkp-W6iuaIvy0yOTnlhYMiLCJwaG9uZU51bWJlciI6IjEzODg4ODg4ODg4In19fSwic3ViIjoiSG90ZWwgT3JkZXIiLCJuYmYiOjE1NjI5NTAyODIsImlzcyI6ImRpZDpqdWI6ZnRzYWZlMTVjeWU4Mno4ZW5obDAzZHBlbDlmazlrbnNsdWZkcGVqeTVmdWprIn0.iDIj0Di8zbsnHTRkAiq9ZqgXnzU_NsF7TucTB-nZ0EqbJgB-eg9QCkeyOi5pZPm5X5nCW8zuugwiQ7YVawVbyg"
            }
        }
    }


}

export const VC_DEFAULT = [USER_INFO, HEALTH_INFO, HOTEL_INFO]

export const USER_DID = {
    "@context": "https://www.w3.org/2019/did/v1",
    "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk",
    "service": [

    ],
    "authentication": [
        {
            "type": "Secp256k1SignatureAuthentication2018",
            "publicKey": [
                "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1"
            ]
        }
    ],
    "publicKey": [
        {
            "id": "did:jub:ftsafe15cye82z8enhl03dpel9fk9knslufdpejy5fujk#key-1",
            "type": "Secp256k1VerificationKey2018",
            "publicKeyHex": "03f7d4150580c1fb823833719d4ae3a164cdeed38e3968cf33704047aae27682a7"
        }
    ]
}
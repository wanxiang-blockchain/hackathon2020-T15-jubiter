import {
    JubDID, KeyPair, JubRegistry, JubResolver, createHDKeyPair, verifyCredential
} from "JubDID/src";
import {
    FtsafeProxy
} from "JubDID/src/FtsafeProxy";
import { BASE_URL, PATH } from "../Constants";

let REGISTRY: JubRegistry;
let RESOLVER: JubResolver;
let FTPROXY: FtsafeProxy;
// Create Key Pair
const createAccount = async function (params: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!params.mnemonic) {
            return reject(new Error("mnemonic not null"));
        }
        let key: KeyPair = createHDKeyPair(params.mnemonic, PATH);
        return resolve(new JubDID(key));
    });
}
// // Generate Mnemonic
// 
// Use ftsafe proxy to create a new cosmos account
const registJubAccount = async function (params: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!params.keyPair || !params.keyPair.address || !params.keyPair.pk_bech32) {
            return reject(new Error("params not null"));
        }
        getFtsafeProxy().createAccount(params.keyPair.address, params.keyPair.pk_bech32)
            .then(function (ret) {
                return resolve(ret);
            }).catch(function (error) {
                return reject(error);
            });
    });
}
// Use DID registry to regist a DID
const registJubDID = async function (params: KeyPair): Promise<any> {
    return new Promise((resolve, reject) => {
        // console.error(JSON.stringify(params))
        if (!params.address) {
            return reject(new Error());
        }
        let jubDID = new JubDID(params);
        getRegistry().registry(jubDID).then(function (ret) {
            return resolve(ret);
        }).catch(function (error) {
            return reject(error);
        });
    });
}
// resolve DID
const resolveJubDID = async function (params: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!params.address) {
            return reject(new Error("address not null"));
        }
        getResolver().resolve("did:jub:" + params.address).then(function (ret) {
            if (!ret) {
                return reject(new Error("[" + params.address + "] Not Fund!"));
            }
            return resolve(ret);
        }).catch(function (error) {
            console.error("JubCore:resolveJubDID err")
            return reject(error);
        });
    });
}
//update DID
const updateJubDID = async function (params: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!params.oldKeyPair || !params.newKeyPair) {
            return reject(new Error("params not null"));
        }
        getRegistry().update(params.oldKeyPair, params.newKeyPair).then(function (ret) {
            return resolve(ret);
        }).catch(function (error) {
            return reject(error);
        });
    });
}
// sign JWT
const signJuBJWT = async function (params: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!params) {
            return reject(new Error("params not null"));
        }
        getRegistry().signvc(params).then(function (ret) {
            return resolve(ret);
        }).catch(function (error) {
            return reject(error);
        });
    });
};
//  verify JWT
const verifyJuBJWT = async function (params: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!params) {
            return reject(new Error("params not null"));
        }
        verifyCredential(params.signedJwt, getResolver())
            .then(function (ret) {
                return resolve(ret);
            }).catch(function (error) {
                return reject(error);
            });
    });
}
// deactivate DID
const deactivateJubDID = async function (params: KeyPair): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!params) {
            return reject(new Error("params not null"));
        }
        getRegistry().deactivate(new JubDID(params)).then(function (ret) {
            return resolve(ret);
        }).catch(function (error) {
            return reject(error);
        });
    });
}
//GET Registry
function getRegistry(): JubRegistry {
    if (!REGISTRY) {
        REGISTRY = new JubRegistry(BASE_URL + "/registrar", BASE_URL + "/blockchain");
    }
    return REGISTRY;
}
//GET Resolver
function getResolver(): JubResolver {
    if (!RESOLVER) {
        RESOLVER = new JubResolver(BASE_URL + "/resolver");
    }
    return RESOLVER;
}
//GET FtsafeProxy
function getFtsafeProxy(): FtsafeProxy {
    if (!FTPROXY) {
        FTPROXY = new FtsafeProxy(BASE_URL + "/registrar");
    }
    return FTPROXY;
}
// show vcs to others
const showVCToOthers = async function (url = '', params: any = {}): Promise<any> {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params) // body data type must match "Content-Type" header
    });
    if (response.status == 200) {
        return response.json();
    } else {
        return "";
    }
}
export {
    createAccount,
    registJubAccount,
    registJubDID,
    resolveJubDID,
    updateJubDID,
    signJuBJWT,
    verifyJuBJWT,
    deactivateJubDID,
    getResolver,
    getRegistry,
    getFtsafeProxy,
    showVCToOthers
}
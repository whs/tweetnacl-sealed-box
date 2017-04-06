import nacl from 'tweetnacl';
import nonceGenerator from './nonce';
import {overheadLength} from './consts';
import {zero} from './utils';

export default function seal(m, pk){
	var c = new Uint8Array(overheadLength + m.length);

	var ek = nacl.box.keyPair();
	c.set(ek.publicKey);

	var nonce = nonceGenerator(ek.publicKey, pk);
	var boxed = nacl.box(m, nonce, pk, ek.secretKey);
	c.set(boxed, ek.publicKey.length);

	zero(ek.secretKey);

	return c;
};

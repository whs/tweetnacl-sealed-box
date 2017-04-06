import nacl from 'tweetnacl';
import nonceGenerator from './nonce';

export default function open(c, pk, sk){
	var epk = c.subarray(0, nacl.box.publicKeyLength);
	var nonce = nonceGenerator(epk, pk);

	var boxData = c.subarray(nacl.box.publicKeyLength);
	return nacl.box.open(boxData, nonce, epk, sk);
};

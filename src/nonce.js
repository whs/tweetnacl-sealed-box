import nacl from 'tweetnacl';
import blake from 'blakejs/blake2b';

export default function nonce(pk1, pk2){
	var state = blake.blake2bInit(nacl.box.nonceLength, null);
	blake.blake2bUpdate(state, pk1);
	blake.blake2bUpdate(state, pk2);
	return blake.blake2bFinal(state);
};

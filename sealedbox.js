var nacl = require('tweetnacl');
var blake = require('blakejs/blake2b');

var sealedBox = {
	zero: true,
	overheadLength: nacl.box.publicKeyLength + nacl.box.overheadLength,

	_nonce: function(pk1, pk2){
		var state = blake.blake2bInit(nacl.box.nonceLength, null);
		blake.blake2bUpdate(state, pk1);
		blake.blake2bUpdate(state, pk2);
		return blake.blake2bFinal(state);
	},
	_zero: function(buf){
		if(!this.zero){
			return;
		}

		for(var i = 0; i < buf.length; i++){
			buf[i] = 0;
		}
	},
	seal: function(m, pk){
		var c = new Uint8Array(this.overheadLength + m.length);

		var ek = nacl.box.keyPair();
		c.set(ek.publicKey);

		var nonce = this._nonce(ek.publicKey, pk);
		var boxed = nacl.box(m, nonce, pk, ek.secretKey);
		c.set(boxed, ek.publicKey.length);

		this._zero(ek.secretKey);

		return c;
	},
	open: function(c, pk, sk){
		var epk = c.subarray(0, nacl.box.publicKeyLength);
		var nonce = this._nonce(epk, pk);

		var boxData = c.subarray(nacl.box.publicKeyLength);
		return nacl.box.open(boxData, nonce, epk, sk);
	},
}

module.exports = sealedBox;

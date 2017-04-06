var assert = require('assert');
var sodium = require('sodium').api;
var tweetnacl = require('tweetnacl');
var sealedbox = require('../sealedbox');

var plainText = 'test message';
var textBuffer = Buffer.from(plainText);

describe('SealedBox', function(){
	describe('#_nonce', function(){
		it('return buffer of size crypto_secretbox_NONCEBYTES', function(){
			var kp1 = sodium.crypto_box_keypair();
			var kp2 = sodium.crypto_box_keypair();

			var out = sealedbox._nonce(kp1.publicKey, kp2.publicKey);
			assert.equal(out.length, sodium.crypto_secretbox_NONCEBYTES);
		});
	});

	describe('#seal', function(){
		it.skip('can be opened with crypto_box_seal_open', function(){
			var keyPair = tweetnacl.box.keyPair();
			var sealed = sealedbox.seal(textBuffer, keyPair.publicKey);

			var result = sodium.crypto_box_seal_open(sealed, keyPair.publicKey, keyPair.secretKey);
			assert(textBuffer.equals(result), result.toString());
		});
	});

	describe('#open', function(){
		it.skip('can open crypto_box_seal data', function(){
			var keyPair = sodium.crypto_box_keypair();
			var sealed = sodium.crypto_box_seal(textBuffer, keyPair.publicKey);

			var result = sealedbox.open(new Uint8Array(sealed), keyPair.publicKey, keyPair.secretKey);
			assert(textBuffer.equals(Buffer.from(result)), result.toString());
		});
		it('can open own sealed data', function(){
			var keyPair = tweetnacl.box.keyPair();
			var sealed = sealedbox.seal(textBuffer, keyPair.publicKey);
			
			var result = sealedbox.open(sealed, keyPair.publicKey, keyPair.secretKey);
			assert(textBuffer.equals(Buffer.from(result)), result.toString());
		});
		it('return null when integrity is not preserved', function(){
			var keyPair = tweetnacl.box.keyPair();
			var sealed = sealedbox.seal(textBuffer, keyPair.publicKey);
			sealed[10] = 99;
			
			var result = sealedbox.open(sealed, keyPair.publicKey, keyPair.secretKey);
			assert.ok(result === null);
		});
	});
});

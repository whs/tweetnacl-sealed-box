var assert = require('assert');
var sodium = require('libsodium-wrappers');
var tweetnacl = require('tweetnacl');
var sealedbox = require('../');

var plainText = 'test message';
var textBuffer = Buffer.from(plainText);

describe('SealedBox', function(){
	describe('#seal', function(){
		it('can be opened with crypto_box_seal_open', function(){
			var keyPair = tweetnacl.box.keyPair();
			var sealed = sealedbox.seal(textBuffer, keyPair.publicKey);

			var result = sodium.crypto_box_seal_open(sealed, keyPair.publicKey, keyPair.secretKey);
			assert(textBuffer.equals(result), result.toString());
		});
	});

	describe('#open', function(){
		it('can open crypto_box_seal data', function(){
			var keyPair = sodium.crypto_box_keypair();
			var sealed = sodium.crypto_box_seal(textBuffer, keyPair.publicKey);

			var result = sealedbox.open(new Uint8Array(sealed), keyPair.publicKey, keyPair.privateKey);
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

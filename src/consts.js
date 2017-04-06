import nacl from 'tweetnacl';

export const overheadLength = nacl.box.publicKeyLength + nacl.box.overheadLength;

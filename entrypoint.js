export * from './src/consts';

import seal from './src/seal';
import open from './src/open';

const sealedbox = {seal, open};
export default sealedbox;
export sealedbox;

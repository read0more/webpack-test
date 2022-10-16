import { common, asynchronous } from './common/common.js';

function print() {
    console.warn(common());
    console.warn(asynchronous());
}

print();
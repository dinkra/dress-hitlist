'use strict';

import _ from 'lodash'; //ES6 import to check our babel loader
import HelloWorld from './hello-world.jsx';

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

console.log(other, 'test'); //[1, 2, 3, [4]]
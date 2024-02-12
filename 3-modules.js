// Modules
// CommonJS, every file is module (by defult)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names.js');
const sayHi = require('./5-utils.js');

require('./7-mind-grenade')
sayHi('Reff')
sayHi(names.john)
sayHi(names.peter)
//CommonJs, every file is modulke by default
// Modules - Encapsulated Code (only share minimum)
const {john, matt} = require('./4-names.js');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind-grenade');
sayHi('davo');
sayHi(john)
sayHi(matt)
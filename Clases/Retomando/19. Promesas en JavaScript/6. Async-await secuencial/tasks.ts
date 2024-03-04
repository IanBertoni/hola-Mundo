//estamos simulando tareas asincronas

const util = require("util");
const sleep = util.promisify(setTimeout);

module.exports = {
  async taskOne() {
    await sleep(4000);
    return "Valor Uno";
  },

  async taskTwo() {
    await sleep(2000);
    return "Valor Dos";
  },
};

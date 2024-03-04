const { taskOne, taskTwo } = require("./tasks");
async function main() {
  const valor1 = await taskOne();
  const valor2 = await taskTwo();

  console.log(taskOne);
  console.log(taskTwo);
}

main();

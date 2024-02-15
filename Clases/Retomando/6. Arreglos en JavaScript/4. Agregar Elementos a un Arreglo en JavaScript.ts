let autos: string[] = ["BWM", "Mercedes Benz", "Alfa romero"];

console.log(autos);

console.log(autos[0]);

console.log(autos[1]);

console.log(autos[2]);

// si queremos ver todos al mismo tiempo hacemos lo siguiente

for (let i = 0; i < autos.length; i++) {
  console.log(`${i} : ${autos[i]}`);
}

autos[1] = "Ferrari";

console.log(autos);

autos.push("Mercedes Benz");

console.log(autos);

console.log(autos.length);
autos[autos.length] = "Audi";

console.log(autos);

// poner un elemento en el indice que quieras, dejando espacios en blanco entre ellos

autos[6] = "McClaren";

console.log(autos);

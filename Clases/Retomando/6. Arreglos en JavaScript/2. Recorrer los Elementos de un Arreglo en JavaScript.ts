let autos: string[] = ["BWM", "Mercedes Benz", "Alfa romero"];

console.log(autos);

console.log(autos[0]);

console.log(autos[1]);

console.log(autos[2]);

// si queremos ver todos al mismo tiempo hacemos lo siguiente

for (let i = 0; i < autos.length; i++) {
  console.log(`${i} : ${autos[i]}`);
}

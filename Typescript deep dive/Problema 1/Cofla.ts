import * as rls from 'readline-sync'

const dineroCofla : number = rls.questionFloat("Que dinero tiene cofla?: ")

if (dineroCofla >= 0.6 && dineroCofla < 1){
  console.log("comprate un helado de agua");
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
  console.log("Comprate un helado de crema");
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
  console.log("Comprate un heladix");
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
  console.log("Comprate un heladovich");
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
  console.log("Comprate un helardo");
}
else if (dineroCofla >= 2.9){
  console.log("Comprate un helado con confites o 1/4");
}
else {
  console.log("lo siento no tiene dinero buddy")
}

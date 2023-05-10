"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dineroRoberto = rls.questionFloat("Que dinero tiene roberto?");
var dineroPedro = rls.questionFloat("Que dinero tiene pedro?");
var dineroCofla = rls.questionFloat("Que dinero tiene cofla?");
if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate un helado de agua");
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate un helado de crema");
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate un heladix");
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate un heladovich");
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate un helardo");
}
else if (dineroCofla >= 2.9) {
    alert("Comprate un helado con confites o 1/4");
}
else {
    alert("lo siento no tiene dinero buddy");
}

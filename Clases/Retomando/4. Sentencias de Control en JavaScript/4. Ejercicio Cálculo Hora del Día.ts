import { log } from "console";
import * as rls from "readline-sync";

let hora: number = rls.questionInt("Ponga una hora en el formato 24 hs: ");

if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else if (hora >= 19 && hora <= 24) {
  console.log("Buenas noches");
} else if (hora >= 0 && hora <= 6) {
  console.log("Mimido");
} else {
  console.log("Ingresar una hora(Usar formato de 24 hs)");
}

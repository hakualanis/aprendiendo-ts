import type { Item } from "./types";
import { soloRaros, nombresEnMayusculas, buscar, contarItems, vender } from "./cofre";

const miCofre: Item[] = [
  { nombre: "Diamante", cantidad: 64, rareza: "epico" },
  { nombre: "Madera de roble", cantidad: 128, rareza: "comun" },
  { nombre: "Hierro", cantidad: 32, rareza: "raro" }
];

console.log("Items raros:", soloRaros(miCofre));
console.log("Nombres:", nombresEnMayusculas(miCofre));
console.log("Buscando Hierro:", buscar(miCofre, "Hierro"));
console.log("Total de items:", contarItems(miCofre));

console.log("--- VENDIENDO ITEMS ---");

vender(miCofre, "Hierro", 10);
console.log("Cofre después de vender hierro:", miCofre);

vender(miCofre, "Diamante", 64);
console.log("Cofre después de vender todo el diamante:", miCofre);
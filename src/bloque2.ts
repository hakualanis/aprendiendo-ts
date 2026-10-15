type Item = {
  nombre: string; 
  cantidad: number;
  rareza: string;
};

const cofre: Item[] = [
  { nombre: "Diamante", cantidad: 64, rareza: "epico" },
  { nombre: "Madera de roble", cantidad: 128, rareza: "comun" },
  { nombre: "Hierro", cantidad: 32, rareza: "raro" },
  { nombre: "Oro", cantidad: 16, rareza: "epico" },
  { nombre: "Piedra", cantidad: 256, rareza: "comun" }
];

const soloRaros = cofre.filter((item) => item.rareza === "raro");
console.log("Items raros:", soloRaros);

const nombresEnMayusculas = cofre.map((item) => item.nombre.toUpperCase());

console.log("Nombres en mayúsculas:", nombresEnMayusculas);

const itemEncontrado = cofre.find((item) => item.nombre === "Diamante");
console.log("Item encontrado:", itemEncontrado);

const itemFantasma = cofre.find((item) => item.nombre === "Espada de Netherite");
console.log("El item fantasma da como resultado:", itemFantasma);

const totalItems = cofre.reduce((acumulador, item) => acumulador + item.cantidad, 0);

console.log("Total de items en el cofre:", totalItems); 
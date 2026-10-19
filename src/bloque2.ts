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

function soloRaros(inventario: Item[]): Item[] {
  return inventario.filter((item) => item.rareza === "raro");
}

function nombresEnMayusculas(inventario: Item[]): string[] {
  return inventario.map((item) => item.nombre.toUpperCase());
}

function buscar(inventario: Item[], nombreBuscado: string) {
  return inventario.find((item) => item.nombre === nombreBuscado);
}

function contarItems(inventario: Item[]): number {
  return inventario.reduce((acumulador, item) => acumulador + item.cantidad, 0);
}
console.log("Solo raros:", soloRaros(cofre));
console.log("En mayúsculas:", nombresEnMayusculas(cofre));
console.log("Buscando Diamante:", buscar(cofre, "Diamante"));
console.log("Total de items:", contarItems(cofre));

// Respuesta para el reporte: 
// Cuando la función buscar (find) intenta encontrar un item que no existe, devuelve undefined.
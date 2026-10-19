import type{ Item } from "./types";

export function soloRaros(inventario: Item[]): Item[] {
  return inventario.filter((item) => item.rareza === "raro");
}

export function nombresEnMayusculas(inventario: Item[]): string[] {
  return inventario.map((item) => item.nombre.toUpperCase());
}

export function buscar(inventario: Item[], nombreBuscado: string) {
  return inventario.find((item) => item.nombre === nombreBuscado);
}

export function contarItems(inventario: Item[]): number {
  return inventario.reduce((acumulador, item) => acumulador + item.cantidad, 0);
}

export function vender(inventario: Item[], nombreVendido: string, cantidadVendida: number): void {
  // 1. Buscamos en qué posición (índice) está el item
  const indice = inventario.findIndex((item) => item.nombre === nombreVendido);

// Si indice es diferente a -1, significa que sí lo encontró
  if (indice !== -1) {
    const itemEncontrado = inventario[indice];

    // Le damos a TypeScript la garantía total de que el objeto existe
    if (itemEncontrado) {
      // 2. Le restamos la cantidad
      itemEncontrado.cantidad -= cantidadVendida;

      // 3. Si la cantidad llegó a 0 (o menos), lo destruimos
      if (itemEncontrado.cantidad <= 0) {
        inventario.splice(indice, 1);
      }
    }
  }
}
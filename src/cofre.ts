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
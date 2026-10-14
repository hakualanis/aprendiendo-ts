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

function contarItems(inventario: Item[]): number {
  let total = 0; 
  
  for (const item of inventario) {

    total += item.cantidad;
  }
  
  return total;
}

function tieneItem(inventario: Item[], nombreBuscado: string): boolean {
  for (const item of inventario) {
    
    if (item.nombre === nombreBuscado) {
      return true;
    }
  }
  
  return false;
}

//cofre.length propiedad 
//item.nombre propiedad
//contarItems(cofre) funcion
//cofre.push(item) funcion
//nombre.toUpperCase() funcion
//item.cantidad propiedad

//si tiene paréntesis () es una acción que se ejecuta (función). 
// Si solo usa el punto ., es solo asomarte a ver un dato (propiedad).
//  Si tiene ambos, los paréntesis () siempre ganan y mandan. Siguen siendo funciones (aunque cuando una función vive adentro de un objeto, los programadores suelen llamarle método). 
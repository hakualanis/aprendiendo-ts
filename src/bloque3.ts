type Item = {
  nombre: string; 
  cantidad: number;
  rareza: "comun" | "raro" | "epico"; 
  encantamiento?: string; 
};

const cofre: Item[] = [
  { nombre: "Espada de diamante", cantidad: 1, rareza: "epico",encantamiento: "Filo V"}
];
function describirItem(item: Item): string {
    switch (item.rareza) {
        case "comun":
            return `El item ${item.nombre} es común y tiene una cantidad de ${item.cantidad}.`;
        case "raro":
            return `El item ${item.nombre} es raro y tiene una cantidad de ${item.cantidad}.`;
        case "epico":
            return `El item ${item.nombre} es épico y tiene una cantidad de ${item.cantidad}.`;
        default:
            return `El item ${item.nombre} tiene una rareza desconocida.`;
    }
}
const miItem = cofre[0];

if (miItem) {
  console.log(describirItem(miItem));
} else {
  console.log("No hay ningún item en esa posición.");
}

// La prueba del detective que pidió tu hermano
const resultadoBusqueda = cofre.find((item) => item.nombre === "Pocion de curacion");

if (resultadoBusqueda) {
  // Si lo encuentra, lo describe
  console.log(describirItem(resultadoBusqueda));
} else {
  // Si es undefined, entra al else y muestra este mensaje
  console.log("Nelson, ese item no existe en el cofre.");
}
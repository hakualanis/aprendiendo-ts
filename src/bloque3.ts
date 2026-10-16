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
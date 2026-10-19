export type Item = {
  nombre: string;
  cantidad: number;
  rareza: "comun" | "raro" | "epico";
  encantamiento?: string;
};
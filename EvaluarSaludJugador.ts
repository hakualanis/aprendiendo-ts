function evaluarSaludJugador(corazones: number): string {
if (corazones >= 8) {
    return "¡Salud excelente!";
}else if (corazones >= 4 && corazones < 8) {
    return "¡Hora de comer un pan!";
}else {
    return "¡RUN BITCH RUUUUUUN!";
}}

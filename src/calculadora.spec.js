import calculadora from "./calculadora.js";

describe("Determinar el precio total", () => {
    it("Si ingreso la cantidad y el precio del item, me retorna el precio neto", () => {
        expect(calculadora(2, 100)).toEqual(200);
    });
});
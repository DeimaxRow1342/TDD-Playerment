import calculadora from "./calculadora.js";

describe("Determinar el precio total", () => {
    it("Si ingreso la cantidad y el precio del item, me retorna el precio neto", () => {
        expect(calculadora(2, 100)).toEqual(200);
    });
    it("Si ingreso UT, me debe devolver el precio con el impuesto", () => {
        expect(calculadora(2, 100, "UT")).toEqual(213);
    });
    it("Si ingreso NV, me debe devolver el precio con el impuesto", () => {
        expect(calculadora(2, 100, "NV")).toEqual(216);
    });
});
import calculadora from "./calculadora.js";

describe("Determinar el precio total", () => {
    it("Si ingreso la cantidad y el precio del item, me retorna el precio neto", () => {
        expect(calculadora(2, 100)).toEqual(200);
    });
    it("Si ingreso UT, me debe devolver el precio con el impuesto", () => {
        expect(calculadora(2, 100, "UT")).toEqual(213.3);
    });
    it("Si ingreso NV, me debe devolver el precio con el impuesto", () => {
        expect(calculadora(2, 100, "NV")).toEqual(216);
    });
    it("Si ingreso TX, me debe devolver el precio con el impuesto", () => {
        expect(calculadora(2, 100, "TX")).toEqual(212.5);
    });
    it("Si ingreso AL, me debe devolver el precio con el impuesto", () => {
        expect(calculadora(2, 100, "AL")).toEqual(208);
    });
    it("Si ingreso AL, me debe devolver el precio con el impuesto", () => {
        expect(calculadora(2, 100, "CA")).toEqual(216.5);
    });
    it("Si ingresa una sumatoria mas de precio de 1000$, tendra un 3% de descuento", () => {
        expect(calculadora(2, 1000, "CA")).toEqual(2105);
    });
    it("Si ingresa una sumatoria de precio mayor o igual a 3000$, tendra un 5% de descuento", () => {
        expect(calculadora(3, 1000, "TX")).toEqual(3037.5);
    });
    it("Si ingresa una sumatoria de precio mayor o igual a 7000$, tendra un 7% de descuento", () => {
        expect(calculadora(7, 1000, "TX")).toEqual(6947.5);
    });
    it("Si ingresa una sumatoria de precio mayor o igual a 10000$, tendra un 10% de descuento", () => {
        expect(calculadora(10, 2000, "AL")).toEqual(18800);
    });
    it("Si ingresa una sumatoria de precio mayor o igual a 30000$, tendra un 15% de descuento", () => {
        expect(calculadora(10, 3000, "AL")).toEqual(26700);
    });
    it("Si no se ingresa un producto, el descuento por producto es igual a 0", () => {
        expect(calculadora(10, 300, "UT")).toEqual(3049.5);
    });
    it("Si se ingresa el producto Alimentos, se agrega un 2% de descuento al descuento total", () => {
        expect(calculadora(10, 300, "UT", "Alimentos")).toEqual(2989.5);
    });
});
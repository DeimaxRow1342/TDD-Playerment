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
    it("Si se ingresa el producto Bebidas alcoholicas, se agrega un 0% de descuento al descuento total", () => {
        expect(calculadora(10, 300, "UT", "Bebidas")).toEqual(3259.5);
    });
    it("Si se ingresa el producto Material de escritorio, se agrega un 1.5% de descuento al descuento total", () => {
        expect(calculadora(10, 300, "UT", "Escritorio")).toEqual(3004.5);
    });
    it("Si se ingresa el producto Muebles, se agrega un 0% de descuento al descuento total", () => {
        expect(calculadora(10, 300, "UT", "Muebles")).toEqual(3139.5);
    });
    it("Si se ingresa el producto Electronicos, se agrega un 1% de descuento al descuento total", () => {
        expect(calculadora(10, 300, "UT", "Electronicos")).toEqual(3139.5);
    });
    it("Si se ingresa el producto Vestimenta, se agrega un 0% de descuento al descuento total", () => {
        expect(calculadora(10, 300, "UT", "Vestimenta")).toEqual(3109.5);
    });
    it("Si se ingresa categoria alimentos, se tendra un impuesto del 0%", () => {
        expect(calculadora(10, 300, "UT", "Alimentos")).toEqual(2989.5);
    });
    it("Si se ingresa categoria Bebidas alcoholicas, se tendra un impuesto del 7%", () => {
        expect(calculadora(10, 300, "UT", "Bebidas")).toEqual(3259.5);
    });
    it("Si se ingresa categoria Material de escritorio, se tendra un impuesto del 0%", () => {
        expect(calculadora(10, 300, "UT", "Escritorio")).toEqual(3004.5);
    });
    it("Si se ingresa categoria muebles, se tendra un impuesto del 3%", () => {
        expect(calculadora(10, 30, "UT", "Muebles")).toEqual(328.95);
    });
    it("Si se ingresa categoria electronicos, se tendra un impuesto del 4%", () => {
        expect(calculadora(10, 30, "UT", "Electronicos")).toEqual(328.95);
    });
    it("Si se ingresa categoria vestimenta, se tendra un impuesto del 2%", () => {
        expect(calculadora(10, 30, "UT", "Vestimenta")).toEqual(325.95);
    });
    it("Si se ingresa categoria varios, se tendra un impuesto del 0%", () => {
        expect(calculadora(10, 30, "UT", "Varios")).toEqual(319.95);
    });
    it("Si se ingresa categoria varios, se tendra un impuesto del 0%", () => {
        expect(calculadora(10, 30, "UT", "Varios")).toEqual(319.95);
    });
    it("Cuando el peso volumetrico este entre 0-10, se tendra un costo de envio por unidad de 0$", () => {
        expect(calculadora(10, 30, "UT", "Varios",5)).toEqual(319.95);
    });
    it("Cuando el peso volumetrico este entre 11-20 , se tendra un costo de envio por unidad de 3.5$", () => {
        expect(calculadora(10, 30, "UT", "Varios",12)).toEqual(354.95);
    });
    it("Cuando el peso volumetrico este entre 21-40 , se tendra un costo de envio por unidad de 5$", () => {
        expect(calculadora(10, 30, "UT", "Varios",35)).toEqual(369.95);
    });
    it("Cuando el peso volumetrico este entre 41-80 , se tendra un costo de envio por unidad de 6$", () => {
        expect(calculadora(10, 30, "UT", "Varios",80)).toEqual(379.95);
    });
    it("Cuando el peso volumetrico este entre 80-100 , se tendra un costo de envio por unidad de 6.5$", () => {
        expect(calculadora(10, 30, "UT", "Varios",100)).toEqual(384.95);
    });
});
import validar from "./validaciones.js";

describe("Validar los campos de numeros", () => {
    it("El sistema valida la ejecucion", () => {
        expect(validar()).toEqual(true);
    });
    it("El sistema deniega la ejecucion si la cantidad ingresada de items es igual o menor a 0", () => {
        expect(validar(-1)).toEqual(false);
    });
    it("El sistema deniega la ejecucion si el precio por item es igual o menor a 0", () => {
        expect(validar(4, -2)).toEqual(false);
    });
});
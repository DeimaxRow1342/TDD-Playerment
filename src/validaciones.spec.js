import validar from "./validaciones.js";

describe("Validar los campos de numeros", () => {
    it("El sistema valida la ejecucion", () => {
        expect(validar()).toEqual(true);
    });
});
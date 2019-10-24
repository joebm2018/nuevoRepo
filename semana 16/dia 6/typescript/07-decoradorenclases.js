var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    return function (target) {
        target.prototype.saludar = function () {
            console.log("Holi " + texto);
        };
        target.prototype.anio = new Date().getFullYear();
    };
}
// decorador siempre se pone encima de lo que esta decorando
var Promocion = /** @class */ (function () {
    function Promocion(integrantes, nombre) {
        this.intengrantes = integrantes;
        this.nombre = nombre;
    }
    Promocion.prototype.imprimirIntegrantes = function () {
        this.intengrantes.forEach(function (integrante) {
            console.log(integrante);
        });
    };
    Promocion = __decorate([
        decorador("Como Estan :D")
    ], Promocion);
    return Promocion;
}());
var codigo6 = new Promocion(["JOE", "RENZO", "RONALD"], "LOS CEVICHELAS");
codigo6.saludar();
console.log(codigo6.anio);

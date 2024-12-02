// Classe base (abstração)
class Automoveis {
    constructor(tipo, marca, modelo, preco) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco; 
    }  

    entrarELigar() {
        if (this.tipo === "Carro") {
            console.log(`Abrindo a porta do ${this.marca} ${this.modelo} e ligando o carro.`);
        } else if (this.tipo === "Motocicleta") {
            console.log(`Subindo na ${this.marca} ${this.modelo} e ligando a moto.`);
        }
    }
}


class Carro extends Automoveis {
    constructor(marca, modelo, preco) {
        super("Carro", marca, modelo, preco);
    }

}

class Motocicleta extends Automoveis {
    constructor(marca, modelo, preco) {
        super("Motocicleta", marca, modelo, preco);
    }
}

// Instâncias de objetos
const carro1 = new Carro("Sedan", "Mercedes-Benz", "AMG", 320000);
const moto1 = new Motocicleta("Ducati", "Multistrada V4 S", 100000);
const carro2 = new Carro("SUV","BMW", "X5", 250000); 

// Chamando o método entrarELigar para cada instância
carro1.entrarELigar();
moto1.entrarELigar();
carro2.entrarELigar();

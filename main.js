
const carroDoJoao = {

    modelo:'Fiesta',
    fabricante:'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,

    //Atributo que recebe function vira método.
    acelerar: function(){
        console.log("vruum");
    }

}

const carroDaMaria = {

    modelo:'Ka',
    fabricante:'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,

    //Atributo que recebe function vira método.
    acelerar: function(){
        console.log("vruum");
    }

}

// funções construtoras

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    //this faz referência ao próprio carro
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log("acelerar");
    }
}

// com o new vamos ter o retorno do objeto que foi criado
const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020,2019);
const carroDaMaria2 = new Carro("Ka", "Ford",2021,2020);

console.log(carroDaMaria2);
console.log(carroDoJoao2);

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



const nome = "Cesar"
const idade = 28
const ehMaiorDeIdade =true
const conhecimentos =["html", "css", "javascript"]



const pessoa = {
    nome: nome, 
    idade: idade, 
    ehMaiorDeIdade: ehMaiorDeIdade, 
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);

console.log(carroDaMaria2 instanceof Carro);
console.log(conhecimentos instanceof Carro) ;


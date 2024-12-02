
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




// como acessar atributos dentro de um objeto

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
    // notação //ponto
        // variavél.propriedade
console.log(pessoa.nome);

// através dos colchetes
console.log(pessoa['nome']);

        //  atributo dinâmico
    function exibeAtributo(nomeAtributo){
        console.log(pessoa[nomeAtributo])
    }

    exibeAtributo('nome')

    // alterar um atriburo
    pessoa['sobrenome'] = undefined;

    // congelar uma const
    Object.freeze(pessoa);

    pessoa.nome = 'joão';

    if(pessoa['sobrenome']){
        console.log("a pessoa tem um sobrenome")
    }
if ('sobrenome' in pessoa){
    console.log('tem sobrenome')
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

// transformar os atributos em um array com o nome dos atributos

console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));
function Pessoa(nome){
    
    //atribuir
    
    this.nome = nome;
    
    //método
    
    this.dizOi = function(){
        console.log(this.nome + " diz olá!")
        }
        this.dizCargo = function(){
            console.log(this.cargo)
            }
        this.dizSalario = function(){
            console.log(this.salario)
        }
}

function Funcionario(nome, cargo, salario){
    
    //atribuir os argumentos
    this.cargo = cargo;
    // this.salario =salario; 

    let _salario = salario;

    // getters
    this.getSalario= function(){
        return ` O salário de ${this.nome} é ${_salario}`;
    }

    // setters
    this.setSalario = function(valor){
        if (typeof valor === "number") {
            _salario = valor;
        }
        
    }

    Pessoa.call(this, nome);
}

//instâncias
const funcionario1 = new Funcionario("Maria", "Dev front-end", 5000);

funcionario1.dizOi();
funcionario1.dizCargo();

//encapsulamento

funcionario1.setSalario(7000);

console.log(funcionario1.getSalario());
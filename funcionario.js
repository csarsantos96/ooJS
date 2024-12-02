function Pessoa(nome){
    
    //atribuir
    
    this.nome = nome;
    
    //metodo
    
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
    this.salario =salario

    Pessoa.call(this, nome);
}

//instâncias
const funcionario1 = new Funcionario("Maria", "Dev front-end", 5000);

funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.dizSalario();


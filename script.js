// Crie um objeto que receba ao menos três propriedades sobre você.
let sobre = {
    nome: "Raquel",
    idade: 19,
    bebida: "chá gelado"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.comida = "Lasanha"
console.log (sobre)

// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.
delete sobre.idade
console.log(sobre)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome: "João",
        idade: 20,
        telefone: "(21)96355-2133",
        amigos: ["Lucas", "Pedro", "Luan", "Renato"]
    },
    {
        nome: "Cinthia",
        idade: 30,
        telefone: "(11)96977-9934",
        amigos: ["Ana", "Maria", "Leandro", "Nathy"]
    },    
    {
        nome: "Stefany",
        idade: 25,
        telefone: "(11)96954-9965",
        amigos: ["Julia", "Mari", "Marcus", "Elize"]
    },
    {
        nome: "Raquel",
        idade: 19,
        telefone: "(21) 97955-9685",
        amigos: ["Isabella", "Luiz", "Rafa", "Laura"]
    },
    {
        nome: "Gabriel",
        idade: 35,
        telefone: "(11)95245-8323",
        amigos: ["Julio", "Robson", "Jessica", "Amanda"]
    }
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0], cadastro[1].amigos[1], cadastro[2].amigos[2], cadastro[3].amigos[3])
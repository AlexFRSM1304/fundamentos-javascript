const nome = "Alex"
console.log("Nome: ", nome)
console.log(typeof(nome))

let idade = 25
console.log("Idade: ", idade)
console.log(typeof(idade))

var maiorDeIdade = idade >= 18
console.log("É maior de idade: ", maiorDeIdade )
console.log(typeof(maiorDeIdade))

let hardSkills = ["JavaScript", "TypeScript", "NodeJS", "ExpressJS", "NestJS", "PrismaORM", "MySQL"]
console.log("Hard Skills: ", hardSkills)
console.log(typeof(hardSkills))

const pessoa = {
	nome: nome,
	idade: idade,
	maiorDeIdade: maiorDeIdade,
	skills: hardSkills
}
console.log("Pessoa: ", pessoa)
console.log(typeof(pessoa))
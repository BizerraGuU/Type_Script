class Aula {
    aluno = null;
    linguagem = null;

    constructor(aluno: any, linguagem: any){
        this.aluno = aluno;
        this.linguagem = linguagem;
    }
}

let aula01 = new Aula("Gustavo", "TypeScript")
console.log('Aula: ', aula01)
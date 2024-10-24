class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;
        
        switch(this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
        }
        
        return `o ${this.tipo} atacou usando ${ataque}`;
    }
}

const heroi = new Heroi("Merlin", 2000, "mago");
const heroi2 = new Heroi("Ben-Hur", 40, "guerreiro");
const heroi3 = new Heroi("Bruce Lee", 40, "monge");
const heroi4 = new Heroi("Hanzo", 60, "ninja");

console.log(heroi.atacar());
console.log(heroi2.atacar());
console.log(heroi3.atacar()); 
console.log(heroi4.atacar());

class Animal{
    constructor(raca, cor, nome, patas, idade){
        this._raca = raca;
        this._cor = cor;
        this._nome = nome;
        this._patas = patas;
        this._idade = idade;
    }
    
    comer(){
        console.log(`${this._raca} ${this._nome} come o seu whiskas`)
    }
}

class Cachorro extends Animal{ 
    
        latir(){
            console.log(`${this._raca} está rital`)
        }
}

class Peixe extends Animal{
    nadar(){
        console.log(`${this._raca} nada`)
    }
}

const viraLata = new Cachorro('vira-lata', 'caramelo', 'Antônio', 4, 2)
const peixota = new Peixe('baiacu', 'amarelo', 'Flex', 0, 1)

viraLata.latir()
viraLata.comer()
peixota.comer()
peixota.nadar()
console.log(viraLata, peixota)
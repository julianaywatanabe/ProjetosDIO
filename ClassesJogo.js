class classHero{
    constructor(nameHero, ageHero, typeHero){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
    }
    attack(){
        this.attackType = ""
        if (this.typeHero === "Mage") {this.attackType = "using a magic spell"}
        else if (this.typeHero === "Warrior") {this.attackType = "using a sword"}
        else if (this.typeHero === "Monk") {this.attackType = "using martial arts"}
        else if (this.typeHero === "Ninja") {this.attackType = "using a shuriken"}
        else {attackType = "using a gun"}

        console.log(`The ${this.typeHero} named ${this.nameHero} attacked ${this.attackType}.`)
    }
}

let hero1 = new classHero("Lulu", "10", "Mage")
let hero2 = new classHero("Akali", "25", "Ninja")
let hero3 = new classHero("Master Yi", "35", "Warrior")
let hero4 = new classHero("Lee Sin", "55", "Monk")

hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()
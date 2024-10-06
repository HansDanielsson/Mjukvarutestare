class Animal {
    constructor(name, age, species) {
        this.name = name
        this.age = age
        this.species = species
    }

    aging() {
        this.age++
    }

    toString() {
        console.log(`Denna ${this.species} heter ${this.name} och är ${this.age} år gammal.`)
    }
}

// Exportera klass

module.exports = Animal
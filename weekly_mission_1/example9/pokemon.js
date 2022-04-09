// exports a class
class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello () {
        console.log(`Mi pokemon ${this.name} te saluda`)
    }

    sayMessage (message) {
        console.log(`Mi pokemon ${this.name} te dice: ${message}`)
    }
}

// Esta clase se exporta en este módulo
module.exports = Pokemon
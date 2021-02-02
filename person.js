class Person {
    constructor(name, softwareEngineer) { //keyword in javascript
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists = [];
    }
    //method:
    greet() {
        console.log('hello sei-111');
    }

    //notice no commas betweebn methods
    walk() {
        console.log('walking along the beach')
    }

    //method with a parameter
    eat(food) {
        console.log(`Today I am eating ${food}.`)
    }

    //method working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`);
        this.artists.push(artist);
    }
}

//instantiate an object (need "new" keyword):
const princeLeo = new Person('Leo', true);
//call a method
princeLeo.walk();
princeLeo.eat('dinosaur shaped chicken nuggets');
//adds a method to this instance/object, not to the class or other objects.
princeLeo.jump = function() {
    console.log('weeee!')
}
//calls that new method
princeLeo.jump();

princeLeo.addArtist('Rico Nasty');
princeLeo.addArtist('Yeye');

/////////////////

const erikG = new Person('Erik', true);
erikG.greet()
erikG.walk();
erikG.eat('ratatouille');

erikG.coffee = function() {
    console.log(`mmm.. this is good coffee.`)
}

erikG.olly = function() {
    console.log(`I still can't olly`);
}

erikG.coffee();
erikG.olly();
console.log(`${erikG.name} has ${erikG.legs} legs`);

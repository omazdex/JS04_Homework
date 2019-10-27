/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var Monkey = {
    // New monkey.
    newMonkey: function (name, species, foodsEaten) {
        this.name = name;
        this.species = species;
        this.foodsEaten = [foodsEaten];
    },

    eatSomething: function(food){
        this.foodsEaten = foodsEaten.push(food);
    },
  
    // introduce them selves
    introduce: function () {
      var introducing = `Hi my name is ${this.name} ,i am a ${this.species} and i have eaten ${this.foodsEaten}.`;
      return introducing;
    }
  };


  //===Monkey list===//
  var George = Object.create(Monkey);
  George.newMonkey("George", "Macaque", "a Banana");

  var Clyde = Object.create(Monkey);
  Clyde.newMonkey("Clyde", "Gorilla", "an Apple");

  var Albert = Object.create(Monkey);
  Albert.newMonkey("Albert", "Mandrill", "an Orange");

  //===Test===//
    console.log("================");
    console.log(George.introduce());
    console.log("---");
    console.log(Clyde.introduce());
    console.log("---");
    console.log(Albert.introduce());
    console.log("================");
  
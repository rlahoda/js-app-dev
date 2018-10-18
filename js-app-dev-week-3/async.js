const teacher = {
  name: 'Kevin',
  age: 26,
  greet: function() {
    setTimeout(function(){
      console.log('hi my name is ' + this.name);
    }, 2000).
  },
  greet2: function() {
    setTimeout(function(){
      console.log('hi my name is ' + this.name);
    }.bind(this), 2000).
  },
}
teacher.greet(); //will return 'hi my name is undefined' due to this changing context
teacher.greet2(); //will return 'hi my name is Kevin' due to this being bound at the end of the function
teacher.greet.call(teacher); //will return 'hi my name is Kevin'

const dog = {
  name: 'Rover',
  age: 7,
  sayAge: function() {
    console.log('I am ' + this.age + ' years old.');
  }
}
teacher.greet.call(dog); //will return 'hi my name is Rover' because the .call() is overriding the context it was originally done in

dog.sayAge.apply(teacher); //will return 'I am 26 years old.' because the apply() is overriding the context

const utils = {
  ageInTenYears: function() {
    console.log('I will be ' + (this.age + 10) + ' years old in ten years.');
  }
}

utils.ageInTenYears.call(teacher); // will return 'I will be 36 years old in ten years'

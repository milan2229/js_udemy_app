const obj = {
  first_name: 'Mafia',
  last_name: 'Code',
  printFullName: function() {
    console.log('hello');
  }
}

class Myobj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }

  printFullName(){
    console.log('hello');
  }
}

const obj2 = new Myobj();

obj.printFullName()
obj2.printFullName()
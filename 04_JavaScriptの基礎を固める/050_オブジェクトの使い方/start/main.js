const person = {
    name: ['Code', 'Maifa'],
    age: 32,
    gender: 'male',
    interests: {
      sports: 'soccer',
      music: 'piano'
    },
    getFullName: function(){
      console.log(this.name[0] + this.name[1])
    }
};

const agekey = 'age';
person[agekey] = 12;
console.log(person.age);
person.getFullName();

const s = 'hello world';

s.toUpperCase()
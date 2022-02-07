class Animal {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log('Name is :' + this.name);
  }
}

var a1 = new Animal('Dog');
a1.print();

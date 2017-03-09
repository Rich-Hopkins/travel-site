/**
 * Created by Rich Hopkins on 3/8/2017.
 */
var $ = require('jquery');
    //Person = require('./modules/Person');

import Person from './modules/person';

class Adult extends Person{
  payTaxes(){
    console.log(this.name + " now owes $500 in taxes.");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.payTaxes();
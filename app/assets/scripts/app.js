/**
 * Created by Rich Hopkins on 3/8/2017.
 */
var $ = require('jquery'),
    person = require('./modules/Person.js');

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
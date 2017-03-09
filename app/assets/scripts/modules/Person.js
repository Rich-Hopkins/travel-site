/**
 * Created by Rich Hopkins on 3/8/2017.
 */
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet(){
    console.log("Hey there! My name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

export default Person;
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding ==> This occurs when "this" is declared as a  top-level variable, or is it directly nesed in a function. 
    The value of "this" here is the "window" object.

* 2. Implicit Binding ==> This occurs whenever a function is called by a preceeding dot i.e the function is a property in the object.
    The value of "this" here is the object itself.

* 3. New Binding ==> This occurs when an object is created from a constructor function.
    The value of "this" here is the specific instance of the created object.

* 4. Explicit Binding ==> This occurs when .call or .apply is used.
    The value of "this" here is explicitly stated.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinder(){
    return this;
}

// Principle 2

// code example for Implicit Binding
const testThis = {
    name: 'This Tester',
    test: function() {
      console.log(`${this.name} is my name`);
      console.log(this);
    }
  };

// Principle 3

// code example for New Binding
function ThisTester(name) {
    this.name = name;
    this.test = function() {
      console.log(this.name);
      console.log(this);
    };
  }
  
  const tester = new ThisTester('Victor');

// Principle 4

// code example for Explicit Binding
tester.test.call("Called");
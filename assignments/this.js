/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding which returns the current window or console object
* 2. Implicit binding which returns the context within the object that is being called
* 3. New binding which binds to ew objects that are created
* 4. Explicit binding which explicitely binds this to a particular object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const apple = {
    "color": red,
    "isRipe": true,

    "myColor": function() {
        console.log(this.color);
    }
}

// Principle 3

// code example for New Binding

const Nike = new Sneaker();

// Principle 4

// code example for Explicit Binding

function Dog(petAttrs) {
    Pet.call(this, petAttrs);
    this.isFurry = petwAttrs.isFurry;
  }
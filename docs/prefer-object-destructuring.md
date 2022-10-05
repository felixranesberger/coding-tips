# Prefer object destructuring
Object destructuring provides direct access to the properties of an object.
But how can we use this to create cleaner code?

## Getting started

Let's assume that you have an object named apple. 
Now you want to output the properties of the apple in a console.log.

**Without object destructuring, our code might look like this:**

```js
const fruit = {
    name: 'apple',
    taste: 'sweet',
};

console.log(`The ${fruit.name} tasted ${fruit.taste}.`);

// Output: "The apple tasted sweet."
```

## Use object destructuring
With object destructuring we can now simplify this output by storing the object's properties into new variables.

```js
const fruit = {
    name: 'grapefruit',
    taste: 'sour',
};

// Destructure the object properties values and save them into new variables 
const { name, color } = fruit;

// We can now access the values directly without writing 
// fruit.* in front of them.
console.log(`The ${name} tasted ${taste}.`);

// Output: "The grapefruit tasted sour."
```

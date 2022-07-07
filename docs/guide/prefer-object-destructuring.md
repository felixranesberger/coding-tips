# Prefer object destructuring
Object destructuring provides direct access to the properties of an object.
But how can we use this to create cleaner code?

## Getting started

Let's assume that you have an object named apple. now you want to output the properties of the apple in a console.log.

**Without object destructuring, our code might look like this:**

```js
const fruit = {
    name: 'apple',
    color: 'green',
    taste: 'sour',
};

console.log(`My ${fruit.color} ${fruit.name} tasted ${fruit.taste}`);

// Output: "My green apple tasted sour"
```

## Use object destructuring
With object destructuring we can now simplify this output by storing the object's properties into new variables.

```js
// Destructure the object properties values and save them into new variables 
const { name, color, taste } = fruit;

// We can now access the values directly without writing 
// fruit.* in front of them.
console.log(`My ${color} ${fruit} tasted ${taste}`);

// Output: "My green apple tasted sour"
```

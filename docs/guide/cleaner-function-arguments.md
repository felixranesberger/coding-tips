# Cleaner function arguments
When writing functions, you often need to pass additional arguments.
This can quickly become confusing.
[Object destructuring](prefer-object-destructuring.md) can help to write clean and clear code.


## Getting started

We have a function that tells us how many fruits we currently have.

```js
const getFruitQuantity = (fruit, quantity) => {
    return 'You have ' + quantity + ' ' + fruit + '.';
}

getFruitQuantity('apples', 5);

// Output: "You have 5 apples."
```


## First improvement
We can now improve the function by specifying an indirect return using the [arrow function](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) keyword.
This way we don't have to write return anymore.
In the same step we can simplify the confusing output via plus using [string interpolation](https://dmitripavlutin.com/string-interpolation-in-javascript/).

```js
const getFruitQuantity = (fruit, quantity) => `You have ${quantity} ${fruit}.`;

getFruitQuantity('apples', 5);

// Output: "You have 5 apples."
```

## Final step

In the final step, we can apply what we learned above and use [object destructuring]() to make our function arguments clearer.

The idea is to pass an object as an argument in the function call and then break this down directly in the function.

```js
// Destructure the object properties values and save them into new variables
const getFruitQuantity = ({ fruit, quantity }) => `You have ${quantity} ${fruit}.`;

// Input object with declarative names for values
getFruitQuantity({ fruit: 'apples', quantity: 5 });

// Output: "You have 5 apples."
```

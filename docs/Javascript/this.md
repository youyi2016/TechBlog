```js
function User() {
  this.name = 'John';

  setTimeout(function greet() {
    console.log(`Hello, my name is ${this.name}`); // Hello, my name is John
    console.log(this); // User {name: "John"}
  }.bind(this)(), 1000);
}

const user = new User();
```
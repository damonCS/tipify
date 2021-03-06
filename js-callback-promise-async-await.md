### JavaScript Callback, Promise & Async Await

Before figure out callback, we need to understand we can pass function like a variable in JavaScript,

Example:

``` js
function PassingAsAVariable() {
  console.log('We can pass a function like a variable into another function and then get called');
}

function Caller(variableFunction){
  PassingAsAVariable();
}

Caller(PassingAsAVariable);
```

This is due to the fact that JavaScript functions are `first-class objects` which can be passed as variable format.


#### Important tips for Callback:

1. A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into

2. JavaScript Callback Functions can be used synchronously or asynchronously

Basic Example:

``` js
function Main(message, callback){
  callback(message);
};

Main('Hi there ..', function(message) {console.log(message)});
```

Classic Example:

``` js
const getCalled = () => console.log('get called by caller as callback function');
const middler = cb => cb();
const caller = () => setTimeout(_ => middler(getCalled), 1000);
caller();

// Or
const url = 'http://test.com/test.jpg';
function download(url, callback){
  console.log(`Downloading ${url} ...`);

  setTimeout(() => {
    callback(url);
  }, 2000);
};

function process(url) {
  console.log(`Downloaded ${url} ...`);
  console.log('All done !!');
};

download(url, process);
```


#### Important Tips for Promise:

Technically, the reason why we need Promise is we need to make things happen `asynchronously` without `waiting`, better performance and got error handlings as well.

Imagine when you call server to get data, you don't know server is down or gives back with a slower response. In this case, you don't want to make the entire process blocked, so you choose `asynchronous` way to deal with this situation, making sure nothing is blocked !

Another reason for using Promnise is to avoid callback hell.

Prommise has 3 states:

1. Pending: waiting for response
2. Fulfilled: happy ending with response
3. Rejected: unhappy ending with errors

Basic Syntax:

``` js
new Promise(function(resolve, reject){ ... });
```

Classic Example:

``` js
var buyEllaGift = true;
var willBuyEllaGiftPromise = new Promise((resolve, reject) => {
  if(buyEllaGift) {
    var gift = {
      name: 'wawa'
    };
    resolve(gift);
  } else {
    var error = new Error("Sorry, didn't make it");
    reject(error);
  }
});

var receiveGiftPromise = gift => {
  const message = `Ella received the gift: ${gift.name}`;
  return Promise.resolve(message);
};

var buyingAndReciving = () => {
  console.log("Before buying gift for Ella .."); // run order: 1
  willBuyEllaGiftPromise
    .then(receiveGiftPromise)
    .then(response => {
      console.log(response); // run order: 3
    })
    .catch(error => {
      console.log(error.message); // run order: 3
      // error.message can read the error details !!
    });
  console.log("After buying check whether Ella received gift or not .."); // run order: 2
};

buyingAndReciving();
```


#### Important tips for Async Await

Basic Concept: also a way to handle things `asynchronously`. Better version of Promise.

Example compared with Promise:

``` js
// Using Async await way to write buyingAndReciving() function:
var buyingAndReciving = async () => {
  console.log("Before buying gift for Ella .."); // run order: 1
  try {
    const gift = await callWillBuyEllaGiftPromise;
    const response = await receiveGiftPromise(gift);
    console.log(response);
  } catch(error) {
    console.log(error.message);
  }
  console.log("After buying check whether Ella received gift or not .."); // run order: 2
};
```

Classic Example:

``` js
const rollerPromise = () => {
  return new Promise((resolve, reject) => {
    const roller = Math.round(Math.random() * 1); // return 0 or 1
    return roller ? resolve("Yeah, we made it !!") : reject("See you next year ..");
  });
};

const rollerCaller = async () => {
  try { // try catch is very important for async await structure, good practice
    const caller = await rollerPromise();
    console.log(caller);
  } catch(error) {
    console.log(error);
  }
};

rollerCaller();
```
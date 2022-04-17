# Testing

**Importance of testing:** 
Writing tests take extra effort, and at the time it feels like you can test the functionality by manually.

Here are some reasons why you start writing your own test

**Debugging:** 
 - Decrease time to debug
 - Unit tests narrow down bugs
 - Improve quality of code

**Collaboration:** 
 - When you collaborating with other members, during refactoring of code and there could be a chance that some code breaking.
 - Unit tests allow you to detect any breakage during this process
 - Unit tests also provides description to what your functions/UI elements/code does.

**Guidelines:** 
 - Understanding the type of unit tests, as its important to understand what you are going to test
  - Presentational
  - Logic
  - Services
 - Breaking down your functions into smaller components/functions will help you write better tests
 - It is also important to write functional programming or follow Unix philosophy. Always try to write functions in a way you are able to test it
 - Write tests in parallel with the code
  - Its harder to go through old code and write unit tests for those components
  - Time and effort are wasted
 - Write code to that is meant to pass the test cases, rather than write test cases which will pass for the code/component/function
 - Start practising test cases early so that while you are working on a real app, you would be able to understand better.
 - Here are some examples of test:

   - testing api/network calls
   - testing UI of a component when user interacts with it
   - testing output of pure functions like redux

# Jest:  <a href="https://jestjs.io/docs/getting-started">Click Here for Documentation<a>
Jest is a non browser based unit testing which can be used across different frameworks.

ensure you have a npm initialised in your folder:
```js
npm init
// You will be asked a lot of questions. You can give default values
// End of it you will notice a package.json file
// This will contain information of all the 
```
Install Jest:
```js
npm install --save-dev jest
```
What does --save-dev do?

--save-dev is used to save the package for development purpose.

This is different than --save

--save is used to save the package required for the application to run.

Lets write our first test:

sum.js
```js
function sum(a,b){
    return a+b
}

module.exports = sum
```
node environment doesnt support import and export so you have use module.exports

lets make a test file.

sum.test.js
```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
});
```
Add the following to your package.json
```js
{
  "scripts": {
    "test": "jest"
  }
}
```
The following command will run the test
```js
npm test
```
To watch your files
```js
# Run your tests
npm test -- --watch
```
to write a test case for a file

one way is to create a file in this format:
```js
<file_name>.js #file you are testing for

<file_name>.spec.js
or
<file_name>.test.js
```
or you can create a __tests__ folder in the same folder that your files are located

make sure that the file name is the same was the file you are testing for.
```js
firstFile.js
__tests__ # test folder
    firstFile.test.js
```
**Writing tests:** 
```js
describe('my first test', () => {
  test('is 2 equal to 2', () => {
    expect(2).toEqual(2)
  })
})
```
**describe(name, fn):** 
describe(name, fn) creates a block that groups together several related tests.

This isn't required - you can write the test blocks directly at the top level. But this can be handy if you prefer your tests to be organized into groups.

```js
const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

// it is an alternative for test
describe('My work', () => {
  it('works', () => {
    ···
  })
})
```
**test(name, fn, timeout):** 
Also under the alias or same as: it(name, fn, timeout)

All you need in a test file is the test method which runs a test.

test('did not rain', () => { expect(inchesOfRain()).toBe(0); });

The first argument is the test name;

the second argument is a function that contains the expectations to test.

The third argument (optional) is timeout (in milliseconds) for specifying how long to wait before aborting.

Note: The default timeout is 5 seconds.

**Expect:** 
When you're writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of "matchers" that let you validate different things.

**expect(value):**
The expect function is used every time you want to test a value. You will rarely call expect by itself. Instead, you will use expect along with a "matcher" function to assert something about a value.
```js
test('the best flavor is grapefruit', () => {
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});
```
In this case, toBe is the matcher function. There are a lot of different matcher functions, documented below, to help you test different things.

**Methods:** 
some of the methods available

**.toBe(value):** 
Use .toBe to compare primitive values or to check referential identity of object instances. It calls Object.is to compare values, which is even better for testing than === strict equality operator.

Basic expectations:
 - expect(value)
 - .toBe(value)
 - .toEqual(value)

Boolean expectations:
 - .toBeFalsy()
 - .toBeNull()
 - .toBeTruthy()
 - .toBeUndefined()
 - .toBeDefined()
 - .toBeNaN()

Numbers:
 - .toBeGreaterThan(number | bigint)
 - .toBeGreaterThanOrEqual(number | bigint)
 - .toBeLessThan(number | bigint)
 - .toBeLessThanOrEqual(number | bigint)

Objects:
 - .toBeInstanceOf(Class)
 - .toMatchObject(object)
 - .toHaveProperty(keyPath, value?)
 - .toContain(item)
 - .toContainEqual(item)
 - .toHaveLength(number)
 - .arrayContaining(array)
 - .toStrictEqual(value)
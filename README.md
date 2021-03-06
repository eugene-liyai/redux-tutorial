# redux-tutorial
Up and running with React-Redux

### Pure and Impure functions

Start by understanding the difference between pure and impure functions. Pure functions are the back bone of react and redux development design. This is what guides functional programming.

### React Intro
#### ES6 Class implementation
Just a quick review of how classes are implemented using ES6. However, it is importatnt to note that ES6 Class implementation does not provide the classic [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)), this is simply a slightly modified prototype inheritance. None the less it makes inheritance much easier to handle.  

#### Run Hallo World Example
- Clone repo
##### To run single script
- execute `npm intall --save-dev babel-cli` on terminal
- output executable js `node_modules/.bin/babel --plugins transform-react-jsx -o js/example1.min.js js/example1.js`
- open `index.html` on desired browser

##### To run entire app
- run `npm intall --save-dev` on your command line
- execute `npm start` to run app
- check port the application in running on

### Redux
A good question to ask is if redux solves your current problem.
#### Without Redux
- lots of state communication
- complex error states and scenarios
- lots of api(ajax) calls
- confusing code, data flow doesn't scale well

#### With Redux
- clarifies data flow
- state is predictable
- understandable flow of the code

### MIT License

Copyright (c) 2018 eugene-liyai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

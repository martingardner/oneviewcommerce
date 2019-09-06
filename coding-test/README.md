# To Install

- git clone https://github.com/martingardner/oneviewcommerce/tree/master/coding-test.git
- cd coding-test
- npm install

# To Run

- cd coding-test
- npm start (should open up localhost:3000);

# To Test

- cd coding-test
- npm test (Jest + React-testing-library);

# To Do

- get the jest mocks of the axios to work correctly (currently making live calls)
- with the above, get the set timeout out of there
- edge case where once in a while npm test will find a memory leak in tablerow.js. This doesn't occur in running code only sometimes during testing. Need to investigate
  what needs to be fixed as it's not consistent. Theory to test is whether it has to do with the setTimeout there, which may be fixed with the above steps.

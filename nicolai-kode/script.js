import { User } from './user.js';  // Import User class if it's in another file



function testFunction() {
    const user = new User("NOOOOAHHHHHH", "Password");
    console.log(user.getName());
}


window.testFunction = testFunction;

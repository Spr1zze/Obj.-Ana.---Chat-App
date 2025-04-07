import { User } from './user.js';  // Import User class if it's in another file


function login() {
    const user = new User("NameAHHHH", "Password");

    console.log(user.getName());
}

function changeUsername(nName) {
    const user = new User("NameAHHHH", "Password");

    user.setName(nName)
    console.log(user.getName());
}


window.changeUsername = changeUsername;
window.login = login;

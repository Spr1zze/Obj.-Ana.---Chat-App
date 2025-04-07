// Define and export User class
export class User {
    constructor(user_name, user_password) {
        if (User.instance) {
            return User.instance;
        }
        
        this.user_name = user_name;
        this.user_password = user_password;

        User.instance = this; // Ensure singleton pattern
    }

    getName() {
        return this.user_name;
    }

    getPassword() {
        return this.user_password;
    }
}

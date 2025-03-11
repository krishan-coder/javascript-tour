class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, pass){
        super(username);    // automatically pass "this"  with the func
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const ramu = new Teacher("ramu","ramu@gmail.com", "777");
ramu.addCourse();

const john = new User("John");
john.logMe();
ramu.logMe();

console.log(john.logMe() === ramu.logMe());  // true


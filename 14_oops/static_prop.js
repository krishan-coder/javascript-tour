class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName: ${this.username}`);
    }

    // static function cannot be accessed by instance or the child of the class
     static createId(){
        return `123`;
    }
}

const krish = new User("Krishna");
console.log(krish.createId());   // 123
console.log(krish.createId());   // krish.createId is not a function(after making it static)
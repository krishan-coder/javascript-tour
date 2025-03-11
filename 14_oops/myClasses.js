// ES6 (EcmaScript 6)

class User{
    constructor(username, email, pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptPass(){
        return `${this.pass}abc`;
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const krish = new User("krish","krish@g.com","234");
console.log(krish.encryptPass());    /// 234abc
console.log(krish.changeUserName());   // KRISH



///  behind the scene ###################################


function user (username, email, pass){
    this.username = username;
    this.email = email;
    this.pass = pass;
}
user.prototype.encryPass = function(){
    return `${this.pass}xyz`;
}
user.prototype.changName = function(){
    return `${this.username.toUpperCase()}`;
}

const ram = new user("ram","ram@gmai.com","444")
console.log(ram.encryPass());   ///444xyz
console.log(ram.changName());  // RAM

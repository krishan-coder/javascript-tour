function SetUserName(username){
    // complex calc
    this.username = username;
}
function createUser(username,email,password){
    // SetUserName(username)  // this way will not call the function
    // createUser { email: 'krish@.com', password: '123' }

    // SetUserName.call(username)  // this will call (but no change due to removal of the current execution context)
    
    SetUserName.call(this,username)  // this will reflect the changes (due to passing of the current execution context)
    // createUser {
    //     username: 'krishan',
    //     email: 'krish@.com',
    //     password: '123'
    //   }

    this.email = email;
    this.password = password

}

const user = new createUser("krishan","krish@.com", "123")
console.log(user);
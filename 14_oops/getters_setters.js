class user{
    constructor(email, pass){
        this.email = email;
        this.pass = pass;
    }
   
    // use constructor or (get & set) at a time , if we use both then it will 
    //                                         give error "Maximum call stack size exceed"

    // or you can add _ to the variable(and use both constructor & (get&set))
    get pass(){
        return `${this._pass.toUpperCase()}krishan`;
    }
    set pass(value){
        this._pass = value.toUpperCase();
    }
}

const krishan = new user("krish@n.in", "123");
console.log(krishan.pass)      // 123krishan




/// Without using class $$$$$$$$$$$$$$$$$$$$44
// properties_set_get

function Users(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this.email = value;
        }
    })
}
const ram = new Users("ram@.in", "444");
console.log(ram.email);   // RAM@.IN



/// object_get_set %%%%%%%%%%%%%%%%%%5

const User3 = {
    _email : "hello@.com",
    _key : "abc",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User3);
console.log(tea.email);    /// HELLO@.COM


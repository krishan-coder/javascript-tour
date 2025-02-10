// value cannot be changed
const accountId = 12234
// local scope 
let accountEmail = "abc@gmail.com"
var accountPassword = "434343"

// possible but not good
accountCity = "Jaipur"
// accountId = 5
console.log(accountId);

accountEmail = "xyz@gmail.com"
accountPassword = "787878"
accountCity = "Delhi"
// this is in undefined state
let accountState

console.log([accountEmail,accountId,accountPassword,accountCity])
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

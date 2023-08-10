//Default before update Ecma
function newUser(name,age,country){
   var name = name || "David"
   var age = age || 26
   var country = country || "colombia"
   console.log(name,age,country);
}
newUser("oscar", 44,"Mexico")
function newAdmin (name = "David",age=24,country="CO"){
  console.log(name,age,country);
}
newAdmin()
newAdmin("oscar", 44,"Mexico")
 for(i=0; i<4; i++){
for(j=0; j<5; j++){
console.log(i , j);
}
 }

 var userInp= prompt("Enter the hobby and check the student name");
 var arr =[{ stdName: "basit",  hobbies: ["Cricket", "gaming" , "coding"]} ,{ stdName : "yasir" , hobbies:["playing", "hockey" , "writing"]},{  stdName:"wassam",hobbies:["reading", "programming" , "cycling"]}];
 var flag=false;
 for(i=0; i<arr.length; i++){
   for(j=0; j< arr[i].hobbies.length; j++){
if(userInp === arr[i].hobbies[j] ){
       flag=true;
       alert( arr[i].stdName);
       break;
}
}
}
if(!flag){
 alert("Name not found");
}



var inp = prompt("find user name by hobby");
var users = [
  { name: "ali", hobbies: ["cricket", "painting", "gaming"] },
  {
    name: "ahmed",
    hobbies: ["football", "bedminton", "ludo", "hockey", "travelling"],
  },
  { name: "sahir", hobbies: ["cycling", "swimming", "foos ball"] },
];
var flag = false;
for (var i = 0; i < users.length; i++) {
  for (j = 0; j < users[i].hobbies.length; j++) {
    if (inp === users[i].hobbies[j]) {
      flag=true;
      alert( users[i].name); 
  }
}}
if (!flag) {
  alert("Name not found");
}

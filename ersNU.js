//User Import from local storage
var importedUser = localStorage.getItem('userName');
var importedUsers = localStorage.getItem('users')
var importedPasswords = localStorage.getItem('passwords')
var importedPerms = localStorage.getItem('perms')
var importedFN = localStorage.getItem('firstNames')
var importedLN = localStorage.getItem('lastNames')
var importedEm = localStorage.getItem('userEmails')
var importedUserId = localStorage.getItem('userIds')
var username = JSON.parse(importedUser);
console.log(username);


let myButton = document.getElementById("b1");
let userArray = JSON.parse(importedUsers);
let passwordArray = JSON.parse(importedPasswords);
let additionalPermsStatus = JSON.parse(importedPerms);
let firstName = JSON.parse(importedFN);
let lastName = JSON.parse(importedLN);
let userEmail = JSON.parse(importedEm);
let userIds = JSON.parse(importedUserId);



function createNewUser(){
    let usern = document.getElementById("UserN").value;
    let userp = document.getElementById("UserP").value;
    let userPm = document.getElementById("PermsStatus").value;
    console.log(userPm)
    let userFN = document.getElementById("firstName").value;
    let userLN = document.getElementById("lastName").value;
    let userEm = document.getElementById("email").value;
    if (userEm.indexOf("com") ==-1){
        alert("Non webaddress in the Email Form")
        return
    }
    if ( usern.length == 0 || userp.length == 0 || userFN.length == 0 ||userLN.length == 0|| userEm.length == 0 ){
        console.log("Form Unfilled")
        alert("Form unfilled")
        return
    }else{ for (let x = 0; x < userArray.length; x++)
        if(usern == userArray[x]){
            console.log("Username Taken")
            alert("Username in Use.")
            return
        }else{
            console.log("clearpass");
        }

    }console.log("Success");
    userIds.push(userIds.length)
    console.log(userIds)
    let exportIds = JSON.stringify(userIds)
    localStorage.setItem('userIds',exportIds) 
    userArray.push(usern);
    let exportUsers = JSON.stringify(userArray);
    localStorage.setItem('users',exportUsers);
    passwordArray.push(userp);
    let exportPasswords = JSON.stringify(passwordArray);
    localStorage.setItem('passwords',exportPasswords);
    additionalPermsStatus.push(userPm);
    let exportPerms = JSON.stringify(additionalPermsStatus);
    localStorage.setItem('perms',exportPerms);
    firstName.push(userFN);
    let exportFNs = JSON.stringify(firstName)
    localStorage.setItem('firstNames',exportFNs)
    lastName.push(userLN);
    let exportLNs = JSON.stringify(lastName)
    localStorage.setItem('lastNames',exportLNs)
    userEmail.push(userEm);
    let exportEMs = JSON.stringify(userEmail)
    localStorage.setItem('userEmails',exportEMs)
    alert("New User Created!")
}

myButton.onclick = createNewUser





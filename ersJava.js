
var importedFN = localStorage.getItem('firstNames')
let firstName = JSON.parse(importedFN);
var ImportedUserIds = localStorage.getItem('userIds')
let UserIds = JSON.parse(ImportedUserIds)
//Variable Pool
let myButton = document.getElementById("b1");
//Send these to java when you can. Most likely shouldn't have this visible if you can help it.
let userimport = localStorage.getItem('users')
let userArray = JSON.parse(userimport)
console.log(userArray)
let passwordimport= localStorage.getItem('passwords')
console.log(passwordimport)
let passwordArray = JSON.parse(passwordimport)
let permsImport= localStorage.getItem('perms')
let additionalPermsStatus = JSON.parse(permsImport)
console.log(additionalPermsStatus)
//Variable pool end

//Login for the mainpage
function loginfunction(){
    let usern = document.getElementById("UserN").value
    let userp = document.getElementById("UserP").value
    console.log("Button Click Detected" + usern, userp)
    for (let x = 0; x < userArray.length; x++)
        if(usern == userArray[x] && userp == passwordArray[x]){
            console.log("Test Successful");
            let activeUser = firstName[x];
            let activeId = UserIds[x];
            let transmittedUserID = JSON.stringify(activeUser);
            localStorage.setItem('userName',transmittedUserID);
            //let transmittedUser = JSON.stringify(activeUser);
            //localStorage.setItem('userName', transmittedUser);
            console.log(activeUser);
            if(additionalPermsStatus[x] == "0"){
                window.location.href = "ersEmployee.html"
            }else if(additionalPermsStatus[x] == "1"){
             window.location.href = "ersFM.html"
            }
    }
}
myButton.onclick = loginfunction;

//let user = {
    //username:usern,
    //password:userp
//}
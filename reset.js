let userArray = ["Keith","Harold","Betsy","Frank"];
let passwordArray = ["1234","4321","4444","1111"];
let additionalPermsStatus = ["0","0","1","1"];
let firstName = ["Keith","Harold","Betsy","Frank"];
let lastName = ["Smith","Rush","Munoz","Clay"];
let userEmail = ["Ksmith13@gmail.com","Hrush1996@gmail.com","MunozB63@gmail.com","FClay1543@gmail.com"];
let userIds = [0,1,2,3]
let myButton = document.getElementById("reset");


//RForm

let rFormUserIds = [];
let rFormRIds = [];
let rFormFNs = [];
let rFormLNs = [];
let rFormDate = [];
let rFormAmts = [];
let rFormType = [];
let rFormInfos = [];
let approval = [];
let disapproval = []

myButton.onclick = reset;

function reset(){
    console.log("Reset initiated")
    let userArrayT = JSON.stringify(userArray)
    let passwordArrayT = JSON.stringify(passwordArray)
    let additionalPermsStatusT = JSON.stringify(additionalPermsStatus)
    let firstNameT = JSON.stringify(firstName)
    let lastNameT = JSON.stringify(lastName)
    let userEmailT = JSON.stringify(userEmail)
    let userIdT = JSON.stringify(userIds)
    localStorage.setItem('users',userArrayT)
    localStorage.setItem('passwords',passwordArrayT)
    localStorage.setItem('perms',additionalPermsStatusT)
    localStorage.setItem('firstNames',firstNameT)
    localStorage.setItem('lastNames',lastNameT)
    localStorage.setItem('userEmails',userEmailT)
    localStorage.setItem('userIds',userIdT)
    console.log("Reset Complete")

    //Rform

    console.log(rFormUserIds)
    let rFormUserIdsT = JSON.stringify(rFormUserIds)
    let rFormIDsT = JSON.stringify(rFormUserIds)
    let rFormFNsT = JSON.stringify(rFormFNs)
    let rFormLNsT = JSON.stringify(rFormLNs)
    let rFormDateT = JSON.stringify(rFormDate)
    let rFormAmtsT = JSON.stringify(rFormAmts)
    let rFormTypeT = JSON.stringify(rFormType)
    let rFormInfosT = JSON.stringify(rFormInfos)
    let approvalT = JSON.stringify(approval)
    let disapprovalT = JSON.stringify(disapproval)
    localStorage.setItem('rFormUserIds',rFormUserIdsT)
    localStorage.setItem('rFormIDs',rFormIDsT)
    localStorage.setItem('rFormFNs',rFormFNsT)
    localStorage.setItem('rFormLNs',rFormLNsT)
    localStorage.setItem('rFormDate',rFormDateT)
    localStorage.setItem('rFormAmts',rFormAmtsT)
    localStorage.setItem('rFormType',rFormTypeT)
    localStorage.setItem('rFormInfos',rFormInfosT)
    localStorage.setItem('approval',approvalT)
    localStorage.setItem('disapproval',disapprovalT)
}
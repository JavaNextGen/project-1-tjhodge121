var importedUser = localStorage.getItem('userName')
var username = JSON.parse(importedUser)
console.log(username)

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
var ImportedSuccess = localStorage.getItem('approval')

let userArray = JSON.parse(importedUsers);
let passwordArray = JSON.parse(importedPasswords);
let additionalPermsStatus = JSON.parse(importedPerms);
let firstNames = JSON.parse(importedFN);
console.log("All First Names:" + firstNames)
let lastNames = JSON.parse(importedLN);
let userEmail = JSON.parse(importedEm);
let userIds = JSON.parse(importedUserId);

var importedRFUIDs = localStorage.getItem('rFormUserIds')
var importedRFID = localStorage.getItem('rFormIDs')
var importedRFFN = localStorage.getItem('rFormFNs')
var importedRFLN = localStorage.getItem('rFormLNs')
var importedRFD = localStorage.getItem('rFormDate')
var importedRFAmt = localStorage.getItem('rFormAmts')
var importedRFT = localStorage.getItem('rFormType')
var importedRFI = localStorage.getItem('rFormInfos')
let rFormUserIds = JSON.parse(importedRFUIDs);
let rFormRIds = JSON.parse(importedRFID);
let rFormFNs = JSON.parse(importedRFFN);
let rFormLNs = JSON.parse(importedRFLN);
let rFormDate = JSON.parse(importedRFD);
let rFormAmts = JSON.parse(importedRFAmt);
let rFormType = JSON.parse(importedRFT);
let rFormInfos = JSON.parse(importedRFI);
let rFormSuccess= JSON.parse(ImportedSuccess)
myButton.onclick = createNewRForm

function createNewRForm(){
    arrayIndex = firstNames.indexOf(username)
    console.log("Array Index" +arrayIndex)
    let firstName = firstNames[arrayIndex]
    console.log("Users First Name:" +firstName)
    let lastName = lastNames[arrayIndex]
    console.log("Users Last Name:" + lastName)
    let userId = userIds[arrayIndex]
    console.log(userId)
    let date = new Date
    let reqType = document.getElementById("remType").value
    let reqAmt = document.getElementById("expAmt").value
    let reqInfo = document.getElementById("remInfo").value
    //Still need to find a way to take in the img file for the reciept.
    if (reqAmt.length == 0 || reqInfo == 0){
        console.log("Form Unfilled")
        alert("Form unfilled")
        return}
    else{
        rFormUserIds.push(userId)
        rFormRIds.push(rFormRIds.length) 
        rFormFNs.push(firstName)
        rFormLNs.push(lastName)
        rFormDate.push(date)
        rFormAmts.push(reqAmt)
        rFormType.push(reqType) 
        rFormInfos.push(reqInfo)
        console.log("FN Test"+rFormFNs)
        rFormUserIdsT = JSON.stringify(rFormUserIds)
        rFormRIdsT= JSON.stringify(rFormRIds)
        rFormFNsT= JSON.stringify(rFormFNs)
        rFormLNsT= JSON.stringify(rFormLNs)
        rFormDateT = JSON.stringify(rFormDate)
        rFormAmtsT = JSON.stringify(rFormAmts)
        rFormTypeT = JSON.stringify(rFormType)
        rFormInfosT = JSON.stringify(rFormInfos)

        localStorage.setItem('rFormUserIds', rFormUserIdsT)
        localStorage.setItem('rFormIDs',rFormRIdsT)
        localStorage.setItem('rFormFNs', rFormFNsT)
        localStorage.setItem('rFormLNs',rFormLNsT)
        localStorage.setItem('rFormDate', rFormDateT)
        localStorage.setItem('rFormAmts', rFormAmtsT)
        localStorage.setItem('rFormType', rFormTypeT)
        localStorage.setItem('rFormInfos', rFormInfosT)

        alert("Reimbursement Form Submitted")

    }
    console.log(date)

}

var importedUser = localStorage.getItem('userName')
var username = JSON.parse(importedUser)
console.log(username)
let nametag = document.getElementById('nametag')
nametag.innerHTML = "Hello, " + username;
var importedId = localStorage.getItem('UserID')
var userId = JSON.parse(importedId)
var importedRFUIDs = localStorage.getItem('rFormUserIds')
var importedRFID = localStorage.getItem('rFormIDs')
var importedRFFN = localStorage.getItem('rFormFNs')
var importedRFLN = localStorage.getItem('rFormLNs')
var importedRFD = localStorage.getItem('rFormDate')
var importedRFAmt = localStorage.getItem('rFormAmts')
var importedRFT = localStorage.getItem('rFormType')
var importedRFI = localStorage.getItem('rFormInfos')
var ImportedSuccess = localStorage.getItem('approval')
var Importedfailure = localStorage.getItem('disapproval')
let approval = JSON.parse(ImportedSuccess)
let disapproval = JSON.parse(Importedfailure)
let rFormUserIds = JSON.parse(importedRFUIDs);
let rFormRIds = JSON.parse(importedRFID);
let rFormFNs = JSON.parse(importedRFFN);
console.log("RForm test:"+rFormFNs)
console.log(username)
let rFormLNs = JSON.parse(importedRFLN);
let rFormDate = JSON.parse(importedRFD);
let rFormAmts = JSON.parse(importedRFAmt);
let rFormType = JSON.parse(importedRFT);
let rFormInfos = JSON.parse(importedRFI);
let EntryPoint = document.getElementById("ReiBody")
let rowbumper = 0
let AsNeededButton = document.getElementById("rChanges");
function ScanRei(){
    for (let x = 0; x < rFormFNs.length; x++){
        if(rFormFNs[x] == username){
            let row = EntryPoint.insertRow(rowbumper)
            rowbumper++
            let EmpId = row.insertCell(0)
            let EmpName = row.insertCell(1)
            let ReqDate = row.insertCell(2)
            let ReqId = row.insertCell(3)
            let Reqtype = row.insertCell(4)
            let ReqAmt = row.insertCell(5)
            let Reciept = row.insertCell(6)
            let addInfo = row.insertCell(7)
            let status = row.insertCell(8)
        
        EmpId.innerHTML = rFormUserIds[x]
        EmpName.innerHTML = rFormFNs[x] + " " + rFormLNs [x]
        ReqDate.innerHTML = rFormDate[x].substring(0,10)
        ReqId.innerHTML = rFormRIds[x]
        Reqtype.innerHTML = rFormType[x]
        ReqAmt.innerHTML = rFormAmts[x]
        Reciept.innerHTML = "pending"
        addInfo.innerHTML = rFormInfos[x]
        if (approval.indexOf(rFormRIds[x]) == -1 && disapproval.indexOf(rFormRIds[x]) == -1 ){
            status.innerHTML = "Pending" 
        }if (approval.indexOf(rFormRIds[x]) != -1 && disapproval.indexOf(rFormRIds[x]) == -1 ){
            status.innerHTML = "Approved" 
        }if (approval.indexOf(rFormRIds[x]) == -1 && disapproval.indexOf(rFormRIds[x]) != -1 )
            status.innerHTML = "Denied" 
    }
}}
ScanRei()


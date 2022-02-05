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
let rowbumperbumper = 0
let AsNeededButton = document.getElementById("rChanges");
let skipper = []
let final = 0
function ScanRei(){
    for (let x = 0; x < rFormFNs.length; x++){
        console.log("Approval length"+ approval)
        console.log("Disapproval Length" + disapproval)
        console.log("What is this?:"+approval.indexOf(rFormRIds[x]))
        if(approval.indexOf(rFormRIds[x]) != -1 || disapproval.indexOf(rFormRIds[x]) != -1 ){
            rowbumperbumper++
            continue;
            
        }
        if(rFormFNs[x] != username){
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
            let Approve = row.insertCell(8)
            let Deny = row.insertCell(9)
            skipper.push(rFormRIds[x])
            final = x
        EmpId.innerHTML = rFormUserIds[x]
        EmpName.innerHTML = rFormFNs[x] + " " + rFormLNs [x]
        ReqDate.innerHTML = rFormDate[x].substring(0,10)
        ReqId.innerHTML = rFormRIds[x]
        console.log("Skipper Check" +skipper)
        Reqtype.innerHTML = rFormType[x]
        ReqAmt.innerHTML = rFormAmts[x]
        Reciept.innerHTML = "pending"
        addInfo.innerHTML = rFormInfos[x]
        Approve.innerHTML= '<input type="checkbox" id="Yes'+rFormRIds[x]+'" value="1">'
        Deny.innerHTML = '<input type="checkbox" id="No'+rFormRIds[x]+'" value="1"">'
        }else{rowbumperbumper++}
}}
ScanRei()
rowbumper= rowbumper + rowbumperbumper
console.log(rowbumper)
let skipperlen = skipper.length
function CheckBoxSweep(){
    for (let x = 0; x < skipperlen; x++){
            let checksearcher = document.getElementById("Yes"+skipper[x]).checked
            let NoSearcher = document.getElementById("No"+skipper[x]).checked
            console.log("On pass " +x +":" + checksearcher)
            console.log("On pass " +x +":" + NoSearcher)
                if(checksearcher == true && NoSearcher == true){
                alert("You cannot Approve and Disapprove a request at the same time, Try Again.")
                return
        }if(checksearcher == true && NoSearcher == false){
            let y =skipper[x];
            console.log("Detected Success:" + y)
            approval.push(y)
            approvalT = JSON.stringify(approval)
            localStorage.setItem('approval',approvalT)
            EntryPoint.deleteRow(x)
            skipperlen--
            window.location.href = "ersFM.html"
        }if(checksearcher == false && NoSearcher == true){
            let y =skipper[x];
            console.log("Detected Rejection:" + y)
            disapproval.push(y)
            disapprovalT = JSON.stringify(disapproval)
            localStorage.setItem('disapproval',disapprovalT)
            EntryPoint.deleteRow(x)
            rowbumperlen--
            window.location.href = "ersFM.html"
        }}}
AsNeededButton.onclick = CheckBoxSweep
var student1 = {
    RollNo: "1",
    Name: "Ali",
    FatherName: "Ahmed",
    Contact: "03",
    Result: "Pass",
};
var student2 = {
    RollNo: "2",
    Name: "Anees",
    FatherName: "Riaz",
    Contact: "03",
    Result: "Pass",
};
var student3 = {
    RollNo: "3",
    Name: "Sajjad",
    FatherName: "Izhar",
    Contact: "03",
    Result: "Pass",
};
var student4 = {
    RollNo: "4",
    Name: "Owais",
    FatherName: "Khan",
    Contact: "03",
    Result: "Pass",
};
var student5 = {
    RollNo: "5",
    Name: "Shiraz",
    FatherName: "Ahmed",
    Contact: "03",
    Result: "Pass",
};

var tableBody = document.getElementById("tableBody")

var studentsList = [student1, student2, student3, student4, student5]

for (var i = 0; i < studentsList.length; i++) {
    var obj = studentsList[i]

    tableBody.innerHTML += "<tr><td>" + obj.RollNo + "</td><td>" + obj.Name + "</td><td>" + obj.FatherName + "</td><td>" + obj.Contact + "</td><td>" + obj.Result + "</td></tr>"

}

function ShowSearchResult() {

    var InpVal = document.getElementById("InpVal")

    var RollNum = document.getElementById("RollNum")
    var NAme = document.getElementById("NAme")
    var FName = document.getElementById("FName")
    var Cntct = document.getElementById("Cntct")
    var Rslt = document.getElementById("Rslt")


    for (var i = 0; i < studentsList.length; i++) {
        var stdnts = studentsList[i];
        if (InpVal.value == stdnts.RollNo) {
            RollNum.innerHTML = stdnts.RollNo
            NAme.innerHTML = stdnts.Name
            FName.innerHTML = stdnts.FatherName
            Cntct.innerHTML = stdnts.Contact
            Rslt.innerHTML = stdnts.Result





        }

    }



}
var code = document.getElementById("code");

function clearField() {
    code.value = "";
}

function remove() {
    var txt = code.value;
    var strTxt = txt.toString();
    if (strTxt === "") {
        code.value = alert("Enter Something, field is empty");
    }
    for (var i = 0; i < strTxt.length; i++) {
        var newCode = strTxt.replace("\n", "");
        newCode = newCode.replace("  ", "");
    }
    code.value = newCode;
    remove();

}
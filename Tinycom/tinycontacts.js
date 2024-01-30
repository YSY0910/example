function displayElementValue(id, text){
    var element = document.getElementById(id);
    element.value = text;
}

function getElementValue(id){
    var element = document.getElementById(id);
    return element.value;
}

function displayContactNotFound()
{
    alert("Not found");
}

function doSave() {
    var name= [];
    var address= [];
    var phone= [];

    alert("저장 완료 : " + name[i] + ", " + address[i] + ", " + phone[i]);
}

function doFind() {
    var name = getElementValue("name");
    if(name=="Rob Miles")
    {
        displayElementValue("address", "18 Pussycat Mews\nLondon\nNE1 410S");
        displayElementValue("phone", "+44(1234) 56789");
    }
    else {
        displayContactNotFound();
    }
}
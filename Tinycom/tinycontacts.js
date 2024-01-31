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
    alert("회원을 찾을 수 없습니다.");
}

//배열 생성
var people = [];
function doSave() {
    //배열에 저장할 프로퍼티 설정
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    //하나라도 입력하지 않으면 전부 입력하라고 요청하기
    if (name === "" || address === "" || phone === "") {
        alert("원할한 검색을 위해 모든 값을 입력하세요!");
        return;
    } else { // 입력받은 3개의 정보를 배열에 저장.
        var person= {
            name: name,
            address: address,
            phone: phone
        };
        people.push(person);
        
        alert("저장 완료");
    }
}

function doFind() {
    var findperson = document.getElementById("name").value;

    var foundPerson = people.find(function(person) {
        return person.name === findperson;
    });

    if (foundPerson) {
        displayElementValue("address", foundPerson.address);
        displayElementValue("phone", foundPerson.phone);
        alert(foundPerson.name + "님의 정보를 찾았습니다!");
    } else {
        displayContactNotFound();
    }
}

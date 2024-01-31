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
var accounts = [];

function doSave() {
    //배열에 저장할 프로퍼티 설정
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    //하나라도 입력하지 않으면 전부 입력하라고 요청하기
    if (name === "" || phone === "" || address === "") {
        alert("원할한 검색을 위해 모든 값을 입력하세요!");
        return;
    } else{
        // 입력받은 3개의 정보를 배열에 저장.
        // accounts이라는 배열에 name, address, phone 이라는 3개의 정보를 person이라고 지정한 후 저장.
        var person= {
            name: name,
            phone: phone,
            address: address
        };
        accounts.push(person);
        alert("저장 완료");
    }
}

function doFind0() { // 이름으로 찾는 경우
    // 입력 필드에서 찾을 이름 가져오기
    var findperson = document.getElementById("name").value;

    // 'accounts' 배열에서 입력과 일치하는 이름을 가진 사람 찾기
    var foundPerson = accounts.find(function(person) {
        return person.name === findperson;
    });

    // 찾은 사람이 있는지 확인
    if (foundPerson) {
        //찾았을 경우 그 사람의 주소와 연락처를 제공
        displayElementValue("address", foundPerson.address);
        displayElementValue("phone", foundPerson.phone);
        alert(foundPerson.name + "님의 정보를 찾았습니다!");
    } else{
        //없으면 경고 메세지로 정보가 없다고 출력
        displayContactNotFound();
    }
}

function doFind1(){ // 전화번호로 찾는 경우
    var findnumber = document.getElementById("phone").value;

    var foundnumber = accounts.find(function(person){
        return person.phone === findnumber;
    });

    if (foundnumber) {
       //찾았을 경우 그 사람의 이름과 주소 제공
        displayElementValue("name", foundnumber.name);
        displayElementValue("address", foundnumber.address);
        alert(foundnumber.phone + "님의 정보를 찾았습니다!");
    } else{
        //없으면 경고 메세지로 정보가 없다고 출력
        displayContactNotFound();
    }
}

// 주소는 검색기능을 넣지 않는것을 추천한다.
// 주소가 길면 찾기가 번거롭고, 정확한 주소를 입력해야 하기 때문. 대전시와 대전광역시는 인간이 보기에는 같은 값이지만, 배열에 저장된 문자열 값은 같은 값이 아니기 때문.
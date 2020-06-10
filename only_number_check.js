//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.
//예) "a123" : false
//예) "1a23" : false
//예) "    " : false
//예) "1234" : true

function solution(s) {
    var answer = true;
    var eng = s.search(/[a-z]/ig); //영문 포함 여부 검사
    var spe = s.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi); //특수문자 포함 여부 검사
    var empty = s.search(/\s/); //공백 포함 여부 검사

    if(isNaN(s) || eng > 0 || spe > 0 || empty != -1){
        answer = false;
    } else {
        if(s.length === 4 | s.length === 6){
            answer = true;
        } else {
            answer = false;
        }
    }
    return answer;
}

//중복제거
function a(x) {
  return [...new Set(x)]
}

//정렬
function b(x) {
  return x.sort((a,b)=>a-b);
}
function bb(x) {
  return x.sort();
}

//필터
function c(x) {
  return x.filter((a,b)=>a>0)
}

//배열 순서 반전
function d(x) {
  return x.reverse();
}

//int 변수를 문자로 바꿔서 배열에 담기
function e(x) {
  return [...(x+'')]
}

//문자 배열을 int로 바꾸기
function e(x) {
  return x.map(a=>a*1)
}

--------
출처: https://dev-t-blog.tistory.com/8 [dev-t-blog]

//Spring + JSP - Spring의 ModelAndView 에서 전달해준 Attribute 키 값
var text = '${helloText}';
var test = "${helloText}";

//JSP 변수 선언 후 사용
<% String helloText="Hello~!"; %>
var text ="<%=helloText%>";

//JSP 실행 순서
Java => JSTL => HTML => javascript

--------

//JSTL
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

//JSTL - LIST SIZE 구하기
${fn:length(listName)}

--------

//정규식
//아이디 - 첫글자 영소문자, 영소문자+숫자(1자 이상) 조합 4~12자
/^[a-z]+(?=.*[0-9])[a-z0-9]{3,11}$/.test('asdf1234')

//비밀번호 - 영문(대문자 구분없이 1자 이상), 숫자(1자 이상) 조합 6~20자 (특수문자 추가 가능)
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}|(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,20}$/.test('asdf1234!@#$')


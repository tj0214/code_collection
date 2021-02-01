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

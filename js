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



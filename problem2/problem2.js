function area (A, B, C){
  var p = A + B + C;
  var s = p/2;
  var theArea = Math.sqrt((s*(s-A)*(s-B)*(s-C)));
  return theArea;
}

function recordInput(){
  var a = document.getElementsByName("sideA")[0].value;
  var b = document.getElementsByName("sideB")[0].value;
  var c = document.getElementsByName("sideC")[0].value;
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  document.getElementById("theResult").innerText += "The area of the triangle is: " + area(a,b,c);

};

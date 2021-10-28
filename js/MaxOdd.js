function max_odd(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 1)
      return arra[i];
    }
  }


function funcOdd() {
  var x = (max_odd([20, 400, 201, 31]));
document.getElementById("odd").innerHTML = x;
}

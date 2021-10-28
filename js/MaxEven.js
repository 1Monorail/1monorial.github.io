function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }

function funcEven() {
  var y = (max_even([20, 40, 200, 32]));
document.getElementById("even").innerHTML = y;
}

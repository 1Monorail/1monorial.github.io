function max_thing(arra) {
  arra.sort((x, y) => y - x);
  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 1)
      return arra[i];
    }
  }

 var k = "The respective values are :";
     function GeeksT() {
           var input = document.getElementsByName('array[]');

           for (var i = 0; i < input.length; i++) {
               var a = input[i];
               k = k + "array[" + i + "].value= "
                                  + a.value + " ";
           }

           document.getElementById("par").innerHTML = k;
           document.getElementById("po").innerHTML = "Output";
       }

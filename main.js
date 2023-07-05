function dataStructProb1Sol1() {
    var setOne = [12, 13, 6, 10];
    var setTwo = [13, 10, 16, 15];
    var sum = 0;
  
    for (var i = 0; i < setOne.length; i++) {
      var duplicated = false;
      for (var j = 0; j < setTwo.length; j++) {
        if (setOne[i] === setTwo[j]) {
          duplicated = true;
          break;
        }
      }
      if (!duplicated) {
        sum += setOne[i];
      }
    }
  
    for (var i = 0; i < setTwo.length; i++) {
      var duplicated = false;
      for (var j = 0; j < setOne.length; j++) {
        if (setTwo[i] === setOne[j]) {
          duplicated = true;
          break;
        }
      }
      if (!duplicated) {
        sum += setTwo[i];
      }
    }
  
    console.log("Sum of all distinct elements: " + sum);
  }
  
  dataStructProb1Sol1();

  //dataStructProb2Sol1
  function dataStructProb1Sol2(){
  var setOne = [12, 13, 6, 10];
  var setTwo = [13, 10, 16, 15];
  var sum = 0;

  for (var i = 0; i < setOne.length; i++) {
    var duplicated = false;
    for (var j = 0; j < setTwo.length; j++) {
      if (setOne[i] === setTwo[j]) {
        duplicated = true;
        break;
      }
    }
    if (duplicated) {
      sum += setOne[i] * 2;
    }
  }

  console.log("Sum of all overlapping elements: " + sum);
}

dataStructProb2Sol1();
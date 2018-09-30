module.exports = function getZerosCount(number) {
  // your implementation
  var degree = 0, j = 0, zeros = 0;
  for(var i = 1; Math.pow(5,i) < number; i++){
    degree = i;
  }
  var row=[];
  for(var i=1; i <= degree; i++ ){
    row[j] = Math.trunc(number/Math.pow(5,i));
    j++;
  }

  for(var i = 0; i < row.length; i++){
    zeros += row[i];
  }
return (zeros);
}

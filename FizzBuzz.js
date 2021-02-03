var fizzBuzz = function(n) {
  var output = [];
  for(var i = 1; i <= n; i ++){
      var temp = '';
      if(i % 3 === 0){
          temp = temp + "Fizz";   
      } 
      if (i % 5 === 0) {
          temp = temp + "Buzz";
      }
      if(temp === ''){
          temp = JSON.stringify(i)
      }
      output.push(temp)
  }
  return output;
};
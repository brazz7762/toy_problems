var majorityElement = function(nums) {
  if(nums.length === 1){
      return nums[0]
  }
  var counter = {};
  for(var i = 0; i < nums.length; i++) {
      if(counter[nums[i]] === undefined){
          counter[nums[i]] = 1;
      } else {
          counter[nums[i]] += 1;
          if(counter[nums[i]] > nums.length/2){
              return nums[i];
          }
      }
  }
};
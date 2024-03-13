/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = nums.length
    let low = 0 , high = nums.length-1

    while(low<=high){
       let mid = parseInt((low+high)/2) 
       if(nums[mid]>=target){
           result = mid
           high = mid -1
       }
       else{
          low = mid+1
       }
    }
    return result
};

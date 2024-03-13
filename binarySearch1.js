//  Binary Search Time complexity:  O(log(n))
// Overflow case: If the search space is between 0 to INT_MAX and the required number is at high position then the mid will  be  at the end will  mid = (low+high)/2 
// To tacke the situation we will use mid = (low+(high-low))/2  to avoid overflow case.


function binarySearch(arr,low,high,target){
    if(low>high){
        return -1
    }   
    
    let mid = (low+high)/2
    
    if(arr[mid] === target){
        return mid    
    }
    else if(arr[mid] > target){
        return binarySearch(arr,low,mid-1,target)
    }
    else{
        return binarySearch(arr,mid+1,high,target)        
    }
}

let input = [1,2,3,4,5,6,7]
let target = 100
let low = 0
let high = input.length-1
console.log(binarySearch(input,low,high,target))

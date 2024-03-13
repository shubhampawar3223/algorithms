//typically lower bound value is a value which is > target value.
//we can use binary search for this problem 

function upperbound(arr,target){
    let low =0, high = arr.length-1
    let result = arr.length
    
    while(low<=high){
        let mid = (low+high)/2
        if(arr[mid] > target){
            result =mid
            high = mid-1
        }
        else{
            low = mid+1
        }
    }
    console.log("upperbound index:",result)
}

let arr = [1,2,3,9,15,20,27]
let target = 5
upperbound(arr,target)

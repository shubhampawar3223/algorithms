//selection sort
// Notes: find smallest element and then swap the ith and jth index ,
// i index traverse from 0 to n-2,
// and j index from i+1 to n-1
// here time complexity is like sum of numbers O(n*(n+1)/2)  which boils down to O(n^2)


function selectionSort(arr){
    
    for(let i=0;i<=arr.length-2;i++){
        let min =i //assigning lower number index to i
        for(let j=i+1;j<arr.length;j++){  //running loop to check lower number 
            if(arr[j] < arr[min]){
               min = j 
            }    
        }
        let temp =arr[min]  //swapping the numbers
        arr[min] = arr[i]
        arr[i] = temp
    }
    console.log(arr)
}

let nums = [10,25,4,7,8,2,78]
selectionSort(nums)






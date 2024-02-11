//bubble sort
// Notes: find consecutive numbers are in ascending order or not and swap the numbers,
// i index traverse from n-1 to 0,
// and j index from 0 to n-1
// here time complexity is like sum of numbers O(n*(n+1)/2)  which boils down to O(n^2)
//to optimize the code we have added the dedSwapping counter so if given array is already sorted then soeting will npt happen and 
//will break the loop this will make the time complexity O(N)

function bubbleSort(arr){
    
    for(let i=arr.length-1; i>=0; i--){
        let didSwapping = 0       //counter to see whether swapping is done
        for(let j=0; j<=i-1; j++){  //running loop to check lower number 
            if(arr[j] > arr[j+1]){
               let temp =arr[j+1]  //swapping the numbers
               arr[j+1] = arr[j]
               arr[j] = temp
               didSwapping = 1
            }    
        }
        if(!didSwapping){   //is swapping is not done then array is sorted 
            break
        }
    }
    console.log(arr)
}

let nums = [10,25,4,7,8,2,78]
// let nums = [1,2,3,4,5,6]
bubbleSort(nums)






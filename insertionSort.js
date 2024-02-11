//insertion sort - take an element and put it in it's correct index
// Notes: find consecutive numbers are in ascending order and if not then left swap the array until it becomes sorted,
// i index traverse from 0 to n-1,
// and j index from i to 1
// here worst time complexity is O(n^2), and simple one will be O(n) when given array is sorted

function insertionSort(arr){
    
    for(let i=0; i< arr.length; i++){
        let j =i
        while(j!== 0 && arr[j-1] > arr[j]){
            let temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp
            j--
        }
    }    
    console.log(arr)
}

let nums = [10,25,4,7,8,2,78]
// let nums = [1,2,3,4,5,6]
insertionSort(nums)






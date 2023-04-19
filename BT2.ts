// function stacking (arr:number[]){
//     for (let i = 0; i < arr.length; i++){
//         let index = i;
//         for (let j = i + 1; j < arr.length ; j++) {
//             if(arr[j] < arr[index]) {
//             index = j
//             }
//         }
//         let tem = arr[index];
//         arr[index] = arr[i];
//         arr[i] = tem
//     }
//     return arr
// }
// let new_arr = [3,2,5,8,9,0,5,4,3,6];
// console.log(stacking(new_arr));


// function BubbleSort(arr:number[]){
//     for (let i = 0; i <arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if(arr[j] > arr[j+1]){
//                 let index = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = index;
//             }
//         }
//     }
//     return arr;
// }
// let a = [2,4,6,7,8,9,0,6,5,3];
// console.log(BubbleSort(a));


function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let value = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = value;
    }
    return arr;
}
let a = [2,4,6,7,8,9,0,6,5,3];
console.log(insertionSort(a));
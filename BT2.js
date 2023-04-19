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
function BubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var index = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = index;
            }
        }
    }
    return arr;
}
var a = [2, 4, 6, 7, 8, 9, 0, 6, 5, 3];
console.log(BubbleSort(a));

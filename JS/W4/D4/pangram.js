// function pangramTest (ziv) {
//     let alphabet = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0};
//     for (let i=0;i<ziv.length;i++){
//         if (ziv[i]!=" "){
//             // console.log((ziv[i]));
//             console.log(alphabet[ziv.keys[i]]);
//         }
//     }
//     console.log(alphabet);
// }

// let str = "The quick brown fox jumps over the lazy dog"
// let str0 = "We promptly judged antique ivory buckles for the prize"

// pangramTest(str);
// pangramTest(str0);

// let arr = [2,4,4,1]
// let otherArr=[2,4,4,5,6,7,1,7,4,7,4,7,5]

// const tallestCandles = arr => {
//     let highest=0;
//     let candlesToBlow=0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i]==highest){
//             candlesToBlow++;
//         } else if (arr[i]>highest){
//             highest=arr[i];
//             candlesToBlow=1;
//         }
//     }
//     return candlesToBlow;
// }
// console.log(tallestCandles(arr));
// console.log(tallestCandles(otherArr));

// const population5 = {
//     tokyo: 1,
//     delhi: 4,
//     shanghai: 3,
//     datetime:{
//       time:5,
//       date:6
//     }
//   }

//   const {tokyo, delhi, shanghai, time, date} = population5[];
//   console.log(time, date)

// let x='abc';
// console.log((x).charCodeAt(0)-97);
// let arr=Array.from({length: 26}, (_, i) => i + 97)
// console.log(arr)
//=============================================
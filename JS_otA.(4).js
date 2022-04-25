let s = "";
let res = "";
function printSmile(s, n){

for (let numb = 1  ; numb <= n; numb++) {
res = res.concat(s)
console.log( numb + " " + res ) ;
}
}
printSmile(":)", 8)
function checkPalindrome(str){
    str = str.toLowerCase().replace(/\s/g,""); 
   if(str === str.split('').reverse().join('')){
   console.log('Это палиндром')
   }
   else{
   console.log('Это не палиндром')
   }
}
checkPalindrome("А роза упала на лапу Азора")
function checkAge(age) {
    checkAge = prompt("Enter age!")

    if (typeof(age) != "number"){
        age = Number(age);
    }

    if (age < 18 ){
    
        return("You don`t have access cause your age is " + age + " It`s less then " + 18)
    } 
    else if  (age >= 18 && age <= 60 ){
    
        return("Welcome!")
    }
    else if  (age > 60){
        return("Keep clam and look Culture channel");
   
}
    else {
        return("Technical work");
    }
  
}
  
  var output = checkAge("234");
  console.log(output); 
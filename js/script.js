//ciclo i numeri da 1 a 100
for(let i = 1; i <=100; i++){

 // verifico se il numero è multiplo di 3 e 5
  if(i % 3 === 0 && i % 5 === 0){
    console.log(`FizzBuzz`)
  }

   //verifico se il numero è multiplo di 5
  else if(i % 5 === 0){
    console.log(`Buzz`)
  }

  //verifico se il numero è multiplo di 3
   else if (i % 3 === 0){
    console.log(`Fizz`)
  }
  
  else{
    console.log(i)
  }
}
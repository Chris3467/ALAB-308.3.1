// Part 1

let x = 0;
while ( x <= 100) {
    console.log(x);
    x += 1;
    if (x % 3 ===0) {
        console.log('Fizz');
    }
    if (x % 5 ===0){
        console.log('Buzz');
    }
    if (x % 3 ===0 && x % 5 ===0 ) {
        console.log('Fizz Buzz');
    }
    else {
        console.log(x>=0);
    }
}

// Part 2

//set boolean isPrime to false
let isPrime = false;
//number input
let number = 5;


//While the value of isPrime is false, the condition !isPrime inside '( )' is never true
while (!isPrime) {
    //increment number by 1 at start, so we can find next Prime number that is larger than the number we given
    number++;
    //2 is only prime number that is divided by 2
    if (number == 2) {
        console.log(number + " is Prime Number");
        isPrime = true;
    }
    //Running Prime number check
    else {
        //Negative, 0 and 1 is not prime number
        if (number > 1) {
            // let given number divide by all number that is less than itself
            for (let i = 2; i <= number - 1; i++) {

                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
                //at end of loop, if number is still not dividable by 2, isPrime=true
                else if(number % i !== 0&& i == number-1) {

                    isPrime = true;
                }
            }
        }
        //if isPrime is true, we can output the number
        if (isPrime) {
            console.log(number + " is Prime Number");
        }
    }
}

let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// Loop through characters in string
// Loop through characters in string
let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;
// For each character
for (let i = 0; i < data.length; i++) {
    let char = data[i];

    if (char == "," || char == "\n") {
      switch (cellNum) {
          case 1:
              cell1 = cell;
              break;
          case 2:
              cell2 = cell;
              break;
          case 3:
              cell3 = cell;
              break;
          case 4:
              cell4 = cell;
              break;
      }
      if (cellNum == 4){
          cellNum = 1;
      }
      else {
          cellNum += 1;
      }
      cell = "";
  } else {
      cell += char;
  }
    if (char == "\n"){
        console.log(cell1, cell2, cell3, cell4);
        cell = "";
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }
}
//Writing optimized JavaScript code to print the pattern of stars in increasing order from 1 to n

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

triangle(5);

/*
OUTPUT:

*
**
***
****
*****

*/

//Short code Using inbuilt repeat method

function triangleShort(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

triangleShort(5);

/*
OUTPUT:

*
**
***
****
*****

*/

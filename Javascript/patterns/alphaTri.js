function alphaHillPattern(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) process.stdout.write(" ");

    let ch = 65;
    let breakpoint = (2 * i + 1) / 2;

    for (let j = 1; j <= 2 * i + 1; j++) {
      process.stdout.write(String.fromCharCode(ch));
      if (j <= breakpoint) ch++;
      else ch--;
    }

    for (let j = 0; j < num - i - 1; j++) process.stdout.write(" ");
    console.log();
  }
}

alphaHillPattern(5);

/*
  Output:
      A
     ABA
    ABCBA
   ABCDCBA
  ABCDEDCBA
  */

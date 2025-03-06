let userName = {
  firstName: "Ashish",
  lastName: "Kumar",
};

const printFullName = function (hometown, state, country) {
  console.log(
    `Hello, ${this.firstName} ${this.lastName} from ${hometown} ${state} ${country}`
  );
};

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyname = printFullName.mybind(userName, "Manali", "Himachal");

printMyname("India");

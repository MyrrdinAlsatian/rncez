#! /usr/bin/env node
console.log("unicorns♥");
const isNotValidNodeVersion = () => {
  const currentNodeVersion = process.versions.node;
  const semver = currentNodeVersion.split('.');
  const major = semver[0];

  if (major < 10) {
    console.error(
      // eslint-disable-next-line
      'You are running Node ' +
        currentNodeVersion +
        ' Generate React CLI requires Node 10 or higher. Please update your version of Node.'
    );

    return true;
  }

  return false;
};

// --- Check if user is running Node 10 or higher.

if (isNotValidNodeVersion()) {
  process.exit(1);
}

require('../src/cli')(process.argv)

// // slice argv as we don't need the forst two elements (in this case)
// const args = process.argv.slice(2, process.argv.length);
// console.log(args);

// const action = args[0];// first argument
// const a = args[1];     // second argument
// const b = args[2];     // third argument

// if(action === "sum"){
//     // ex: npx test-cli-tool sum 5 2
//     // output: "Sum is: 7"
//     console.log("Sum is: " + (Number(a) + Number(b)));
// } else if(action === "dif") {
//     // ex: npx test-cli-tool dif 5 2
//     // output: "Difference is: 3"
//     console.log("Difference is: " + (Number(a) - Number(b)));
// } else {
//     console.error("Unexpected input");
// }

// process.exit(0);// 0 means there were no errors
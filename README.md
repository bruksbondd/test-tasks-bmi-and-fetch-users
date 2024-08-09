## PRODUCTION URL: https://test-tasks-bmi-and-fetch-users.vercel.app/

## Setup project

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Running project



```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



Tasks:
1. Build a simple BMI (body mass index) calculator which will use a person's weight
and height in order to calculate their body mass index as a number:
[https://c70hv3.csb.app/](https://c70hv3.csb.app/)

2. Use an input's value to search for users in GitHub using their username or email:
[https://iesdhc.csb.app/](https://iesdhc.csb.app/)

3. Paste the following code into your .html file and follow the instructions:
```bash
<!doctype html>
<html>
<head></head>
<body>
<h1>Interview test</h1>
<p>You have to implement missing part of the application (`Parallel`) that making the
code to be compiled and executed without exceptions and assertions in browser console.</p>
<script>
/*
* You have to implement missing part of the application that making code below (which
untouchble)
* to be compiled and executed without exceptions and assertions.
*/
PLACE YOUR CODE HERE
</script>
<script>
/************************************************
* Please don`t change the code bellow this line *
************************************************/
var runner = new Parallel({
parallelJobs: 2
});
runner.job(step1)
.job(step2)
.job(step3)
.job(step4)
.done(onDone);
function step1(done) {
console.log('step1');
setTimeout(done, 1000, 'hello world');
}
function step2(done) {
console.log('step2');
setTimeout(done, 1200, 'Job succeded');
}
function step3(done) {
console.log('step3');
setTimeout(done, 1500, 'step3');
}
function step4(done) {
console.log('step4');
setTimeout(done, 100, 'step4');
}
var isPassed = false;
function onDone(results) {
console.log('onDone', results);
console.assert(Array.isArray(results), 'expect result to be array');
console.assert(results[0] === 'hello world', 'Wrong answer 1');
console.assert(results[1] === 'Job succeded', 'Wrong answer 2');

console.assert(results[2] === 'step3', 'Wrong answer 3');
console.assert(results[3] === 'step4', 'Wrong answer 4');
console.log('Thanks, all works fine');
isPassed = true;
}
setTimeout(function(){
if(isPassed) return;
console.error('Test is not done.');
}, 10000);
</script>
</body>
</html>
```
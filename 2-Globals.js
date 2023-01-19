//GLOBALS - NO WINDOW

// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (CommonJS)
// module      - info about current module (file)
// process     - info about env where the program is being executed
let seconds =0;
setInterval(()=>{
    seconds++
    console.log(seconds);
},1000);

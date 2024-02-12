//GLOBALS -NO WINDOW

// __dirname --> path to currrent directory
//__filename --> file name
// require   --> function to use modules (CommonJS)
// module    --> info about current module (file)
// process   --> info about env where the program is being excuted  

console.log(__dirname);
setInterval(()=>{
    console.log('hello world');
},1000)
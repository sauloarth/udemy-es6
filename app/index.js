function processData(inputString){
    console.log("Helo, World.");
}

let stdin = process.stdin;
stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function(input){
    _input += input;
})

process.stdin.on("end", function(){
    processData(_input);
})



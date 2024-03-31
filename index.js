const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let button = document.getElementById("button");

let firstColorBox = document.getElementById("first-color-box");
let secondColorBox = document.getElementById("second-color-box");
let thirdColorBox = document.getElementById("third-color-box");

let firstHexCode = document.getElementById("first-hex-code");
let secondHexCode = document.getElementById("second-hex-code");
let thirdHexCode = document.getElementById("third-hex-code");


//go into the array randomly

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length);
    return randomNumber;
}

function hexColorGenerator(hexColorBox, hexText){
    button.addEventListener("click", function(){
        let hexCode = "#";
        for(let x = 0; x < 6; x++){
             hexCode += hexadecimalNumberSystem[generateRandomNumber()];
        }
    
        hexColorBox.style.backgroundColor = hexCode;
        hexText.innerText = hexCode;
    
    });
}


hexColorGenerator(firstColorBox, firstHexCode);
hexColorGenerator(secondColorBox, secondHexCode);
hexColorGenerator(thirdColorBox, thirdHexCode);






















// button.addEventListener("click", function(){
//     let hexCodeForSecondBox = "#"
//     for(let x = 0; x < 6; x++){
//          hexCodeForSecondBox += (hexadecimalNumberSystem[generateRandomNumber()])
//     }

//     secondColorBox.style.backgroundColor = hexCodeForSecondBox
//     secondHexCode.innerText = hexCodeForSecondBox

// });



// button.addEventListener("click", function(){
//     let hexCodeForThirdBox = "#"
//     for(let x = 0; x < 6; x++){
//          hexCodeForThirdBox += (hexadecimalNumberSystem[generateRandomNumber()])
//     }

//     thirdColorBox.style.backgroundColor = hexCodeForThirdBox
//     thirdHexCode.innerText = hexCodeForThirdBox

// })


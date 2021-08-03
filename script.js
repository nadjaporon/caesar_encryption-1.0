'use strict'


const caesar = (text, nr) => {

    let charCodeSmallA = "a".charCodeAt(0);     // a = 97
    let charCodeSmallZ = "z".charCodeAt(0);     // z = 122
    let charCodeBigA = "A".charCodeAt(0);       // A = 65
    let charCodeBigZ = "Z".charCodeAt(0);       // Z = 90

    let startAsciiCode;
    let encryptionText = "";
    let transformedCode;

    console.log(text);  // Eingabetext

    for (let i = 0; i < text.length; i++) {

        let charCode = text.charCodeAt(i);

        if (charCode >= charCodeBigA && charCode <= charCodeBigZ) {     // wenn charCode >= 65 u <= 90
            startAsciiCode = charCodeBigA;  // 65

        } else if (charCode >= charCodeSmallA && charCode <= charCodeSmallZ) {      // wenn charCode >= 97 u <= 122
            startAsciiCode = charCodeSmallA;    // 97
        }
        charCode = charCode - startAsciiCode;
        transformedCode = charCode + nr;

        // Falls charCode über z bzw unter a geht
        if (transformedCode > 25) {
            transformedCode -= 26;
        } else if (transformedCode < 0) {
            transformedCode += 26;
        }

        transformedCode += startAsciiCode;
        encryptionText += String.fromCharCode(transformedCode);
    }
    console.log(encryptionText);
}


caesar("Zanga", 2);
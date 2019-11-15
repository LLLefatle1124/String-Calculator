module.exports = class StringCalculator{

    constructor(){

        this.myRgEx = /\d{1,}/gm
        
        this.ntive = (string) => {

        let mystring = ""
        
        for(let j = 0; j < string.length; j++) {

            if(string[j] === "-" && !isNaN(string[k+1])){
                mystring += "-"+ string[k+1] + ","
            }

        }

        return mystring

        }

    }

    add(string){

        let tot = 0
        let nums = string.match(this.myRgEx)

        if(string == ""){
            return 0
        }

        let neg = this.ntive(string)

        try {

            if(string.includes("-")){
              throw ("negatives not allowed " + neg)
            }

        } 
        catch (error) {
            return error
        }

        for(let j = 0; j < nums.length; j++){

            let num = parseInt(nums[j])

            if(num > 1000){
                continue
            }
            else{
                tot += num
            }
        }

        return tot

    }

}
// module.exports = {
//     add
// }
// const { convertStringToNumber } = require('convert-string-to-number'); // named export
// const converter = require('convert-string-to-number'); // default export

// // ptn1 = /[^0-9]/
// // ptn2 = /^$/

// ptn = 

// function add(){

//     var digiErr = " is not numeriacl. It cannot be added to "
//     var sum = 0

//     try {
//         var argTest = 0

//         // loop through each argument to see if it is fit to be added to the sum
//         for (x = 0; x<= arguments.length; x++){

//             argTest = convertStringToNumber(arguments[x])

//             // see if the argument is an empty string
//             if (arguments[x].match(ptn2)){
//                 // increment x
//                 x ++

//                 // see if we are still in the loop
//                 if (x = arguments.length && arguments[x].match(ptn2)){
//                     return 0
//                 } 
//             }//works
//             else if(!arguments[x].match(ptn1) && !arguments[x].match(ptn2)){
//                 sum += argTest
//                 if(x ==  )
//                 return 
//             }//
//             // else if(argTest.match(ptn2)){
                
//             // }//works
//             else if(arguments[x].match(ptn1) && arguments[x].match(ptn2)){
//                 throw "cannot add '" + arguments[x] + "'. it is not a number"
//             }//works
//         }
//     } catch (error) {
//         return error
//     }
// };



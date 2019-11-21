module.exports = class StringCalculator{

    constructor(){

        this.myRgEx = /\d{1,}/gm
        
        this.ntive = (string) => {

        let mystring = ""
        
        for(let j = 0; j < string.length; j++) {

            if(string[j] === "-" && !isNaN(string[j+1])){
                mystring += "-"+ string[j+1] + " "
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
              throw new myError("negatives not allowed " + neg)
            }

        } 
        catch (myError) {
            return myError
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

module.exports = class StringCalculator{

    constructor(){
        this.myRgEx = /\d{1,}/gm
        
    }

    add(string){

        let tot = 0
        let nums = string.match(this.myRgEx)

        if(string == ""){
            return 0
        }

        let mystring = ""
    
        for(let j = 0; j < string.length; j++) {
        
            if(string[j] === "-" && !isNaN(string[j+1])){
            mystring += "-"+ string[j+1] + " ";
            }

        }

        if(mystring != ""){
            throw new Error("negatives not allowed " + mystring);
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

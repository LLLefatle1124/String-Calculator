let start = require("../src/string-calculator")
let myCalc = new start()

describe("add()", function(){
    
    // test for allowing up to two numbers separated by commer
    it("allows up to two numbers separated ny comma.", function(){
        expect(myCalc.add("")).toBe(0)      // Allows 0 numbers
        expect(myCalc.add("1")).toBe(1)     // Allows 1 number
        expect(myCalc.add("1,2")).toBe(3)   // Allows 2 numbers
    })

    // test for handling n numbers
    it("handles n amount of numbers and returns their sum.", function(){
        expect(myCalc.add("7,3,57,3")).toBe(70)
        expect(myCalc.add("7,3,3")).toBe(13)
    })

    // test for handling new lines between string numbers
    it("ignores newlines and continue adding numbers", function(){
        expect(myCalc.add("1\n2,3")).toBe(6);
    });

    // test for supporting different delimeters
    it("supports different delimiters", function(){
        expect(myCalc.add("//;\n1;2")).toBe(3);
    });

    // test for throwing of an error when string contains negatives
    it("returns an error message and a negative number(s)", function(){
        expect(myCalc.add("/-21 /\n-2,%%")).toThrowError(Error)
    })

    
    // test for ignoring numbers bigger than 1000 should 
    it("ignores numbers bigger than 1000", function(){
        expect(myCalc.add("2 + 1001")).toEqual(2);
    });

})
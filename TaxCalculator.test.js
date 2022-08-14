const taxCollect= require("./TaxCalculator")

describe("Testing the Tax", ()=>{
    test("Tax below 250000", () =>{
        expect(taxCollect(25000)).toBe(0)
    });
    test("Tax above 250000", () =>{
        expect(taxCollect(300000)).toBe(60000)
    });
    test("Tax above 500000", () =>{
        expect(taxCollect(540000)).toBe(108000)
    });
    test("Tax above 100000", () =>{
        expect(taxCollect(1230800)).toBe(369240)
    });
})
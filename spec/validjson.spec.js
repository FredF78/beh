const file = require('../behorighetsvisaren-data-20200131-1019.json');
describe('behorighetsvisaren', () => {
    it("should contain 70 yrken", () => {
        expect(file.yrken.length).toBe(70);
    });
   
    it("should contain correct utbildningar", () => {
        let utbildningar = [];
        file.utbildningar.map(utb => {
            utbildningar.push(utb.programkod);
        });
        expect(utbildningar.length).toBe(6);
    });

    it("should contain correct inriktningar", () => {
        let inriktningar = [];
        file.utbildningar.map(utb => {
            utb.inriktningar.map(inr => {
                inriktningar.push(inr.inriktningskod)
            })
        });
        expect(inriktningar.length).toBe(11);
    });

     // fyll på med tester

});
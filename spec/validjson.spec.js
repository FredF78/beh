//import { yrken, utbildningar as _utbildningar } from '../behorighetsvisaren-data-20200131-1019.json';
const yrken = require('../datastore-competenceguide-titles-20200204-1000.json');
const _utbildningar = require('../datastore-competenceguide-programs-20200204-1000.json');
const assert = require('assert');

describe('behorighetsvisaren', () => {
    it("should contain 66 main yrken", () => {
        expect(yrken.length).toBe(66);
    });
   
    it("should contain correct utbildningar", () => {
        let utbildningar = [];
        _utbildningar.map(utb => {
            utbildningar.push(utb.programkod);
        });
        expect(utbildningar.length).toBe(6);
    });

    it("should contain correct inriktningar", () => {
        let inriktningar = [];
        _utbildningar.map(utb => {
            utb.inriktningar.map(inr => {
                inriktningar.push(inr.inriktningskod)
            })
        });
        expect(inriktningar.length).toBe(10);
    });

    it('should contain kursarray in every yrke', () => {
        function parseYrkesKurser() {
            yrken.map(yrke => {
                Array.isArray(yrke.kurser);
            });
        }
        expect(function(){parseYrkesKurser();}).not.toThrowError();
    });

     // fyll på med tester
     it('should contain inriktningar and behorigheter', () => {
         function assertOInriktningarLength() {
             _utbildningar.map(utb => {
                assert(utb.inriktningar.length > 0);
             });
         }

         function assertBehorigheter() {
             _utbildningar.map(utb => {
                console.log(utb.programkod);
                utb.inriktningar.map(inr => {
                    //console.log(inr.behorigheter[1]['kategori']);
                    assert(inr.behorigheter[0]['kategori'] ==='A');
                    assert(inr.behorigheter[1]['kategori'] === 'B');
                    assert(inr.behorigheter[2]['kategori'] === 'C');
                });
            });
         }

         expect(function() {assertOInriktningarLength();}).not.toThrowError();
         expect(function() {assertBehorigheter();}).not.toThrowError();
     })

});
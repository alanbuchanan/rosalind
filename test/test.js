import {expect} from 'chai'
import * as lib from '../index'
import fs from 'fs'

describe('Counting DNA Nucleotides', () => {
	it('should return four integers (separated by spaces) counting the respective number of times that the symbols \'A\', \'C\', \'G\', and \'T\' occur.', (done) => {

		fs.readFile('txt/1.txt', 'utf-8', (err, data) => {
			expect(lib.countDNANucleotides(data)).to.be.equal('213 258 210 241')

			done()
		})
	});
});

describe('Transcribing DNA to RNA', () => {
	it('should return string like GAUGGAACUUGACUACGUAAAUU', (done) => {

		fs.readFile('txt/2.txt', 'utf-8', (err, data) => {
			expect(lib.transcribingDNAtoRNA(data)).to.be.equal('GAUGGAACUUGACUACGUAAAUU')

			done()
		})
	});
});

describe('Complementing a Strand of DNA', function () {
	it('should return the reverse complement of a string', function (done) {

		fs.readFile('txt/3.txt', 'utf-8', (err, data) => {
			if(err) throw err
			expect(lib.complementOfStrand(data)).to.be.equal('ACCGGGTTTT')

			done()
		})
	})
})

describe('REproduction crazy Rabbits', function() {

	it('should return reproduction number= 19', function() {
		expect(lib.rabbitsAndRecurrence(5, 3)).to.be.equal(19)

	})
})

describe('Counting Point', function () {

	it('should return the Hamming distance of two strings', function () {
		expect(lib.CountingPoints('GAGCCTACTAACGGGAT','CATCGTAATGACGGCCT')).to.be.equal(7)	
	})
})

describe.skip('Computing GC Content', function () {
	it('should return the ID of the string having the highest GC-content', function (done) {
		fs.readFile('txt/5.txt', 'utf-8', (err, data) => {
			if(err) throw err
			expect(lib.computeGCContent(data)).to.be.equal('Rosalind_0808 60.919540')
			done()
		})
	});
});
export function countDNANucleotides(str){
	const arr = str.split('')

	const arrCount = [0,0,0,0]

	arr.forEach(e => {
		if(e == 'A') arrCount[0]++
		if(e == 'C') arrCount[1]++
		if(e == 'G') arrCount[2]++
		if(e == 'T') arrCount[3]++
	})
	return arrCount.join(' ')
}

export function transcribingDNAtoRNA(str){
	return str.replace(/T/g, "U")
}

export function complementOfStrand(str){
	const arr = str.split('')

	let result = ''

	arr.forEach(e => {
		if(e == 'A') result += 'T'
		if(e == 'C') result += 'G'
		if(e == 'G') result += 'C'
		if(e == 'T') result += 'A'
	})

	return result.split('').reverse().join('')
}

export function rabbitsAndRecurrence(months, pairs){
	let childPairs = 1
	let adultPairs = 0
	let existingAdultPairs = 0

	for (var i = 2; i <= months; i++) {
		adultPairs = childPairs 
		childPairs = pairs * existingAdultPairs
		existingAdultPairs += adultPairs
	}

	return existingAdultPairs + childPairs
}


export function CountingPoints(str1,str2){

	const arr1= str1.split('')
	const arr2= str2.split('')
	let counter = 0 

	arr1.forEach((e,i) => {
		if(e !== arr2[i]) counter++ 
	})

	return counter

}

// export function computeGCContent(str){
// 	const arr = str.split('>')
	
// 	arr = arr.unshift()
// 	return arr[0]
// }
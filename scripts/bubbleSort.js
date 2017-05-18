// Bubble Sort
let elList = Array.from(document.querySelectorAll('#unsorted li'))
				.map(item=>Number(item.textContent));
let sorted = document.getElementById('sorted');

elList = bubbleSort(elList);

for (item of elList) {
	let current = document.createElement('li');
	current.textContent = item;
	sorted.appendChild(current);
}

/*
* bubbleSort - Sorts a given array using the bubble sort algorithm
* 
* @param [array] An array to be sorted
*
* @return [array] returns the given array sorted
*/
function bubbleSort(list) {
	let listIsSorted = true;
	
	for (let i = 1; i < list.length; i++) {
		let first = list[i - 1];
		let second = list [i];
		
		if (switchCondition(first, second)) {
			list[i] = first;
			list[i-1] = second;
			listIsSorted = false;
		}
	}
	
	// Terminal condition
	if (listIsSorted) {
		return list;
	}
	
	return bubbleSort(list);
}

/*
* switchCondition - compares two elements, to see if they are in the correct positions
*
* @param [first] element to be compared
* @param [second] element to be compared
*
* @return [boolean] if true, the positions of first and second should be switched
*/
function switchCondition(first, second) {
	if (second < first) {
		return true;
	}
	return false;
}
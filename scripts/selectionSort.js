// Merge Sort
let list = Array.from(document.querySelectorAll('#unsorted li'))
				.map(item=>Number(item.textContent));
let sorted = document.getElementById('sorted');

list = selectionSort(list, comparisonFunction);

for (item of list) {
	let current = document.createElement('li');
	current.textContent = item;
	sorted.appendChild(current);
}

/*
* selectionSort - A basic merge sort function for sorting simple arrays
* @param [array] List should be list of items to sort
* @param [function] Should accept two parameters and return
*    true(bool) if the first item should appear earlier in the
*    returning array
* @return [array] sorted list	
*/
function selectionSort(list, comparisonFunction) {
	let i = 0;
	for (i; i < list.length; i++) {
		let selection = i;
		let test = i + 1;
		for (test; test < list.length; test++) {
			if (comparisonFunction(list[selection], list[test])) {
				selection = test;
			}
		}
		list.splice(i, 0, list.splice(selection, 1)[0]);
	}
	return list;
}

/*
* comparisonFunction - The Comparison function
* @param [any] a single element to be compared
* @param [any] a single element to be compared
* 
* @return [boolean] true if the first item should appear first
*/
function comparisonFunction(item1, item2) {
	return item1 > item2;
}
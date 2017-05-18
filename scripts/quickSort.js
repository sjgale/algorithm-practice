// Quick Sort
let list = Array.from(document.querySelectorAll('#unsorted li'))
				.map(item=>Number(item.textContent));
let sorted = document.getElementById('sorted');

list = quickSort(list);

for (item of list) {
	let current = document.createElement('li');
	current.textContent = item;
	sorted.appendChild(current);
}


/*
* quickSort - Sorts a given array
* 
* @param [array] An array to be sorted
*
* @return [array] returns the given array sorted
*/
function quickSort(list) {
	// terminate recursion once you reach 0 || 1 items
	if (list.length < 2) {
		return list;
	}
	
	let pivot = list.pop(),
	    left  = [],
	    right = []
	
	for (item of list) {
		if (item < pivot) {
			left.push(item)
		} else {
			right.push(item)
		}
	}
	
	return quickSort(left).concat([pivot], quickSort(right));
}
// Merge Sort
let list = Array.from(document.querySelectorAll('#unsorted li'))
				.map(item=>Number(item.textContent));
let sorted = document.getElementById('sorted');

list = mergeSort(list, comparisonFunction);

for (item of list) {
	let current = document.createElement('li');
	current.textContent = item;
	sorted.appendChild(current);
}

/*
* mergeSort - A basic merge sort function for sorting simple arrays
* @param [array] List should be list of items to sort
* @param [function] Should accept two parameters and return
*    true(bool) if the first item should appear ealier in the
*    returning array, in cases where the two are equal, it can 
*    return true(bool) or false(bool)
* 
* @return [array] sorted list	
*/
function mergeSort(list, comparisonFunction) {
	if (list.length <= 1) {
		return list;
	}
	let middle = Math.floor(list.length/2);
	let left = list.slice(0, middle);
	let right = list.slice(middle, list.length);
	return merge(mergeSort(left, comparisonFunction), mergeSort(right, comparisonFunction), comparisonFunction);
}

/*
* merge - The merge portion of mergeSort
* @param [array] The left array to be merged
* @param [array] The right array to be merged
* @param [function] Should accept two parameters and return
*    true(bool) if the first item should appear ealier in the
*    returning array, in cases where the two are equal, it can 
*    return true(bool) or false(bool)
* 
* @return [array] a merged/sorted array
*/
function merge(left, right, comparisonFunction) {
	let sorted = [];
	while (left.length > 0 && right.length > 0) {
		if (comparisonFunction(right[0], left[0])) {
			sorted.push(right.shift());
		} else {
			sorted.push(left.shift());
		}
	}
	sorted = sorted.concat(left, right);
	return sorted;
}

/*
* comparisonFunction - The Comparison function
* @param [any] a single element to be compared
* @param [any] a single element to be compared
* 
* @return [boolean] true if the first item should appear first
*/
function comparisonFunction(item1, item2) {
	return item2 > item1;
}
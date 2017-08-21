'use strict';

const swap = require('./sort-helpers').swap;

// this is bubbleSort [ 3.1, 4.5, 1, 2, 5 ]
// 239) sorts an array of positive numbers

// this is bubbleSort [ -4, -9, -2, -8, -2, 0 ]
// 240) sorts an array of negative numbers

// this is bubbleSort [ -3, 4, 1, -9, 22 ]
// 241) sorts an array of positive and negative numbers

// this is bubbleSort [ 1, 2, 3, 4, 5 ]
// 242) works with arrays that are already sorted


/**
  name: bubbleSort
  descr: Sorts input array into "lowest to highest".
         (1). Passes through each arr's element
         (2). Compares each element against element's rightSide neighbor (nextElement).
         (3). If element is greater than nextElement, swap positions.
  param: arr (array of unsorted numbers)
  return: arr (sorted from lowest to highest)
**/

function bubbleSort(arr) {
  let justSwapped = false;

  arr.forEach(function(element,index){
    let nextElement = arr[index+1];

    //if nextElement is truthy AND element is greater than nextElement
    if ( !!nextElement && ( element > nextElement ) ) {
      //swap element's && nextElement's relative position in arr
      arr[index] = nextElement;
      arr[index+1] = element;

      //set flag equal to true;
      justSwapped = true;
    }
  })

  //if swapping ever happened, recurse bubbleSort(arr)
  if ( justSwapped ) {
    return bubbleSort(arr);
  }

  //if swapping never happened, arr is sorted!
  return arr;
}

function selectionSort(arr) {

}

function insertionSort(arr) {

}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};

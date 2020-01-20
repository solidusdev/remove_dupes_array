let sample_array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// one way
let remove_dupes_1 = arr => {

    // empty array
    let unique_array = [];

    for (let i = 0; i < arr.length; i++) {

        // if the current element does not exist in the unique array
        if (unique_array.indexOf(arr[i]) === -1 ) {

            // add that element to the unique array
            unique_array.push(arr[i]);
        }
    }

    return unique_array;
}

// another way
let remove_dupes_2 = arr => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {

            // if the adjacent element is a duplicate
            if (arr[i] === arr[j]) {

                // remove the duplicate
                arr.splice(j, 1);
                i--;
            }
        }
    }

    return arr;
}

console.log(remove_dupes_1(sample_array));  // [3, "a", 2, 4, 9]
console.log(remove_dupes_2(sample_array));  // [3, "a", 2, 4, 9]     
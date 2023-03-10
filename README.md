# Tag

Tag your "same" number

## Background

When measuring the stability of the algorithm, it is often difficult to intuitively compare whether the same elements have exchanged positions.

## Solution

Enhance the original Number by inheriting the basic wrapper type.

## Example

`npm install num-tag --save-dev`

```js
const Tag = require('num-tag')

var sortArray = function(nums) {
    Msort(nums, nums, 0, nums.length-1)
    return nums
}

var Msort = function(sr, tr1, s, t){
    let m
    let tr2 = []
    if(s === t){
        tr1[s] = sr[s]
    }
    else{
        m = Math.floor((s + t) / 2)
        Msort(sr, tr2, s, m)
        Msort(sr, tr2, m+1, t)
        Merge(tr2, tr1, s, m, t)
    }
}

var Merge = function(sr, tr, i, m, n){
    let j, k, l
    for(j = m + 1, k = i; i <= m && j <= n; k++){
        if(sr[i] < sr[j]){
            tr[k] = sr[i++]
        }else{
            tr[k] = sr[j++]
        }
    }
    if(i <= m){
        for(l = 0; l <= m-i; l++){
            tr[k+l] = sr[i+l]
        }
    }
    if(j <= n){
        for(l = 0; l <= n-j; l++){
            tr[k+l] = sr[j+l]
        }
    }
}
```

There is a Merge sort algorithm, we can observe the output under different input conditions.

```js
console.log(sortArray([1, 2, 4, 5, 1, 0]))
// [ 0, 1, 1, 2, 4, 5 ]
```

```js
console.log(sortArray([new Tag(1, 3), 2, 4, 5, new Tag(1, 9), 0]))
// [
//     0,
//     [Number (Tag): 1] { tag: 9, value: 1 },
//     [Number (Tag): 1] { tag: 3, value: 1 },
//     2,
//     4,
//     5
//
```

Obviously, using the array of Tag can more intuitively see whether the same elements are exchanged.

## End

The current output looks strange. My plan is to use the source code to rewrite Number, and this version is a temp solution. 

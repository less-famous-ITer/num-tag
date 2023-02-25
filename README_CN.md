# Tag

为相似的数字贴个标签

## 背景

在测量算法的稳定性时，通常很难直观地比较相同元素是否交换了位置。

## 解决方案

通过继承基本包装类型来增强原始Number。

## 案例

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

有一个Merge排序算法，我们可以观察不同输入条件下的输出。

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

显然，使用Tag数组可以更直观地看到是否交换了相同的元素。

## 结语

当前的输出看起来很奇怪。我的计划是依据源代码重写Number，这个版本是临时解决方案。

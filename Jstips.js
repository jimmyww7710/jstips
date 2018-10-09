
// ====array值做判斷後加入新的判斷的使用======
var years = [2010, 1988, 1990, 1955];
// 建立一個主要的運算程式
function calculate(arr, func) {
    var array = []; //最後要輸出對象

    // 用for loop跑全部資料
    for (i = 0; i < arr.length; i++) {

        array.push(func(arr[i]));
    }

    // 送回結果
    return array;

}

// function的判斷--目前年齡
function agefunc(arr) {
    return 2018 - arr;
}

// function的判斷---已成年的
function isfullage(arr) {
    return arr >= 18;
}

//輸出結果
var ages = calculate(years, agefunc);
var fullage = calculate(ages, isfullage);

console.log(ages);
console.log(fullage);
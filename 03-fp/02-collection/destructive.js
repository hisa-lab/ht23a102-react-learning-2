const arr = [4, 8, 2, 6];
const arr2 = [4, 8, 2, 6];

const arr3 = [3, 7, 4, 2];
const arr4 = [3, 7, 4, 2];

console.log(
    arr.sort((n, m) => n < m ? -1 : 1),
    arr,
    arr2.toSorted((n, m) => n < m ? -1 : 1),  //非破壊的メソッド
    arr2,

    arr3.reverse(),
    arr3,
    arr4.toReversed(),  // 非破壊的メソッド
    arr4,
);
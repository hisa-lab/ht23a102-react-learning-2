const arr = [1, 2, 3, 4, 5];
const arr2 = [5, 7, 2, 5, 1];

console.log(
    arr.reduce((n, m) => n + m),
    arr.sort((n, m) => n > m ? -1 : 1),
    arr2.sort((n, m) => n > m ? 1 : -1),
);
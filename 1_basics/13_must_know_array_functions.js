/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push(), 원본 수정
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('---------------_');
// pop(), 원본 수정
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('---------------_');
// shift(), 원본 수정
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift(), 원본 수정
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('---------------_');

// splice(), 원본 수정
console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// 원본 수정x, 변경 내용 사본 리턴
// concat(), push()와 유사
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

// // 원본 수정x, 변경 내용 사본 리턴
// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

// 2차 배열(배열속의 배열)
let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);


console.log('--------------');

let iveMembers4 = iveMembers; //순수 값이 아닌 참조값 할당
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

// JS는 값이 아닌 참조로 개체를 비교
console.log([
    ...iveMembers,
] === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순, 원본 수정
console.log(iveMembers.sort());

// 내림차순, 원본 수정
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

console.log(
  numbers.sort(function (a, b) {
    return a - b; //앞수가 큰 경우(결과값: 양수)인 앞뒤 변경
  })
);

console.log(
  numbers.sort(function (a, b) {
    return b - a; //뒷수가 큰 경우(결과값: 양수)인 앞뒤 변경
  })
);

console.log("-------------------------");
console.log("화상표 함수 표현");
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

// map()
console.log('--------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0))

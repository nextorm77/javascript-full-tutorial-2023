/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('--------------');
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

// 맨 앞에 필드 추가
const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

// 중첩 필드값은 마지막에 입력되는 값으로 변경
const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
// 출력되는 필드의 위치는 중요X
console.log(yuJin6);

// 중첩 필드값은 마지막에 입력되는 값으로 변경
const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
}
// 출력되는 필드의 위치는 중요X
console.log(yuJin7);

const numbers = [1, 3, 5];
// 추가 아이템의 위치를 맨앞, 맨뒤로 가능
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);

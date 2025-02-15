/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical 
 * environemnt within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다." => 강사가 정의한 가장 쉬운 설명
 */
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }
    // call stack상 클로저 상황 X => 하위함수 호출 후 해당 하위함수 바로 삭제
    return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber(); // 클로저 => 상위함수(getNumber) 호출 후 사라져도 하위함수(innerGetNumber) 생존

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
    // 아래 계산은 매우 오래걸린다(리소스 점유율 높음)는 가정을 했을때
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction(); // 오래 걸리는 처리를 상위함수(cacheFunction)에서 한번만 처리 후 number에 저장
console.log(runner2(10)); // 상위 함수에서 남긴 number 사용
console.log(runner2(20)); // 상위 함수에서 남긴 number 사용

function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 * JS에 private 키워드 등장 이전에 사용한 방법?
 */

// 생성자 함수(Idol): 상위 함수
// 인스턴스 메소드(this.sayNameAndYear): 하위 함수
function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 상위함수(Idol)는 이 시점에 사라졌으나 하위함수(sayNo)에서 상위함수 값 보관

console.log(yuJin.name);
console.log(yuJin._year);  // 멤버변수가 아니므로 오류발생

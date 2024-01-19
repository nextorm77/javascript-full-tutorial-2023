/**
 * Async theory
 */
// 비동기 함수(setTimeout)없이 시간지연 발생 => 동기 함수?
// function longWork() {
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// 실행순서: 동기 -> 동기2 -> 동기3
// console.log('Hello'); // 동기1
// longWork(); // 동기2
// console.log('World'); // 동기3

function longWork(){
    // 비동기 함수(setTimeout)
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

// 동기1 -> 동기2 -> 비동기1
console.log('Hello'); // 동기1
longWork(); // 비동기1
console.log('World'); // 동기2

/**
 * Callback
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

// waitAndRun2();

/**
 * Promise: 비동기 로직(함수)에 성공(resolve -> then), 실패(reject -> catch)) 로직 wrapping?
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// timeoutPromise.then((response) => {
//     console.log('---then---');
//     console.log(response);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx){
        //     resolve('성공') // .then 의 경우 반응?
        // }else{
        //     reject('에러'); // .catch 의 경우 반응?
        // }
        resolve('에러');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((response) => {
//         console.log('--- first then ---');
//         console.log(response);
//     })
//     .catch((response)=>{
//         console.log('--- first catch ---');
//         console.log(response);
//     })
//     .finally(()=>{
//         console.log('--- finally ---');
//     });

// Promise.all => 스태틱 메소드
// 서로 연관 없는 Promise 객체 동시 실행 => 4초만에 반응, 순차실행했다면 6초
// 아래의 경우 가장 느린 Promise 객체(4초만 반응) 기준으로 then 이후 실행
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((response)=>{
    console.log(response);
});

// 콘솔 결과
// [ '에러', '에러', '에러' ]

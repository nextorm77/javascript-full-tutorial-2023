/**
 * Async / Await
 */
const getPromise = (seconds)=> new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('에러');
    }, seconds * 1000)
});

// 콜백 지옥의 최종 해결 방안?
async function runner(){
    // try내의 비동기 코드(getPromise내)가 순서대로 실행 => (1초후) result1 인쇄 -> (2초후) result2 인쇄 -> (1초후) result3 인쇄 => 총 4초 소요!!
    try{
        const result1 = await getPromise(1); // 성공(resolve() 실행)의 경우 resolve 인수 리턴, 실패(reject() 실행) 의 경우 catch 블록 이동?
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }catch(e){
        console.log('---catch e---');
        console.log(e);
    }finally{
        console.log('---finally---');
    }
}

runner();

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
    try{
        const result1 = await getPromise(1); // 정상실행(resolve() 실행)의 경우 resolve 인수 리턴, 에러(reject() 실행) 의 경우 catch 블록 이동?
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

/**
 * Using function to create objects
 */
function IdolModel(name, year){
    // new.target: new 키워드를 쓴 대상 표시?
    if(!new.target){
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003); // new 키워드는 생성자 함수를 어디에다 맵핑할 지를 결정??
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003); // 개발환경에 따라 생성자 함수에 new 키워드 미사용시 에러 발생으로 다음 코드 실행 불가
console.log(yuJin2); 
// console.log(global.name);

const IdolModelArrow = (name, year)=>{
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003);

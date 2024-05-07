// 1. 함수 표현식

function funcA() {
    console.log("funcA")
}

let varA = funcA;
varA();

let varB = function () { // 익명함수
    // console.log("funcB");
    console.log("funcB");
};

varB();

function f1(){
//     return "f1 function"
    return Promise.resolve("f1 function")
}

function f2(){
    return "f2 function"
}

f1().then(()=>f2())



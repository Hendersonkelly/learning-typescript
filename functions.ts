function add(n1:number, n2:number){
    return n1 + n2
}

function printresult(num: number):void{ //void is there because there is no return statement. it is inferred but put for demo
    console.log('result:' + num)
}


function addandHandle(n1:number, n2:number, cb:(num: number)=>void){
    const result = n1 +  n2
    cb(result)
}

printresult(add(5, 12))

// let someValue:undefined



let combineValues: (a:number, b:number)=> number

combineValues= add
// combineValues= printresult
// combineValues= 5

console.log(combineValues(8,8))

addandHandle(10, 20, (result)=> {
    console.log(result)
})
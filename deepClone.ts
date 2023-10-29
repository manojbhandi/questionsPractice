type props = {
    [key:string] : any
}

function deepClone(obj:props):props{
    if(!obj || typeof obj != 'object') return obj;

    let resObj:{[key:string]:any} = {};
    for(let attr in obj){
        let type = obj[attr];
        switch(true){
            case(type instanceof Date):
                let _d = new Date();
                _d = new Date(_d.setDate(type.getDate()));
                resObj[attr] = _d;
                break;
            case(type instanceof Function):
                resObj[attr] = obj[attr];
                break;
            case(type instanceof Array ||type instanceof Object):
            
                resObj[attr] = JSON.parse(JSON.stringify(type));  
                break;   
        }
    }
    return resObj;
}
let d = new Date(Date.now());
let f = ()=>console.log("arroe function");
let arr = [1,["x",[false]]];
let o = {a:arr,f:f,date:d};
console.log(d === deepClone(d)); //false
console.log(f === deepClone(f)); //true
console.log(arr === deepClone(arr)); // false
console.log(o === deepClone(o)); //false





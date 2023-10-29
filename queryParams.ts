let queryParams:any = []
let homeValue = 123
let assetTypeValue = ["123"] ;
let brandValue = ["1"]
if (homeValue) {
    queryParams.push(`homeValue=${JSON.stringify(homeValue)}`);
}

if (assetTypeValue) {
    queryParams.push(`assetType=${JSON.stringify(assetTypeValue)}`);
}

if (brandValue) {
    queryParams.push(`brandValue=${JSON.stringify(brandValue)}`);

}
const res = queryParams.join('&');
// queryParams.push("tags="+`${JSON.stringify(res)}`) //if array
console.log(res)
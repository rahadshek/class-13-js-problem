/* 
Use the Object function.
 */

const phone = {
  brand: "Samsung",
  model: "Galaxy A55",
  storage: "128GB",
  price: 45000
};

function object (obj) {
    // Out put keys
    for (let pKeys in obj) {
        // console.log(pKeys,);
        console.log(pKeys);
    };   

console.log('========================');
  // Out put value
    for (let pKeys in obj) {
        // console.log(pKeys,);
        console.log(obj[pKeys]);
    };

    console.log ('====================');

    // OutPut key and Value

        for (let pKeys in obj) {
        // console.log(pKeys,);
        console.log(pKeys, ":", obj[pKeys]);
    };

     console.log ('====================');
    // Object keys count 

    // let objKeysCount = Object.keys(obj).length;
    // console.log(objKeysCount);

    let objKeys = Object.keys (obj);
    console.log(objKeys);

    let objKeysCount = objKeys.length;
    console.log("total key is  =>",objKeysCount);

    console.log ('====================');
    // has check name and out put false
    let checkName = obj.hasOwnProperty("name")
    console.log("Has name is =>",checkName);

    // check name property
    let checkBrand= obj.hasOwnProperty("brand")
    console.log("Has brand is =>",checkBrand);


};
object(phone);
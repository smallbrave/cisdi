//编写一个对参数进行加法运算的CISDI_JS函数
// 函数使用方法：
// CISDI_JS (0).toString() //输出0
// CISDI_JS (0)(1).toString() //输出1 
// CISDI_JS (0)(1)(2).toString() //输出3
// let v = CISDI_JS (0)(1) ; v(2).toString() //输出3

//调用CISDI_JS()会返回一个函数
//调用.toString()时会进行求和运算
function CISDI_JS() {
    //记录下传入的数据，方便后续求和使用
    var args = [...arguments];
    var _args = [];
    var fn = function() {
            _args = [...arguments];
            //每次调用时，其实质还是调用最初的元素
            return CISDI_JS(...args, ..._args);
        }
        //为函数添加一个附加属性，当调用该属性时完成求和
    fn.toString = function() {
        return [...args, ..._args].reduce((prev, curr) => prev + curr);
    }

    //每次返回的是一个函数
    return fn;
}
let v = CISDI_JS(0)(1);
console.log(v(2).toString());
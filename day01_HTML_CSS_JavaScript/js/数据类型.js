//两类：原始类型和引用类型

//1.原始类型
//number类型
let n1 = 10;
let n2 = -13.14;
console.log(n1,typeof n1);
console.log(n2,typeof n2);

//string类型: 单双引都可
let s1 = "我爱刘浩存"
let s2 = '刘浩存爱我'
console.log(s1,typeof s1);
console.log(s2,typeof s2);

//boolean类型
let b1 = true;
let b2 = false;
console.log(b1,typeof b1);
console.log(b2,typeof b2);

//null类型
let m1 = null
console.log(m1,typeof m1); //值: null  类型: object

//undefined类型: 当声明的变量未初始化时，该变量的默认值是undefined
let u1 = undefined;
console.log(u1,typeof u1);


//2.引用类型
let d1 = new Date();
console.log(d1);//获取日期
console.log(d1.getFullYear());//获取年
console.log(d1.getMonth());//获取月
console.log(d1.getDate());//获取日
console.log(d1.getDay());//获取一周的第几天

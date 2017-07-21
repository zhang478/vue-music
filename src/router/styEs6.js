/*

symbol  原始数据类型   独一无

*/

/*
const s = new Set();
[2,3,43,22,2,4,3].forEach(x => s.add(x));

// console.dir(s.size);
s.clear()
// console.log(s.size)


let map = new Map();
map.set(true,22);
let a = map.get(true);
console.log(a)

*/

const PI = 3.1415;

var person = {name:'zzzzz'};
var proxy = new Proxy(person,{
	get:function(target,property){
		if(property in target){
			return target[property];
		}else{
			throw new ReferenceError('error');
		}
	}
});

console.log(proxy.name);					
// console.log(proxy.age);

// proxy shijishang chongzai le dian yunsuanfu;



//target 参数表示要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为	。
// var proxy = new Proxy(target,handler);

var handler = {
	get:function(target,name){
		if(name === 'prototype'){
			return Object.prototype;
		}
		return 'hehe'+name;
	},

	apply:function(target,thisBinding,args){
		return args[0];
	},

	construct:function(target,args){
		return {value:args[1]};
	}
};

var fproxy = new Proxy(function(x,y){
	return x+y;
},handler);

let a = fproxy(1,2);
console.log(a);







//
//console.log(Object.getOwnPropertyDescriptors(person))
//
//Object.preventExtensions(person)
//
//person.age = 40
//
//Object.seal(person)
//person.age = 40
//delete person.age

//Object.freeze(person)
//console.log(Object.getOwnPropertyDescriptors(person))


//let person = {
//age: 25,
//name: "Monica",
////education_year:2015
//}
//
//let personTwo = {
//name: "Monica",
//age: 25,
////education_year:2015
//}    
//
//
//
//function mycomObj(person, personTwo){
//  let a = 0
//for(key in person){
//    if(person[key]===personTwo[key]){
//           a++
//    }
//}
//    
//    
//   if(a===Object.keys(person).length && Object.keys(person).length === Object.keys(personTwo).length){
//     return true
//   }else{
//     return false
//
//   }  
//}
//
//
//
//
//
//function comObj(person, personTwo){
//    if(Object.keys(person).length !==Object.keys(personTwo).length){
//        return false;
//    }else{
//        for(key in person){
//    if(person[key] !==personTwo[key]){
//          return false
//    }
//}
//    }
//    return true
//}
//console.log(mycomObj(person,personTwo))
//
//console.log(comObj(person,personTwo))




/*

function useThis(){
    console.log(this)              /////
}







let person = {
age: 25,
name: "Monica",
showAge: function(){
    console.log(this.age)
},
showName: function(){
    console.log(this.name)
},
    showItSalfe(){
        console.log(this)
    },
    useThis2: useThis             /////
}


let This = person.useThis2;        /////

This()

//person.showItSalfe();
person.useThis2();

let personTwo = {
name: "Monica",
age: 25,
This11: This,                   ////////
}

personTwo.This11();

*/




//function useA(){
//    console.log(this.a)
//}
//
//
//let obj = {
//    a: 5,
//    showA: useA,
//}
//
//obj.showA()


//let obj = {
//    a: 10,
//    b: 5,
//}
//
//
//
//function Sum (){
//    console.log(this.a + this.b)
//}
//
//
//Sum.call(obj)























//a = 12
//let obj = {
//    a: 11,
//    showA: function(){
//    console.log(this.a)
//}
//}
//
//
//
//let b = obj.showA
//
//
//b()



//function f(a,b){
//    console.log(this.a+this.b)
//}
//
//
////f.call({a:12, b:12},7,8)
//
//
//
//setTimeout(f.bind({a:1, b:3}),2000)










//function wrapper(){
//    let f = () => {
//    console.log(arguments)
//};
//    f()
//}
//
//wrapper(1,3,3)
//console.log(...[1,3,4])
//
//
//
//
//
//
//let [a,b] = [1,2]
//
//console.log(a,b)






//let person = {
//    name: "Monica",
//    age:25,
//    count:"Ukraine"
//}
//
//let {name,...rst}= person
//
//console.log(name,rst)










//let arr1 = [1,2,3]
//let arr2 = [4,5,6]
//let arr3 = [...arr1, ...arr2]
//
//
//let obj = {name:"Lizi",}
//let obj2 = {age:30,}
//let obj3 = {
//...obj,
//    ...obj2
//}
//
//
//
//
//console.log(arr3)
//console.log(obj3)


//let arr = [1,3,4]
//arr.a="a"
////arr.length=2
//console.log(Object.getOwnPropertyDescriptors(arr))
//
//console.log(arr)










//console.log(Array.from('foo'));
//
//console.log(Array.from([1, 2, 3], x => x + x))
//
//
//let arr = [4,8]
////
//
//
//
//
//
//
//console.log(Array.from(arr, x => x * x) )
//
//
//
//
//let obj = {
//name:"monica",
//    1: 23,
//    4: 12,
//    length:5
//}
//
//console.log(Array.from(obj))

//function MyArrOf()

//console.log(...1,2,3)


//let a = 7

//
//function MyArrOf(...arr){
//    
//    console.log(arr)
//}
//
//
//
//
//
//
//MyArrOf(5,3,3)






//let array1 = [1,2,3];
//let array2 = [4,5,6];
//
//let arr3 = []
//
//function concat(...arr){
//    for(let i = 0; i<arguments.length; i++){
//        for(let j=0; j<arguments[i].length; j++){
//           arr3.push(arguments[i][j]) 
//           
//        }
//        
//    }
//    console.log(arr3)
//}
//
//
//
//concat(array1,array2)













//let array1 = [1,2,3];
//let array2 = [4,5,6];
//let array3 = [7,8,9];
//
//
//function concat(...arr){
//    for(let i = 1; i<arguments.length; i++){
//        for(let j=0; j<arguments[i].length; j++){
//           arguments[0].push(arguments[i][j]) 
//           
//        }
//        
//    }
//    console.log(arguments[0])
//}
//
//
//
//concat(array1,array2,array3)






//let array1 = [1,3,5]
//let array2 = [2,4,6]
//
//
//
//
//
//
//console.log(array1.every(elem => elem % 2))







//let person = [{age:7},{age:8},{age:10},{age:20},{age:19},];
//
//let result = person.filter(word => word.age > 18);
//
//
//console.log(result)





//let person = [{age:7},{age:8},{age:10},{age:20},{age:19},];


//let arr = ["1","22","333","4444","55555"];
//
//
//console.log(arr.find(element => element.length === 4))
//
//
//
//

//let arr1 = [1,2,3,4]
//
//function CallBack(arr){
//    for(key in arr){
//        console.log(arr[key])
//    }
//}
//
//function myForEach(arr, CallBack){
//    CallBack(arr)
//}
//
//myForEach(arr1,CallBack)






//let arr = [1,2,3,4]
//
//
//
//
//function myForEach(arr, CallBack){
//    for(let i = 0; i < arr.length; i++){
//        CallBack(arr[i], i)
//    }
//}
//
//
//myForEach(arr, (element, index) => console.log(element, index))






//let arr = [1,2,3]


//function Myincludes(arr){
//    debugger
//    for(let i=0; i <= Math.max(...arr); i++){
//        if(arr.includes(i)===true){
//            arr1.push(i)
//        }
//        }
//      console.log(arr1)
//    }
//  
//
//
//Myincludes(arr)

//function rm(arr){
//    let arr1 = []
//    for(let i=0; i < arr.length; i++){
//    if(!arr1.includes(arr[i])){
//      arr1.push(arr[i])
//    }
//    }
//    console.log(arr1)
//}
//
//rm(arr)

//console.log(arr.map(item => item*2))

//function dellall(arr){
//    while(arr.length){
//        console.log(arr.pop())
//}
//}
//
//dellall(arr)
//console.log(arr)
//console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, ))









//let str = "3wecwecwecwc rofkwjkfi jw jfiwojfiwojf"
//let arr = str.split("")


//let a
//arr.reduce((obj, item)=>{
//    a = obj
//    obj[item]=(obj[item] || 0)+1
//    return obj
//}, {})
//
//for (key in a){
//    for(let i = 0; i<1;  i++){
//        console.log(`item ${key} = ${a[key]}`)
//        
//    }
//}







//let arr = [1,20,3,4,50,6,5,3]
//console.log(arr.shift())
//console.log(arr.reverse())


//console.log(arr.sort((a,b)=> a-b))
//console.log(arr.sort((a,b)=> b-a))



















//
//function executeCallback(){
//    console.log("1")
//}
//
//
//function ivan(){
//    console.log(2)
//}
//
//function f(callback){
//    callback(5)
//}
////
////
////f(ivan)
//
//
//
//
//
//
//

//}
//
//
//
//f(c)



//function compareValue(a){
//    return a > 10
//}
//
////
////
//
//let arr = [12,33,8]
//
////console.log(arr.every(compareValue))
//
//
//
//
//
//function myEvery(callback, arr){
//    for(let i=0; i<arr.length; i++){
//        if(!callback(arr[i])){
//           return false;
//        }
//    }
//    return true
//}
//
//
//
//
//function MySome(callback, arr){
//     for(let i=0; i<arr.length; i++){
//        if(callback(arr[i])){
//           return true;
//        }
//    }
//    return false
//    
//}
//myEvery(compareValue,arr)
//MySome(compareValue, arr)
//console.log(MySome(compareValue, arr))






























//let obj={
//    name:"Andriy",
//    age:30,
//
//}
//
//person.prototype.showName = function (){
//        console.log(this.name)
//}
//
//
////obj.showName()
//console.log(Object.getPrototypeOf(obj));///===Object.prototype
////console.log(obj)
//
//function person(name) {
//    this.name = name
//}
//let per = new person('Andriy')
//let per1 = new person('1111')
//per.showName()
//per1.showName()
//console.log(per1)
//console.log(per)








//function Mymath(a,b){
//    this.a = a;
//    this.b = b
//}
//
//let AB = new Mymath(10,5)
//
//Mymath.prototype.plus = function (){
//    console.log(this.a+this.b)
//}
//
//Mymath.prototype.minus = function (){
//    console.log(this.a-this.b)
//}
//
//Mymath.prototype.del = function (){
//    console.log(this.a/this.b)
//}
//
//Mymath.prototype.mul = function (){
//    console.log(this.a*this.b)
//}
//
//
//
//console.log(AB)
//
//
//
//AB.plus()
//AB.minus()
//AB.del()
//AB.mul()


//function Student(name, age, uni){
//    this.name = name;
//    this.age = age;
//    this.uni = uni;
//}
//
//Student.prototype.ShowName = function (){
//    console.log(this.name)
//}
//
//Student.prototype.ShowAge = function (){
//    console.log(this.age)
//}
//
//Student.prototype.ShowUni = function (){
//    console.log(this.uni)
//}
//
//let student = new Student("Andrey", 30, "KPI")
//
//student.ShowName()
//student.ShowAge()
//student.ShowUni()
//
//console.log(Object.getPrototypeOf(student))
//console.log(Student.prototype)
//console.log(Object.getPrototypeOf(Student.prototype))
//
//console.log(Object.getPrototypeOf(Object.prototype))
//
//


//let obj={a:2};
//
//let obj2 = Object.create(obj)
//
//console.log(obj2.a)
//
//console.log(Object.getPrototypeOf(obj2))




//function Person(name,age){
//    this.name=name;
//    this.age=age;
//}
//
//
//Person.prototype.ShowName = function (){
//    console.log(this.name)
//}
//
//Person.prototype.ShowAge = function (){
//    console.log(this.age)
//}
//
//let person = new Person("Andriy", "30")
//
//person.ShowAge()
//person.ShowName()
//
//
//function Student(name,age,uni){
//    Person.apply(this, arguments)
//    this.uni=uni;
//}
//
//Student.prototype = Object.create(Person.prototype)
//
//let student1=new Student("Petr", "26", "KPI")
//
//
//student1.ShowName()
//student1.ShowAge()
//
//
//console.log(student1)





//let button = document.getElementById('button')
//
//let div = document.getElementsByClassName("elements")
//
//let div1 = document.getElementsByTagName("elements")
//
//let div2 = document.getElementsByName("inputOne")
//
//
//console.log(button)
//console.log(div)
//console.log(div1)
//console.log(div2)
//
//
//
//let text = document.querySelectorAll(".class1")
//
//console.log(text)



//for(let i = 1; i<=5;i++){
//    console.log(document.getElementById(i))
//}



//console.log(document.getElementById(1).children)
//
//console.log(document.getElementById("parent").childNodes)
//
//console.log(document.getElementById("child").nextSibling)
//console.log(document.getElementById("child").previousSibling)
//console.log(document.getElementById("child").previousElementSibling)
//            
//console.log(document.getElementById("child").nextElementSibling)


       



//let newElement = document.createElement("div")
//document.body.appendChild(newElement)
//
//newElement.innerText="Js"
//newElement.className="class1"












//let button = document.getElementById("addElement")
//
//button.addEventListener("click", add )
//
//let rembutton = document.getElementById("remElement")
//
//rembutton.addEventListener("click", rem )
//
//let remElement = document.getElementsByClassName("class1")
//function rem(){
//   
//   if(remElement.length!==0){
//   document.body.removeChild(remElement[remElement.length - 1])
//   }
//}
//
//function add(){
//   let newElement = document.createElement("div") 
//    if(document.getElementsByClassName("class1").length<10){
//        let i = remElement.length
//    document.body.appendChild(newElement)
//    
//    newElement.innerText=i
//    newElement.className="class1"
//        i++
//    }
//}


































//document.addEventListener('click', )
//

//document.addEventListener('contextmenu', e => {
// console.log(e)
//});
//
//document.addEventListener('dblclick', e => {
// console.log(e)
//});
//
//
//
//
//area.addEventListener('mouseenter', e=> {
//    console.log("hello");
//
//})
//area.addEventListener('mouseleave', e=> {
//    console.log("by");
//})
//
//area.addEventListener('mousemove', e=> {
//    console.log("move");
//})
//
//area.addEventListener('mouseover', e=> {
//    console.log("over");
//})
//
////area.className = "class1";
//
//document.addEventListener("wheel", ()=>{
//    console.log("wheel is ")
//})


//
//let left = 0
//let top1 = 0
//let area =document.getElementById("area")
//document.addEventListener('keydown', e=>{
//    if(e.key === "ArrowUp"){
//        console.log("Up");
//         top += 50;
//        area.style.top = top + "px";
//    }else if(e.key === "ArrowDown"){
//        console.log("Down")
//        down += 50;
//        area.style.down = down + "px";
//    } else if(e.key === "ArrowLeft"){
//        console.log("Left");
//         left += 50;
//        area.style.left = left + "px";
//    } else if(e.key === "ArrowRight"){
//        console.log("Right");
//         right += 50;
//        area.style.right = right + "px";
//    }
//  
//})


//document.addEventListener("keydown", e=>{
//if(e.key === "ArrowUp"){ 
//   top1 -=4
//area.style.top = top1 + "px"
//    console.log("Up")
//    
//}else if(e.key === "ArrowDown"){
//      top1 +=4
//area.style.top = top1 + "px"
//    console.log("Down")
//    
//}else if(e.key === "ArrowLeft"){
//left -=4
//area.style.left = left + "px"
//    console.log("Left")
//    
//}else if(e.key === "ArrowRight"){
//    left +=4
//area.style.left = left + "px"
//    console.log("Right")
//}
//})
//
//area.addEventListener('click', e => {
// console.log("area")})
//
//





//let parents = document.getElementById("parents")
//let child = document.getElementById("child")
//
//parents.addEventListener('click', e => {
////    e.stopPropagation();
// console.log("parent")
//}, false);
//child.addEventListener('click', e => {
////    e.stopPropagation();
// console.log("child")
//}, false);





//let pr = new Promise((resolve,reject)=>{
////    setTimeout(()=> {
//////        reject("error")
////        resolve("Hello")
////    }, 500)
//})
//
//
//let pr2 = Promise.resolve(12)
//
//pr.then((item)=>{
//    console.log(item)
//})
//.catch((itemError)=>{
//    console.log("code broken")
//})
//.finally(()=>{
//    console.log("i'm finally")
//})
//
//setTimeout(()=>{
//    console.log("setTimeout")
//})
//
//pr2.then((item)=>{
//    console.log(item)
//})
//
//console.log("-----------------")
//
//










//let i = "Hello"
//let b = 0
//
//
//let button = document.getElementById("addElement")
//
//button.addEventListener("click", add )
//
//let rembutton = document.getElementById("remElement")
//
//rembutton.addEventListener("click", rem )
//
//let remElement = document.getElementsByClassName("class1")
//function rem(){
//   
//   if(remElement.length!==0){
//   document.body.removeChild(remElement[remElement.length - 1])
//       b--
//   }
//}
//function add(){
//    fetch('https://jsonplaceholder.typicode.com/posts')
//  .then((response) => {
//    return response.json();
//  })
//  .then((data) => {
////   return post = data.title;
//    console.log(data[b].title)
//        i = data[b].title
//  });
//    
//   let newElement = document.createElement("div") 
//    if(document.getElementsByClassName("class1").length<10){
//        
//    document.body.appendChild(newElement)
//    
//    newElement.innerText=i
//        
//    newElement.className="class1"
//        b++
//    
//    }
//    
//    
//}
//
//add()
//i = 0




















//console.log(post)

//fetch('https://jsonplaceholder.typicode.com/posts')
//  .then((response) => {
//    return response.json();
//  })
//  .then((data) => {
//   return i = data[b].title;
//  });


//let div = document.createElement('div');
//div.className = "alert";
//div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//
//document.body.append(div)










//let pr = new Promise((resolve,reject)=>{
//    setTimeout(()=> {
////        reject("error")
//        resolve({})
//    }, 100)
//})
//
//
//
//pr.then((response)=>{
//    console.log(response)
//    return response
//}).then((response)=>{
//    console.log(response)
//})



//let imitPromise = (url)=>{
////    return new Promise((resolve, reject)=>{
////        setTimeout(()=>{
////            resolve(value)
////        },delay)
////    })
//    return fetch(url)
//}
//
//imitPromise("https://jsonplaceholder.typicode.com/posts").then((respons)=>{
//    return respons.json();
//}).then((response2)=>{
//    console.log(response2)
//
//}).catch((error)=>{
//    throw new Error(error)
//})
//
//
//
//
//
//let pr1 = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//       reject(100)
//    }, 100)
//})
//let pr2 = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        resolve(200)
//    }, 200)
//})
//let pr3 = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        resolve(300)
//    }, 300)
//})
//
//
////Promise.all([pr1,pr2,pr3]).then((respons)=>{
////    console.log(respons)
////})
////
////
////Promise.race([pr1,pr2,pr3]).then((respons)=>{
////    console.log(respons)
////})
//
//
//pr2.then(()=>{
//    
//}).catch((error)=>{
//    throw new Error(error)
//})
//

//let p = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        resolve(1)
//    }, 100)
//})
//
//
//async function f1(){
//    try {
//    let res1 = await fetch("https://jsonplaceholder.typicode.com/posts") 
//    let completResponce = await res1.json();
//    console.log(completResponce)
//    } catch(err){
//        console.log(err)
//    } finally{
//        console.log("finally")
//    }
//}
//
//async function f2(){
//   return 1 
//}
//
//f1()
//
//f2().then((resolve)=>console.log(resolve))




























//function CallBack(a,b){
//    console.log(a+b)
//    
//}
//
//function AB(CallBack,a,b){
//    CallBack(a,b)
//}
//
//AB(CallBack,7,2)










//
//let calculate = (a,b,symbol) => {
//    return new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//    if ("*"===symbol){
//    resolve(a * b)
//}else if ("/"===symbol){
//    if(b === 0){
//        reject("Error")
//    }
//    resolve(a / b)
//}else if ("+"===symbol){
//    resolve(a + b)
//}else if ("-"===symbol){
//    resolve(a - b)
//}
//},100)
//})
//};

//calculate(31,2,"/").then((res)=>{
//    console.log(res)
//})



//async function f(a,b,c) {
//  let result = await calculate(a,b,c);
//    console.log(result)
//}
//
//f(1,3,"+");


//calculate(3,0,"/").catch((error)=>{
//   throw new Error(error)
//})

//async function f(a,b,symbol) {
//
//  let promise = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//    if ("*"===symbol){
//    resolve(a * b)
//}else if ("/"===symbol){
//    if(b === 0){
//        reject("Error")
//    }
//    resolve(a / b)
//}else if ("+"===symbol){
//    resolve(a + b)
//}else if ("-"===symbol){
//    resolve(a - b)
//}
//},100)
//  });
//
//  let result = await promise; 
//
//  console.log(result) 
//}
//
//f(6,3,"/");
































        //this указывает на обэкт который будет создан 
        //this 4 способа динамичного связывание(связывание на этапе выполниние)



//function f(a,b){
//    console.log(this.a+a+b)
//}
//f()                   //Связывание по умолчанию(связывние с виндов)



//let obj={
//    a: 3,
//    fn: f
//}
//obj.fn()              //Неявное связывние (перетдача функыи как проперти обэкта)


//let b = obj.fn
//b()                     //Потеря контекста

//let arr = [12,4]

//f.call({a:4},12,-8)        //Явное связывание   
//f.apply({a:4}, arr)        //Явное связывание   


                                    //через new
//function Mybind(fn,ctx, ...args){           
//    return ()=>{
//        fn.apply(ctx, args)
//    }
//}

//Function.prototype.MyBind = ()=>{
//return ()=>{
//    this.apply(ctx, args);
//}
//}





//let pr = new Promise((resolve,reject)=>{            //Инструмент для асинхроности
//    setTimeout(()=> {
////        reject("error")
//        resolve("Hello")
//    }, 500)
//})


//pr.then((respons)=>{            
//    console.log(respons)
//})                     
//pr.catch((respons)=>{
//    console.log(respons)
//})



//async function f1(){                                                  
//    try {
//    let res1 = await fetch("https://jsonplaceholder.typicode.com/posts")              //передать fn
//    let completResponce = await res1.json();
//    console.log(completResponce)
//    } catch(err){
//        console.log(err)                                                              //передать err
//    } finally{
//        console.log("finally")
//    }
//}





//async function f2(){                      //можно
//   return 1 
//}

//f2().then(()=>{})


//arr           //итирированый
//Obj           //ne итирированый












let d = fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    return response.json();
  })
  
let b =0


d.then((response) => {
    return b=response
  })

setTimeout





let mp = new Map()


let objOne ={
    b:76
}
let objTwo ={
    c:12
}
let obj = {
    a: 12
};
//obj[objOne]=12
//obj[objTwo]=13
//
//
//mp.forEach((item)=>{
//    console.log(item)
//})
//
//
//mp.set(objOne, 10)
//mp.set(objTwo, 32)



//console.log(obj);
//console.log(mp);
//console.log(mp.get(objOne));
//console.log(mp.get(objTwo));


//
//mp.delete(objOne)
//console.log(mp.get(objOne));
//console.log(mp.get(objTwo));
//
//
//

//console.log(Object.getOwnProperty(objOne))

//console.log(Object.getOwnPropertyDescriptors(objOne))








//function MyarrFunction(arr){
//    let arr1 = []
//    for(let i = 0; i<=arr.length; i++ ){
//        let a = arr.indexOf[i]
//        for(let j = 0; j<=arr.length; j++){
//           if(a===arr[j]){
//               arr1.push(arr[i])
//           } 
//        }
//    }
//    console.log(arr1)
//}

//getUnique = function (arr) {
//    arr1 = [];
//    for (let i = 0;i < arr.length; i++) {
//      a = arr[i];
//      if (!~arr1.indexOf(a)) {
//        arr1.push(a);
//      }
//    }
////    return unique;
//    console.log(arr1)
//  };
//
//getUnique(arr)


let arr = [1,2,3,3,4,5,6,6,7,7,7,8]

//function a(arr){
////    let arr1=[]
//    let aaa = arr.filter(arr => arr!=arr )
//    console.log(aaa)
//}
//
//a(arr)
//function MyfunctionArr(arr) {
//  let result = [];
//  for (let str of arr) {
//    if (!result.includes(str)) {
//      result.push(str);
//    }
//  }
//console.log(result)
//}
//MyfunctionArr(arr)
let objArr = {}
//Object.assign(objArr, arr);
//console.log(objArr)

//function  ArrFunction(arr){
//    for(let i =0; i<arr.length; i++){
//        console.log(objArr[arr[i]])
//    }
//}

//ArrFunction(arr)




arr.forEach((item)=>{
    if(obj[item]){
        obj[item] += 1
    } else (
        obj[item] = 1
    )
})

//console.log(obj)

let result = [];

function arrrr(obj){
    for(let i = 0; i<10; i++){
       if(obj[i]===1){
           console.log(i)
       }
    }
    console.log(result)
}

arrrr(obj)

//console.log(obj)









//console.log(arr.filter((item)=>
//    arr.indexOf(item)===arr.lastIndexOf(item)
//))




















































































































































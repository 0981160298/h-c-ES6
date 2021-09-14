// function foo() {
//     for (var i = 0; i < 4; i++) {
//         console.log("easy learning");
//     }
//     console.log(i);
// }
// foo();




// rest (trả về dạng mảng)

// function hihi([a,b,...rest]){
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// } 
// hihi([1,2,3,4,45,3]);



// Tagged template literals

// function hightlight([first,...strings],...valuses){
//     return valuses.reduce(
//         (acc,curr)=> [...acc,`<span> ${curr} </span>`,strings.shift()],
//         [first]
//         )
//         .join('');
// }
// var brand ='cuoi cung';
// var course ='ca mau';
// const html= hightlight`nghe noi ${course} xa lam o ${brand} ban do ca mau!`;
// console.log(html);

 



// dùng reduce tìm min max

// const arr =['1','2','5','6'];
// const minList= arr.reduce((a,b) =>{
//         return a > b
//         ? a 
//         : b; 
// },arr[0]);
// console.log(minList);


//tìm số chắn lớn nhất

// const arr=['9','2','4','3'];
// const sochanmax=arr.filter(a=>a%2==0).reduce((a,b)=>{
//      return a >b
//         ?a
//         :b;
// },arr[arr.find((a)=>a%2==0)]);
// console.log(sochanmax);



 //viết hàm chuyển đổi mảng thành object và ngược lại sử dụng reduce ()

//  const itemMap={
//      key1: 'Superman',
//      key2: 'wonder Woman',
//      key3: 'Spider man'
//  };
//  const itemList=[
//      {id: 'key1', value: 'Superman'}
//      {id: 'key2', value: 'wonder Woman'}
//      {id: 'key1', value: 'Spider man'}
//  ]

//giải chuyển đổi từ object sang mảng

// const itemMap={
//     key1: 'Superman',
//     key2: 'wonder Woman',
//     key3: 'Spider man'
// };
// const object = (itemMap) => {
//     return Object.keys(itemMap).reduce((itemList, key) => {
//         itemList.push({
//            id: key,
//            value: itemMap[key]
//         });
//        return itemList;
//     },[]);
// };
// console.log(object(itemMap));

// giải chuyển đổi từ mảng sang object

// const itemList=[
//     {id: 'key1', value: 'Superman'},
//     {id: 'key2', value: 'wonder Woman'},
//     {id: 'key3', value: 'Spider man'}
// ]
// const object= (itemList)=>{
//     return itemList.reduce((a,b)=>{
//         a[b.id]=b.value;
//         return a;
//     },{})
// }
// console.log(object(itemList));



//destructuring

//vd đơn giản
// var array=['hihi','haha','huhu'];
// var [a,...rest]=array;
// console.log(a);
// console.log(rest);


// // vd 2
// var course={
//     name : 'javascript',
//     price: '1000',
//     image: 'image-address',
//     children:{
//         name:'ReactJS'
//     },
//     // description:'description value'

// };
//  // nếu trùng name thì phải đặt tên khác  
//  // nếu description có thì in ra mà k có thì lấy 'hihi'
// var { name: parentName,description='hihi',price, children:{name:childrenName }}=course;
// console.log(parentName,price);
// console.log(description);
// console.log(childrenName);


// classes trong es6

// class course{
//     constructor (name,price){
//         this.name=name;
//         this.price=price;
//         this.getName = function(){
//             return this.name;
//         }
//     }
// }
// const phpCourse= new course('php', 1000);
// const jsCourse= new course('javascript', 1200);

// console.log(phpCourse);
// console.log(jsCourse);


//    node javascript/variable.js
// console.log("thành công");
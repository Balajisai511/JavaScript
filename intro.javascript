

console.log("external javascript")

// how to declare variable
// let,var,const


// !let keyword
let sname="balaji sai"
console.log(sname)

let age=22
console.log(age)

age=17
console.log(age)

//let sname
// in let keyword  re-declaration is not possible.

//! var keyword

var isMarried

isMarried=false

console.log(isMarried)

var hasChild=true
console.log(hasChild)

//by using var keyword we can re-declare any variable.
 
var isMarried=true

console.log(isMarried)

// ! const


//when we want to take constant value that we dont want to change we have to use const keyword.

const aadharNo=123456789012
console.log(aadharNo)

// aadharNo=987654321234
//console.log(aadharNo)

// ! DataTypes

// 1.Primitive    2.Non-Primitive

//! Primitive dataTypes are
 

  // 1.number

  let phno=9876543210
  console.log(phno)

  //todo: typeof operator is used to know the datatype of the variablel.
  
  console.log(typeof phno)


  let salary=25000.50
  console.log(salary)
  console.log(typeof salary)

  // ! 2.boolean
  
  let isstudent=false
  console.log(isstudent)
  console.log(typeof isstudent)


  // ! 3.string

  let city="chennai"
  let state="tamilnadu"
  let country="India"

  console.log(typeof city)
  console.log(typeof state)
  console.log(typeof country)

  // ! 4.undefined

  //variable declared but not intialized is  called undefined.
  // typeof undefined is undefined.

  let courseName

  console.log(courseName)
  console.log(typeof courseName)

  // ! 6.bigint
   
  let largeNum=2n
  console.log(largeNum)
  console.log(typeof largeNum)

  //  ! 2.Non Primitive datatypes

  // array,function,object

  // ! 1.array

  let arr=[20,"html",true,undefined]
  console.log(arr)

  // ! 2.function

  function add()
  {
    console.log("i am add function")
  }
  add()

  // ! 3.object 
  
  let emp={
    ename:"balaji",
    eid:11,
    city:"chennai",
    sal:200000
  }
  console.log(emp)

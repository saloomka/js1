
/*
let  user = {

    firstname:'giorgi',  
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
    
};
//1
    console.log(user.studentstatus);
//2
    let elements=Object.entries(user);
    console.log(elements);
    console.log(elements[0])

    let kElements=Object.keys(user);
    console.log(kElements);
    console.log(kElements[0]);

    let vElements=Object.values(user);
    console.log(vElements);
    console.log(vElements[0]);

*/
    
//3
/*
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let i=0; i< numbers.length; i++){
   if(numbers[i]>5){
    console.log(numbers[i]);
   }
}
*/ 
/* 

//4
var user = {
	name: "giorgi",
	age:  20,
	studentstatus: "active"
}
if(user.age<18 && user.studentstatus == "active" ){
    console.log("Hello")
}else if(user.name == "levan"){
    console.log("hello Giorgi")
}else if(user.studentstatus == "active" || user.age < 25){
    console.log("hello word")
}else{
    console.log("error");
};

*/

/*
//5
let array = [ "watermelon", "pear", 10, 45, 50, "apple", "ananas" ] ;

for(let item of array){
    if(typeof item == "string"){
        console.log(item)
    }
}


*/

/*
//6
let array = [32, 10, "hello", null, "hello2", 50 ];
for(let item of array){
    if(item % 5 == 0 && typeof item == "Number"){
        console.log(item);
    }
}
*/
/*
//7

let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];

for(let i=0; i< array.length; i++){
    const newArr = array[i];
   for(let j=0; j< newArr.length; j++){
    if(newArr[j]>0){
        console.log(newArr[j]);
    }
}
}

*/

//8

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

for(let i=0; i<array.length; i++){

    if( i % 2 == 1 ){
       console.log(i);
    }//if( i % 2== 0)//ლუწი. მაინტერესებს, როგორ შევძლებთ ორივე შემთვევის ერთი ფუნქციით გამოსახვას.

}




/*
//ვეცადე მეპით შემესრულებინა, მაგრამ არ გამომივიდა
for(let i=0; i<array.length; i++){
    const odd=array.map(function(index,value){
        for(let j=0; j< odd.length; j ++){
        if( j % 2 == 1){
            console.log(odd);
        }let even=array.map(function(index,value){
            for(let z=0; z<even.length; z++){
                if(z%2==0){
                    console.log(even);
                }
            }
        })
    }
 })
}
*/
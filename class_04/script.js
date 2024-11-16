//length count hoy 1 theke
//index count hoy 0 theke
// Array 3 types ->1D,2D,3D

//Normal array
// alert(ok);
let i =[1,3,5];
console.log(i[0]);//1
console.log(i[1]);//3
console.log(i[2]);//5
console.log(i[3]);//output Undefined dekhabe

console.log(i);

let a=[1,2,2,4]

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

let  arr=[2,'hello',4.7,true]//1D

for(let i=0;i<arr.length;i++){
    console.log(i +'--->'+arr[i]);
}

let twoD=[[1,2],[3,6]]//2D
for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){

        console.log(twoD[i][j])
    }
}

//Array te for of loop use hy js e

let numbers=[1,2,2,4]

for(let value of numbers){ //without condition
    console.log(value);
}

//object

let bus={
    name :"BMW",
    color : "red",
}
for(let key in bus){//bus hocche value bmw red
    console.log(key +" :" +bus[key])//key hocche property name,color

}

//only name print
let car={
    name :"lovely",
    color : "red",
}


let buss={
    name :"love",
    color : "blue",
}
for(let key in car){
    if(key === "name")
    console.log(key +" :" +bus[key])

}

//array r moddhe object print

let cars = [
    { name: "Lovely", color: "Red" },
    { name: "Speedy", color: "Blue" },
    { name: "Flash", color: "Green" }
];

for (let car of cars) {
    for (let key in car) {
        if (key === "name" || key === "color") {
            console.log(key + ": " + car[key]);
        }
    }
    console.log("------------"); // Separate objects for clarity
}

var proverka=0;
var a = 0;
alert("hello , it is fine");
for(var i=10; i<=20; i++){
    console.log(i);
}
console.log("квадраты чисел:")
for(var i=10; i<=20; i++){
    console.log(i*i);
}
console.log("сумма чисел:")

for(var i=10; i<=20; i++){
    a=i+a;
    console.log(a);
}
a=0;
function buttonclick(){
var x1=parseInt(document.getElementById('x1').value);
var x2=parseInt(document.getElementById('x2').value);



document.getElementById("result").value = "";

if(Number.isNaN(x1) || Number.isNaN(x2)){
    alert("ток цифири или введите значение x1 и x2");
}

else{
    
if(document.getElementById('radio').checked==true){
    a=0;
    for(x1; x1<=x2; x1++){
        a=a+x1;
        document.getElementById("result").value = "сумма всех х1 до x2 " +(a);
        console.log(a);
    
    }
}

else if (document.getElementById('radio2').checked==true){
    console.log("натуральные числа:")
    for(x1; x1<=x2; x1++){
        proverka=0;
   for(var j=2; j<x1;j++){
       if(x1 % j == 0){
        proverka++;
        continue;
      
       }
   }
   if(proverka==0){
       if(x1 != 1)
      console.log(x1); 
   }
    }
}
else if (document.getElementById('radio1').checked==true){
    a=1;
    for(x1; x1<=x2; x1++){
     a=a*x1
        document.getElementById("result").value = "умножение всех х1 до x2 " +(a);
        console.log(a);
    }
}


}
}

a=0;
function clearButton(){
    document.getElementById("x1").value = "";
    document.getElementById("x2").value = "";
}

// alert('Практическая работа №2');

// console.log('123');

// let name = prompt ('Введите название города');
// let year = prompt ('Введите год образования города');
// let population = prompt ('Введите население города');
// year=Number(year);
// let year_1= 2023- year;
// alert ('Городу ' + name + ' исполнилось ' + year_1+ ' лет с момента его образования. Население - ' + population + ' человек');


// alert('Практическая работа №3');
let num1 = Number(prompt ('Введите стоимость товара'));
let num2 = Number(prompt ('Введите количество денег у клиента'));
let a = num1-num2;
let b = num2-num1;
let text;

if (num1==num2){
    text='Покупка совершена';
}else{
    if(num1>num2){
        text='Для покупки не хватает '+a+' руб.';
    }else{
        text='Покупка совершена. Сдача '+b+' руб.';
    }
}


let box ='<div class="box">'+text+'</div>';
let for_box=document.querySelector('.for_box');
for_box.style.border='1px solid yellow';
for_box.style.borderRadius='20px';
for_box.style.fontSize='18px';
for_box.style.padding='15px 30px';
for_box.style.width='500px';
for_box.style.backgroundColor='pink';

for_box.innerHTML=box;


// Задание 1//
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание 2//
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3//
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4//
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,   
}

for (let salary in obj) {
    console.log(`${salary} - зараплата ${obj[salary]} - долларов`);
}

//Задание 5//
let n = 1000;
let num =0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n, num);

//Задание 6//
const fistFriday = Number(prompt('Какого числа первая пятница в этом месяце?'));
let currentDay = fistFriday;
while (currentDay <= 31) {
    console.log(`Сегодня пятница, ${currentDay} число. Необходимо подготовить отчет.`);
    currentDay += 7;
}
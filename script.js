let elTitle = document.querySelector('#title')

let dollir = 10650.34;
let yevro = 11650.03;

let ticket = 500;
let hotel = 250;
let muzey = 120;

let sum = (ticket + hotel) * dollir + muzey * yevro;

let name = prompt('Ismingizni kiriting');
let izoh = prompt(name + ' - Borish kelish samolyot bilet narxi $500, Mehmonxona to’lovi (to’liq safar davomiyligi uchun) $250, muzey va ko’ngilochar joylar uchun 120 yevro, Xo\'sh siz ketishga tayyormisiz keling tekshirib ko\'ramiz');
let money =Number(prompt(name + " sizga " + sum + ' so\'m kerak bo\'ladi, sizda qancha mablag\' bor', -0));

if(sum <= money){
    elTitle.textContent = "Oq yo\'l, maroqli xordiq tilayman " + name
}else{
    elTitle.textContent = name + ' sizda yetarlicha mablag\' mavjud emas, ozgina sabr qiling va ko\'prog\' pul toping.'
}

var tanya = true;
while (tanya){
// manangkap pilihan player
var p = prompt('Silahkan pilih : gajah, semut, orang');


// pilihan dari komputer
// membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
    comp = 'gajah';
}else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
}else {
    comp = 'semut';
}

console.log(comp);

// menentukan rules

var hasil = '';
if (p == comp) {
    hasil = 'SERI';
}
else if (p == 'gajah') {
    // if (comp == 'orang') {
    //     hasil = 'MENANG';
    // }else{
    //     hasil = 'KALAH';
    hasil = (comp == 'orang') ? 'MENANG' : 'KALAH'; //ternary operator
}
else if (p == 'orang') {
//     hasil = (comp == 'gajah') ? 'KALAH';
// }else if (p == 'semut') {
//     hasil = (comp == 'orang') ? 'MENANG';
// }else 
     hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
}else if (p == 'semut') {
    hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
}
else {
 
    hasil = 'Memasukkan pilihan yang salah';
}

// tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);
// console.log('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);
// menampilkan hasilz       
tanya = confirm('lagi?');
}
alert('terima kasih sudah bermain');
//console.log('terima kasih sudah bermain');
// menentukan hasil
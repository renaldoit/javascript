var x = 10;
var y = 20;
console.log('Hello World');
console.log('isi dari variabel x adalah ' + x);
console.log('isi dari variabel y adalah ' + y);

alert('Selamat datang di Javascript');
var lagi = true;

while(lagi) { //=== true) { karena ini boolean, jadi tidak perlu ditulis
    var nama = prompt('Masukkan nama:');
    alert('Halo ' + nama);

    lagi = confirm('Coba lagi?');
}

alert('Terima kasih...');
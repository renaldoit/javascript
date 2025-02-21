//gametebak angka

function gametebakangka()   {
var angka = Math.floor(Math.random() * 10) + 1;
var kesempatan = 3;
var tebakan;
var tebakanbenar = false;
var mainlagi;  //inisialisasi


alert("Permainan Tebak Angka\nSaya akan memilih angka 1-10, coba tebak angka yang saya pilih!");

    while (kesempatan > 0 && !tebakanbenar) {
    tebakan = prompt("Masukkan tebakan angka (1-10) : ");
    if (tebakan === null){
        alert ("Permainan dibatalkan!");
        return;
    
    }
    tebakan = parseInt(tebakan);

    if (tebakan === angka) {
        tebakanbenar = true;
        console.log("Tebakan anda benar!");
        alert("Tebakan anda benar!");
    } else {
        kesempatan--;
        alert("Tebakan anda salah, sisa kesempatan : " + kesempatan);

    if (tebakan < angka) {
        alert("Tebakan anda terlalu kecil!");
    }else if ( tebakan > angka) {
        alert("Tebakan anda terlalu besar!");
    }
}
}
//
//
//
//
//
//

if (tebakanbenar) {
    alert("Selamat, tebakan anda benar!");
}
else {
    alert("Maaf, kesempatan anda habis! \n Angka yang benar adalah : " + angka);
}  //end of gametebak angka


mainlagi = confirm("Main lagi?");
if (mainlagi) {
    gametebakangka();
}   else {
    alert("Terima kasih sudah bermain!");
}  //end of gametebak angka
}
gametebakangka();  //panggil fungsi gametebakangka
//end of gametebakangka.js
//end of file
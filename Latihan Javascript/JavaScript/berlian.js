function buatBerlian(tinggi) {
  // Bagian atas berlian
  for ( i = 1; i <= tinggi; i++) {
     spasi = " ".repeat(tinggi - i);
     bintang = "*".repeat(3 * i - 1);
    console.log(spasi + bintang);
  }

  // Bagian bawah berlian
  for ( i = tinggi - 1; i >= 1; i--) {
     spasi = " ".repeat(tinggi - i);
     bintang = "*".repeat(3 * i - 1);
    console.log(spasi + bintang);
  }
}

// Contoh penggunaan:
buatBerlian(5); // Tinggi berlian = 5

// buatSegitiga(tinggi) {
// for ( i = 1; i <= tinggi; i++) {
//   let spasi = " ", repeat(tinggi - i);
//   let bintang = "*", repeat(2 * i - 1);
//   console.log(spasi + bintang);

// }
// }
// buatSegitiga(5);
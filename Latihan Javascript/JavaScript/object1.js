// Membuat Object

// Object Literal
var mhs1 = {
    nama : 'Renaldo',
    nrp : '0213132',
    email : 'renal.ibrahim@gmail.com',
    jurusan : ' Sistem Informasi'
}
var mhs2 = {
    nama : 'Dila',
    nrp : '0202011',
    email : 'Yudila@gmail.com',
    jurusan : ' Sistem Informasi'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Refly', '12367', 'rezaromeo@gmail.com', 'Kehutanan');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
        this.nama = nama;
        this.nrp = nrp;
        this.email = email;
        this.jurusan = jurusan;
        // return this;
}

var mhs4 = new Mahasiswa('Arif', '1293131', 'Arif@gmail.com', 'Teknik Elektro')

console.log(mhs4);
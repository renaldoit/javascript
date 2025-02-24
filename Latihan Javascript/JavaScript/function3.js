function tampilkanAngka(n) {
    console.log(n);
    return tampilkanAngka(n - 1);
}

tampilkanAngka(10);
let nama = prompt ("Nama:");
let tinggi = prompt ("Tinggi badan anda");

// TINGGI = ParseInt(Tinggi)

if(tinggi >= 165){
    alert("Tinggi anda normal");
}else if(tinggi >= 150){
    alert("Anda Sudah Cukup Tinggi");
}else if(tinggi >= 140){
    alert("Tinggi Anda Di Bawah Rata-Rata");
}else if(tinggi >= 130){
    alert("Anda Kekurangan Gizi");
}else{
    alert("Anda Sedang Sakit");
}
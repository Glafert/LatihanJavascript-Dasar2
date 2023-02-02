//Latihan pembuatan function untuk perhitungan kubus

var tanya = true;

while ( tanya ){
function jumlahVolumeKubus (a, b){
    var volumeA, volumeB, total;
    
    volumeA = a * a * a;
    volumeB = b * b * b;
    
    total = volumeA + volumeB;
    alert('Jumlah volume dari kedua kubus itu adalah : ' + total);
    tanya = confirm('Apakah kamu ingin menghitung lagi ?');
}

var a = prompt ('Masukan nilai A');
var b = prompt ('Masukan nilai B');

jumlahVolumeKubus(a, b);
}
alert('Terimakasih')
;



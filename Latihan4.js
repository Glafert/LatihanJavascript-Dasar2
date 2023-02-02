//Membuat Game suit sederhana

hasil ='';
//Looping
var tanya = true;
//Pilihan User
while(tanya)
{
    var p = prompt('Masukan pilihan mu (Gajah, Semut, Manusia) :');
    //Pilihan Computer
    var comp = Math.random();
    
    if (comp < 0.30) {
        comp = 'gajah';
    }
    else if (comp >= 0.30 && comp < 0.70){
        comp = 'semut';
    }
    else
    {
        comp = 'manusia';
    }
//Cek Condition
//     if (comp =='gajah'){
//         hasil = 'Kalah';
//     }
//     else {
//         hasil = 'Menang';
//     }
// }
// else if(p =='gajah')
// {
//     if (comp =='manusia'){
//         hasil = 'Menang';
//     }
//     else {
//         hasil = 'Kalah';
//     }
// }
// else if(p =='semut')
//    {
//         if (comp =='manusia'){
//             hasil = 'Kalah';
//         }
//         else {
//             hasil = 'Menang';
//         }        
// }
if(p == comp)
{
    hasil = ' Seri '
}
else if(p == 'manusia'){
    hasil = (comp == 'gajah' ) ? 'KALAH' : 'MENANG';
}
else if(p == 'gajah'){
    hasil = (comp == 'manusia') ? 'MENANG' : 'KALAH'
}
else{
    hasil = 'Memasukan pilihan yang salah'
} 
// tampilkan hasilnya
 alert ('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nmaka hasilnya : ' + hasil);
 tanya = confirm('Apakah kamu ingin bermain lagi?')
}
alert('Terimakasih sudah bermain');
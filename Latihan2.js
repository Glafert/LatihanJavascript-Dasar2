//Latihan Switch case

var noAngkot = prompt('Masukan Nomor Angkot');
var angkotLembur = prompt('Masukan Nomor Angkot yang lembur');
var angkotBeroperasi = prompt('Masukan Nomor Angkot Beroperasi');


switch ( noAngkot ){
     case angkotLembur :
        alert('angkot no.' + angkotLembur + ' sedang beroperasi');
        break;
     case angkotBeroperasi :
        alert('angkot no.' + angkotBeroperasi +' sedang beroperasi');
     default :
        alert('angkot no. '+ noAngkot +' sedang tidak beroperasi');
                    }
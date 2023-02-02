/* 
Parameter & Argument

Parameter : adalah variabel yang ditulis didalam kurung saat function dibuat, dan tujuan nya
            untuk menampung nilai yang dikirimkan saat function dipanggil.

Argument  : adalah nilai yang dikirimkan ke parameter saat nilai dipanggil 
*/

var tanya = prompt ('Pilihan mana yang akan anda buat ?')

if (tanya == 1){
    function hitung (a,b){
        return a + b;
    }
    var hasil = hitung(5, 7);
    console.log(hasil);
}

else if (tanya == 2){
    function tambah (){
         var hasil2 = 0;
         for (var i = 0; i < arguments.length ; i++){
         hasil2 += arguments[i];
    }
    return hasil2;
}
var a = parseInt(prompt ('Masukan nilai A ?')); //ParseInt dibuat untuk memaksa string yang dinput menjadi integer
var b = parseInt(prompt ('Masukan nilai B ?'));
var c = parseInt(prompt ('Masukan nilai C ?'));

var coba = tambah(a, b, c);
console.log(coba);
}
else if(tanya ==3){
    //membuat rekursif : Faktorial
    function faktorial(n){
        if(n === 0) return 1;
        return n * faktorial(n-1);  
    }
    var a = parseInt(prompt ('Masukan nilai yang akan difaktorial kan ?'));
    alert('Hasil dari ' + a + '! :' + faktorial(a));
}



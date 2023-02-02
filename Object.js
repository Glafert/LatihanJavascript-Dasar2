//Membuat object pada javascript
//1. Object secara Literal

let player1 = {
    nama : 'Glafert',
    hp : 10,
    makan : function (porsi) {
        this.hp = this.hp + porsi;
        this.porsi = porsi;
        console.log(`Halo ${this.nama}, HP anda bertambah ${this.porsi}! `)
    },
    beraktivitas : function (jam){
        this.hp -= jam;
        this.jam = jam;
        console.log(`Halo ${this.nama}, energi anda berkurang ${this.jam}!`)
    }
};

let player2= {
    nama : 'Prigerio',
    hp : 10,
    makan : function (porsi) {
        this.hp = this.hp + porsi;
        this.porsi = porsi;
        console.log(`Halo ${this.nama}, HP anda bertambah ${this.porsi}! `)
    },
    beraktivitas : function (jam){
        this.hp -= jam;
        this.jam = jam;
        console.log(`Halo ${this.nama}, energi anda berkurang ${this.jam}!`)
    }
};

//var pilihan = parseInt(prompt('\n 1: Rubah Karyawan 1\n 2: rubah Karyawan 2 \nMasukan pilihan '));
//if (pilihan == 1 ){
//ubahKaryawan1(); }
//else if (pilihan == 2 ){
//    ubahKaryawan2();}

//2. Function Declaration

function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi){
        this.energi += porsi;
        this.porsi = porsi;
        console.log(`Halo ${this.nama}, energi anda bertambah ${this.porsi}!`)
    }

    mahasiswa.beraktivitas = function (jam){
        this.energi -= jam;
        this.jam = jam;
        console.log(`Halo ${this.nama}, energi anda berkurang ${this.jam}!`)
        
        //Alert
        if (mahasiswa.energi <= 20 && mahasiswa.energi >= 1 ){
            console.log(`energi anda tersisa ${this.energi}! segera isi energi anda dengan makan`)
        }
        //energi cek
        if (mahasiswa.energi == 0 || mahasiswa.energi < 0){
            console.log('Game Over');
        }
        }
    
    
    return mahasiswa;   
}




let glafert = Mahasiswa('Glafert', 100);
let svent = Mahasiswa('Svent', 100);
let prigerio = Mahasiswa('Prigerio', 100);



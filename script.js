console.log(`hello world`)
// DOM (Document Object Model)
// DOM Selection method


// getElementById()     Hasil => element
//// memilih pada element dom berdasarkan IDnya

const judul = document.getElementById('judul')
judul.style.color = `red`
judul.style.backgroundColor = `green`
judul.innerHTML = `Afrijal rusanjung`



// getElementsByTagName()   Hasil => HTML collection
//// memilih elemen-elemen yang memiliki name tag tertentu  

const p = document.getElementsByTagName('p')
p[0].style.textDecorationLine = 'overline underline'
 

// getElementsByClassName() Hasil => HTML collection+
//// mencari element dengan kelas tertentu

const h1 = document.getElementsByClassName('p1')[0]
h1.innerHTML = 'HALLO'


// querySelector()  Hasil => Element
// querySelectorAll() Hasil => nodeList

const p1 = document.querySelector('section#b p:nth-child(2)')
p1.style.backgroundColor = `green`


// mencari element berdasarkan selector

const hayo = document.querySelectorAll('li')
hayo[0].style.textTransform=`uppercase`
// Manipulasi Element
const p4 = document.querySelectorAll(`section#b p`)[0]
p4.setAttribute('class','p4')
p4.classList.add('lur')
p4.classList.remove('lur')
p4.classList.toggle('arr')
console.log(p4.classList.contains('arr')) // menentukan apakah ada attribute
const elemen = document.getElementById(`c`)
elemen.classList.add('d')
elemen.classList.add('p')
elemen.classList.add('o')
console.log(elemen.classList.item(4))
//elemen.classList.value = "kelas-baru";
// mengubhan semua isi class 

// Manipulasi NODE
const pbaru = document.createElement(`p`)
const textB = document.createTextNode(`Paragraph baru`)
pbaru.append(textB)
const lok = document.getElementById(`a`)
lok.append(pbaru)
const textc = document.createTextNode(`new paragraph`)
const libaru = document.createElement('li')
libaru.appendChild(textc)
const lok1 = document.querySelector(`section#b ul`)
lok1.insertBefore(libaru,lok1.children[0])
// objek    

const ril = document.querySelector(`section#b p:nth-child(2)`)

ril.addEventListener('click', function(){
    const ul = document.querySelector(`.list`)
    ul.classList.toggle('biru')  
})


















































// objek literal

const mhs = {
    nama : "Afrijal",
    jurusan : "informatika",
    Kelas : "BB"
}
console.log(mhs)

// function declaratioin -

function mhs1(nama, jurusan, kelas){
    let mhs1 = {}
    mhs1.nama = nama;
    mhs1.jurusan = jurusan;
    mhs1.kelas = kelas;
    return mhs1;
}
console.log(mhs1("rijal", "infromatika", "BB"))
// constuctor declaration

function mhs2(nama, jurusan, kelas){
    this.nama = nama;
    this.jurusan = jurusan;
    this.kelas = kelas
}

console.log(new mhs2(`ijal`, `infromatika`, `BB`))

// object.create()

function mahasiswa(nama, energy){
    let mahasiswa = Object.create(aktifitas)
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    return mahasiswa;
}

let aktifitas = {
    belajar : function(jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama} Selamat belajar `)
    },
    bermain : function(jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama} Selamat bermain`)
    },
    tidur : function(jam){
        this.energy += jam*2;
        console.log(`Halo ${this.nama} Selamat tidur`)
    },
    makan : function(porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama} Selamat makan`)
    }
}

// prototype

function Kecerdasan(nama, IQ){
    this.nama = nama;
    this.IQ = IQ
}

Kecerdasan.prototype.cariInfo = function(jam ){
    this.IQ += jam
    console.log(`${this.nama} memiliki IQ sekitar ${this.IQ}`);
}

Kecerdasan.prototype.game= function(jam){
    this.IQ -= jam
    console.log(`${this.nama} meimliki IQ sekitar ${this.IQ}`)
}

let izal = new Kecerdasan(`izal`, 200)

//arrow function

let halow = () => "Hallo world";
console.log(halow());
let halloo = (nama) => `hallo ${this.nama}`
console.log(("afrijal"))
let Hallloo = (nama, waktu) => `Hallo ${nama} selamat ${waktu}`
console.log(Hallloo("rizal", "siang"))


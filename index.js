// Klaseje mokosi 4 asmenys.
//Mokiniu vardai: Gediminas,Paulius,Ruta,Vida.

const asmuo1 = "mokinys1";
const asmuo2 = "mokinys2";
const asmuo3 = "mokinys3";
const asmuo4 = "mokinys4";

const klase = [asmuo1,asmuo2,asmuo3,asmuo4];
console.log("Klaseje mokosi",klase.length,"asmenys");


const mokinys1 = "Gediminas";
const mokinys2 = "Paulius";
const mokinys3 = "Ruta";
const mokinys4 = "Vida";

const mokiniuvardai = (mokinys1 + "," +mokinys2 +"," + mokinys3 + "," + mokinys4 );
console.log("Mokiniu vardai:",mokiniuvardai);



// Pazymiai: 10,2,8,6,4.
// Pazymiu suma: 30.
// Pazymiu kiekis: 5. 
// Pazymiu vidurkis: 6.

const pazimys1 = 10;
const pazimys2 = 2;
const pazimys3 = 8;
const pazimys4 = 6;
const pazimys5 = 4;

const Pazymiai = (pazimys1 + "," + pazimys2 + "," + pazimys3 + "," + pazimys4 + "," + pazimys5);
console.log("Pazymiai:",Pazymiai);

const pazymiuSuma = pazimys1 + pazimys2 + pazimys3 + pazimys4 + pazimys5
console.log("Pazymiu suma:",pazymiuSuma);

const pazymiuKiekis = [pazimys1, pazimys2,pazimys3,pazimys4,pazimys5]
console.log("Pazimiu kiekis:", pazymiuKiekis.length)

const pazymiuVidurkis = pazymiuSuma/5
console.log("Pazymiu vidurkis:",pazymiuVidurkis)

console.log("Mini uzduotys")
//Kintamųjų inicijavimas
//Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

const skaicius1 = 10
const skaicius2 = 20
const skaicius3 = 30

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);

//Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

const pirmasZodis = "Mano";
const antrasZodis = "vardas";
const treciasZodis = "Zilvinas";
console.log(pirmasZodis);
console.log(antrasZodis);
console.log(treciasZodis);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

const sarasas = [10,9,8,7,6]
const pazymiai = [5,4,3,2,1]
const iverinimai = [15,14,13,12,11]

console.log("Sarasas",sarasas);
console.log("Pazymiai",pazymiai);
console.log("Ivertinimai",iverinimai);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console


const prekiuSarasas = ['obuoliai', 'pienas', 'pomidorai', 'agurkai', 'svogunai']
console.log("Prekiu sarasas:",prekiuSarasas);
const miestuSarasas = ['Vilnius','Kaunas','Klaipeda','Siauliai','Panevezys']
console.log("Miestu sarasas:",miestuSarasas);
const dalyviuSarasas = ['Zilvinas','Lina','Marius','Vida','Austeja']
console.log("Dalyviu saras",dalyviuSarasas)

//Veiksmai su kintamaisiais
//Susumuoti visus skaičiaus tipo kintamuosius
//Rezultatą išvesti į console

const pirmasSkaicius = 1
const antrasSkaicius = 2
const treciasSkaicius = 3

const suma = pirmasSkaicius + antrasSkaicius + treciasSkaicius
console.log("Suma", suma)

//Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//Rezultatą išvesti į console

// Gitanas Nauseda yra Lietuvos respublikos Prezidentas

const vardas = "Gitanas";
const pavarde = "Nauseda";
const saliesVadovas = "Prezidentas";

const sakinys = ( vardas + " " + pavarde + " " + "yra Lietuvos respublikos" + " " + saliesVadovas )
console.log(sakinys)

//Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//1-2+3-4+5
//Rezultatą išvesti į console

const lygtis1 = sarasas[0] - sarasas[1] + sarasas[2] - sarasas[3] + sarasas[4];
console.log(lygtis1)

const lygtis2 = pazymiai[0] - pazymiai[1] + pazymiai[2] - pazymiai[3] + pazymiai[4]
console.log(lygtis2)

const lygtis3 = iverinimai[0] - iverinimai[1] + iverinimai[2] - iverinimai[3] + iverinimai[4]
console.log(lygtis3)

//Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, 
//jog tarp jų būtų kablelis ir tarpas


const prekiusarasas =[prekiuSarasas[4], prekiuSarasas[3],prekiuSarasas[2],prekiuSarasas[1],prekiuSarasas[0]];
console.log('Prekiu sarasas:',prekiusarasas)

const miestusarasas =[miestuSarasas[4],miestuSarasas[3],miestuSarasas[2],miestuSarasas[1],miestuSarasas[0]];
console.log('Miestu sarasas:',miestusarasas)


//Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//kuris didesnis

const a = 10;
const b = 5;

if (a > b) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//kuris mazesnis

const c = 4;
const d = 3;

if (c < d) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//ar jie lygus

const e = 4;
const f = 3;

if (e === f) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//ar jie nelygus

const g = 4;
const h = 3;

if (g !== h) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//kuris didesnis arba lygus

const i = 4;
const j = 3;

if (i >= j) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//kuris mažesnis arba lygus

const k = 4;
const l = 3;

if (k <= l) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//Išvesti teksto tipo kintamųjų ilgius

const kratinys1 = "Mano vardas Zilvinas";
const kratinys2 = "Labai malonu su Jumis susipazinti";

kratinioilgis1 = kratinys1.length;
kratinioilgis2 = kratinys2.length;

console.log(kratinioilgis1,kratinioilgis2);

//Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//kuris didesnis

if (kratinioilgis1 > kratinioilgis2) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//kuris mažesnis

if (kratinioilgis1 < kratinioilgis2) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//ar jie lygūs

if (kratinioilgis1 == kratinioilgis2) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//ar jie nelygūs

if (kratinioilgis1 !== kratinioilgis2) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//kuris didesnis arba lygus

if (kratinioilgis1 >= kratinioilgis2) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//kuris mažesnis arba lygus

if (kratinioilgis1 <= kratinioilgis2) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}

//Išvesti sąrašo tipo kintamųjų ilgius

const miestai = ['Marijampole','Kaunas','Klaipeda','Alytus','Druskininkai'];
const automobiliai = ['Volvo', 'Audi', 'BMW', 'Opel'];

listas1 = miestai.length;
listas2 = automobiliai.length;

console.log('Miestai =',listas1,'Automobiliai =',listas2);

//Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
//kuris didesnis

if (listas1 > listas2) {
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
//kuris mažesnis

if (listas1 < listas2) {
    console.log('Pomidoras')
}else {
    console.log('Bandykite dar karta')
}

//ar jie lygūs

if (listas1 == listas2) {
    console.log('Pomidoras')
}else {
    console.log('Bandykite dar karta')
}

//ar jie nelygūs

if (listas1 !== listas2) {
    console.log('Pomidoras')
}else {
    console.log('Bandykite dar karta')
}

//kuris didesnis arba lygus

if (listas1 >= listas2) {
    console.log('Pomidoras')
}else {
    console.log('Bandykite dar karta')
}

//kuris mazesnis arba lygu

if (listas1 <= listas2) {
    console.log('Pomidoras')
}else {
    console.log('Bandykite dar karta')
}

//Ciklo for panaudojimas
//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
//0 … 0

const nuo1 = 0;
const iki1 = 0;
let suma1 = 0; 

for (let i = nuo1; i <= iki1; i++) {

    suma1 = suma1 + i;
}
console.log(`Nuo ${nuo1} iki ${iki1} skaiciu suma yra ${suma1}.`)

//0 … 4

const nuo2 = 0;
const iki2 = 4;
let suma2 = 0; 

for (let i = nuo2; i <= iki2; i++) {

    suma2 = suma2 + i;
}
console.log(`Nuo ${nuo2} iki ${iki2} skaiciu suma yra ${suma2}.`)

let sprite = document.querySelector('.sprite');
const jmlsprite = document.querySelector('.sprite');


let fanta = document.querySelector('.fanta');
const jmlfanta = document.querySelector('.jumlahBelifanta');


let redbull = document.querySelector('.redbull');
const jmlredbull = document.querySelector('.jumlahBeliredbull');


const hasil = document.querySelector('#total');


const proses = document.querySelector('input[type="button"]');
console.log(proses)
proses.addEventListener('click', function () {
    
    if (sprite.checked === false && fanta.checked === false && redbull.checked === false) {
        alert('Check minuman terlebih dahulu!');
    }


    let hargasprite = 120; 
    if (sprite.checked === true) {
        hargasprite *= jmlsprite.value;
        hasil.value = hargasprite;
    }


    let hargafanta = 500; 
    if (ciki.checked === true) {
        hargafanta *= jmlfanta.value;
        hasil.value = hargafanta;
    }

  
    let hargaredbull = 3000; 
    if (es.checked === true) {
        hargaredbull *= jmlredbull.value;
        hasil.value = hargaredbull;
    }

    
    if (sprite.checked === true && fanta.checked === true && redbull.checked === true) {
        hasil.value = hargasprite + hargafanta + hargaredbull;

      
    } else if (sprite.checked === true && fanta.checked === true) {
        hasil.value = hargasprite + hargafanta;

       
    } else if (sprite.checked === true && redbull.checked === true) {
        hasil.value = hargasprite + hargaredbull;

        
    } else if (fanta.checked === true && redbull.checked === true) {
        hasil.value = hargafanta + hargaredbull;
    }
});
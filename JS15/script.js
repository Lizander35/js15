// let dataArr = ['text', 454, 'kitas text', 77841, 454, 'labas']
// console.log(dataArr)

// for (let i = 0; i < dataArr.length; i++) {
//     if (!isNaN(dataArr[i])) {
//         console.log(dataArr[i])
//     }
// }

// dataArr.map(item => {
//     if (!isNaN(item)) {
//         console.log(item)
//     }
// } )

// dataArr.forEach(item => {
//     if (!isNaN(item)) {
//         console.log(item)
// }
// })

const masyvas = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 4.1. Tik skaičius (number tipo duomenis).
function tikSkaiciai(masyvas) {
  const skaiciai = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] === 'number') {
      skaiciai.push(masyvas[i]);
    }
  }
  return skaiciai;
}

const tikSkaiciaiRezultatas = tikSkaiciai(masyvas);
console.log("Tik skaičiai (for ciklas):", tikSkaiciaiRezultatas);

const tikSkaiciaiMap = masyvas.filter(item => typeof item === 'number');
console.log("Tik skaičiai (map/forEach):", tikSkaiciaiMap);

// 4.2. Tik tekstą (string tipo duomenis).
function tikTekstai(masyvas) {
  const tekstai = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] === 'string') {
      tekstai.push(masyvas[i]);
    }
  }
  return tekstai;
}

const tikTekstaiRezultatas = tikTekstai(masyvas);
console.log("Tik tekstas (for ciklas):", tikTekstaiRezultatas);

const tikTekstaiMap = masyvas.filter(item => typeof item === 'string');
console.log("Tik tekstas (map/forEach):", tikTekstaiMap);

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function skaiciaiLaipsniu4(masyvas) {
  const laipsniu4 = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] === 'number') {
      laipsniu4.push(Math.pow(masyvas[i], 4));
    }
  }
  return laipsniu4;
}

const skaiciaiLaipsniu4Rezultatas = skaiciaiLaipsniu4(masyvas);
console.log("Skaičiai pakelti 4-tuoju laipsniu (for ciklas):", skaiciaiLaipsniu4Rezultatas);

const skaiciaiLaipsniu4Map = masyvas
  .filter(item => typeof item === 'number')
  .map(item => Math.pow(item, 4));
console.log("Skaičiai pakelti 4-tuoju laipsniu (map/forEach):", skaiciaiLaipsniu4Map);

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
function skaiciaiPrideti55(masyvas) {
  const suPridedu55 = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] === 'number') {
      suPridedu55.push(masyvas[i] + 55);
    }
  }
  return suPridedu55;
}

const skaiciaiPrideti55Rezultatas = skaiciaiPrideti55(masyvas);
console.log("Skaičiai su pridėtu 55 (for ciklas):", skaiciaiPrideti55Rezultatas);

const skaiciaiPrideti55Map = masyvas
  .filter(item => typeof item === 'number')
  .map(item => item + 55);
console.log("Skaičiai su pridėtu 55 (map/forEach):", skaiciaiPrideti55Map);

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
function skaiciaiPadalintiIs2(masyvas) {
  const padalintiIs2 = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] === 'number') {
      padalintiIs2.push(masyvas[i] / 2);
    }
  }
  return padalintiIs2;
}

const skaiciaiPadalintiIs2Rezultatas = skaiciaiPadalintiIs2(masyvas);
console.log("Skaičiai padalinti iš 2 (for ciklas):", skaiciaiPadalintiIs2Rezultatas);

const skaiciaiPadalintiIs2Map = masyvas
  .filter(item => typeof item === 'number')
  .map(item => item / 2);
console.log("Skaičiai padalinti iš 2 (map/forEach):", skaiciaiPadalintiIs2Map);

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
function skaiciaiSuTekstu(masyvas) {
    const suTekstu = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'number') {
        suTekstu.push(`Number: ${masyvas[i]}`);
      }
    }
    return suTekstu;
  }
  
  const skaiciaiSuTekstuRezultatas = skaiciaiSuTekstu(masyvas);
  console.log("Skaičiai su tekstu (for ciklas):", skaiciaiSuTekstuRezultatas);
  
  const skaiciaiSuTekstuMap = masyvas
    .filter(item => typeof item === 'number')
    .map(item => `Number: ${item}`);
  console.log("Skaičiai su tekstu (map/forEach):", skaiciaiSuTekstuMap);
  
  // 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais.
  function skaiciaiSuIndeksais(masyvas) {
    const suIndeksais = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'number') {
        suIndeksais.push(`Index: ${i}, Number: ${masyvas[i]}`);
      }
    }
    return suIndeksais;
  }
  
  const skaiciaiSuIndeksaisRezultatas = skaiciaiSuIndeksais(masyvas);
  console.log("Skaičiai su indeksais (for ciklas):", skaiciaiSuIndeksaisRezultatas);
  
  const skaiciaiSuIndeksaisMap = masyvas
    .map((item, index) => {
      if (typeof item === 'number') {
        return `Index: ${index}, Number: ${item}`;
      }
    })
    .filter(Boolean);
  console.log("Skaičiai su indeksais (map/forEach):", skaiciaiSuIndeksaisMap);
  
  // 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
  function skaiciaiPadaugintiIsIndekso(masyvas) {
    const padauginti = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'number') {
        padauginti.push(masyvas[i] * i);
      }
    }
    return padauginti;
  }
  
  const skaiciaiPadaugintiIsIndeksoRezultatas = skaiciaiPadaugintiIsIndekso(masyvas);
  console.log("Skaičiai padauginti iš indekso (for ciklas):", skaiciaiPadaugintiIsIndeksoRezultatas);
  
  const skaiciaiPadaugintiIsIndeksoMap = masyvas
    .map((item, index) => {
      if (typeof item === 'number') {
        return item * index;
      }
    })
    .filter(Boolean);
  console.log("Skaičiai padauginti iš indekso (map/forEach):", skaiciaiPadaugintiIsIndeksoMap);
  
  // 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario.
  function skaiciaiPadaugintiIsAnkstesnio(masyvas) {
    const padauginti = [];
    let ankstesnis = null;
  
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'number') {
        if (ankstesnis !== null) {
          padauginti.push(masyvas[i] * ankstesnis);
        }
        ankstesnis = masyvas[i];
      }
    }
    return padauginti;
  }
  
  const skaiciaiPadaugintiIsAnkstesnioRezultatas = skaiciaiPadaugintiIsAnkstesnio(masyvas);
  console.log("Skaičiai padauginti iš ankstesnio (for ciklas):", skaiciaiPadaugintiIsAnkstesnioRezultatas);
  
  const skaiciaiPadaugintiIsAnkstesnioMap = masyvas
    .map((item, index, arr) => {
      if (typeof item === 'number' && index > 0 && typeof arr[index - 1] === 'number') {
        return item * arr[index - 1];
      }
    })
    .filter(Boolean);
  console.log("Skaičiai padauginti iš ankstesnio (map/forEach):", skaiciaiPadaugintiIsAnkstesnioMap);

  // 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
function skaiciaiDidziauUz350(masyvas) {
    const didesniUz350 = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'number' && masyvas[i] * 5 > 350) {
        didesniUz350.push(masyvas[i]);
      }
    }
    return didesniUz350;
  }
  
  const skaiciaiDidziauUz350Rezultatas = skaiciaiDidziauUz350(masyvas);
  console.log("Skaičiai didesni už 350 (for ciklas):", skaiciaiDidziauUz350Rezultatas);
  
  const skaiciaiDidziauUz350Map = masyvas
    .filter(item => typeof item === 'number' && item * 5 > 350);
  console.log("Skaičiai didesni už 350 (map/forEach):", skaiciaiDidziauUz350Map);
  
  // 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi.
  function tekstaiSuSimboliais(masyvas) {
    const suSimboliais = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'string') {
        suSimboliais.push(`${masyvas[i]} has ${masyvas[i].length} symbols`);
      }
    }
    return suSimboliais;
  }
  
  const tekstaiSuSimboliaisRezultatas = tekstaiSuSimboliais(masyvas);
  console.log("Tekstai su simboliais (for ciklas):", tekstaiSuSimboliaisRezultatas);
  
  const tekstaiSuSimboliaisMap = masyvas
    .filter(item => typeof item === 'string')
    .map(item => `${item} has ${item.length} symbols`);
  console.log("Tekstai su simboliais (map/forEach):", tekstaiSuSimboliaisMap);
  
  // 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide.
  function zodziaiIskiriantRaides(masyvas) {
    const suIskiriamomisRaidemis = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'string') {
        const zodis = masyvas[i];
        const iskirtosRaides = zodis.split('').join('-').toUpperCase();
        suIskiriamomisRaidemis.push(iskirtosRaides);
      }
    }
    return suIskiriamomisRaidemis;
  }
  
  const zodziaiIskiriantRaidesRezultatas = zodziaiIskiriantRaides(masyvas);
  console.log("Žodžiai su iškiriamomis raidėmis (for ciklas):", zodziaiIskiriantRaidesRezultatas);
  
  const zodziaiIskiriantRaidesMap = masyvas
    .filter(item => typeof item === 'string')
    .map(item => item.split('').join('-').toUpperCase());
  console.log("Žodžiai su iškiriamomis raidėmis (map/forEach):", zodziaiIskiriantRaidesMap);
  
  // 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore).
  function pirmosIrTreciosRaides(masyvas) {
    const suPakeistomisRaides = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'string') {
        const zodis = masyvas[i];
        let pakeistasZodis = '';
        for (let j = 0; j < zodis.length; j++) {
          if (j === 0 || j === 2) {
            pakeistasZodis += '_';
          } else {
            pakeistasZodis += zodis[j];
          }
        }
        suPakeistomisRaides.push(pakeistasZodis);
      }
    }
    return suPakeistomisRaides;
  }
  
  const pirmosIrTreciosRaidesRezultatas = pirmosIrTreciosRaides(masyvas);
  console.log("Žodžiai su pakeistomis raidėmis (for ciklas):", pirmosIrTreciosRaidesRezultatas);
  
  const pirmosIrTreciosRaidesMap = masyvas
    .filter(item => typeof item === 'string')
    .map(item => {
      let pakeistasZodis = '';
      for (let j = 0; j < item.length; j++) {
        if (j === 0 || j === 2) {
          pakeistasZodis += '_';
        } else {
          pakeistasZodis += item[j];
        }
      }
      return pakeistasZodis;
    });
  console.log("Žodžiai su pakeistomis raidėmis (map/forEach):", pirmosIrTreciosRaidesMap);
  
  // 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašyti atvirkščiai.
  function zodziaiAtvirksciai(masyvas) {
    const atvirksciaiZodziai = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'string') {
        const zodis = masyvas[i];
        const atvirksciai = zodis.split('').reverse().join('');
        atvirksciaiZodziai.push(atvirksciai);
      }
    }
    return atvirksciaiZodziai;
  }
  
  const zodziaiAtvirksciaiRezultatas = zodziaiAtvirksciai(masyvas);
  console.log("Žodžiai atvirkščiai (for ciklas):", zodziaiAtvirksciaiRezultatas);
  
  const zodziaiAtvirksciaiMap = masyvas
    .filter(item => typeof item === 'string')
    .map(item => item.split('').reverse().join(''));
  console.log("Žodžiai atvirkščiai (map/forEach):", zodziaiAtvirksciaiMap);
  
  // 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra.
  function tekstaiTarpNariu(masyvas) {
    const tarpNariu = [];
    for (let i = 0; i < masyvas.length; i++) {
      if (typeof masyvas[i] === 'string') {
        const tekstas = masyvas[i];
        const indeksai = [];
        for (let j = 0; j < masyvas.length; j++) {
          if (typeof masyvas[j] === 'number' && masyvas[j] !== 'string') {
            indeksai.push(masyvas[j]);
          }
        }
        tarpNariu.push(`${tekstas} is between ${Math.min(...indeksai)} and ${Math.max(...indeksai)} in the array`);
      }
    }
    return tarpNariu;
  }
  
  const tekstaiTarpNariuRezultatas = tekstaiTarpNariu(masyvas);
  console.log("Tekstai tarp narių (for ciklas):", tekstaiTarpNariuRezultatas);
  
  const skaiciaiMasyve = masyvas.filter(item => typeof item === 'number');
  const tekstaiTarpNariuMap = masyvas
    .filter(item => typeof item === 'string')
    .map(item => {
      const indeksai = skaiciaiMasyve.filter(number => number < item);
      return `${item} is between ${Math.min(...indeksai)} and ${Math.max(...indeksai)} in the array`;
    });
  console.log("Tekstai tarp narių (map/forEach):", tekstaiTarpNariuMap);
  
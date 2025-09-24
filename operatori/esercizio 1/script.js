/* L'esame di ginnastica si supera se:
    a) voto della prova scritta >= 75% oppure
    b) voto della prova scritta >= 50% e esame orale superato oppure
    c) proggetto pratico completato e voto della prova scritta >= 50%
*/
const votoProvaScritta = 60;
const superatoEsameOrale = false;
const completatoProggettoPratico = true;
const hoSuperato =  votoProvaScritta >= 75 || 
                    (votoProvaScritta >= 50 && superatoEsameOrale) ||
                    (completatoProggettoPratico && votoProvaScritta >= 50)
console.log("Esame superato:", hoSuperato);
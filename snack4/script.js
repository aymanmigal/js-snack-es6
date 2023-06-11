//FUNZIONE CHE GENERA NUMERI RANDOM
function generateRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) - min);
}


const squadre = [

    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Roma',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Lazio',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Napoli',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Fiorentina',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Atalanta',
        punti: 0,
        falliSubiti: 0
    },


];

squadre.forEach((element) => {


    element.punti = generateRandomNumber(1, 100);
    element.falliSubiti = generateRandomNumber(1, 150);
})

console.log(squadre);


//STAMPO ARRAY CON SOLO I VALORI 'NOME' E 'FALLI SUBITI'
const legenda = [];


for (let i=0; i<squadre.length; i++){
    let statistiche = squadre[i];

    const {nome, falliSubiti} = statistiche;

    let Risultato = {
        nome,
        falliSubiti
    }

    legenda.push(Risultato);



}

console.log(legenda);



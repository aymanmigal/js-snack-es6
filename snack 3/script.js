const arrayBici = [

    {
        nome: 'Bici1',
        peso: 10
    },

    {
        nome: 'Bici2',
        peso: 12
    },

    {
        nome: 'Bici3',
        peso: 8
    },

    {
        nome: 'Bici4',
        peso: 18
    },

    {
        nome: 'Bici5',
        peso: 28
    },

    {
        nome: 'Bici6',
        peso: 13
    },

];
//DEFINISCO LA BICI LEGGERA PRENDONDALA DALL'ARRAY
let biciLeggera = arrayBici[0];

for (let i=0; i<arrayBici.length; i++){
    if(arrayBici[i].peso < biciLeggera.peso){
        biciLeggera = arrayBici[i];
    }
}


//STAMPO IN CONSOLE.LOG LA BICI PIU' LEGGERACON DESTRUCTORING E TEMPLATE LITERAL
console.log(biciLeggera);

let {nome, peso} = biciLeggera;

console.log(`La bici più leggera è la ${nome} e pesa ${peso} Kg.`);
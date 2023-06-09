const studenti = [

    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
      },
      {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
      },
      {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
      },
      {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
      },
      {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
      },
      {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
      },
      {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
      }

]



//1.NOMI STUDENTI IN MAIUSCOLO
const targa = studenti.map((studente) => studente.name.toUpperCase());
console.log(targa);

//2.STUDENTI CON VOTO SUPERIORE A 70
const good_students = studenti.filter((studente) => studente.grades > 70);
console.log(good_students);

//3.STUDENTI CON VOTO SUPERIORE A 70 E ID SUPERIORE A 120
const top_students = studenti.filter((studente) => studente.grades > 70 && studente.id > 120);
console.log(top_students);



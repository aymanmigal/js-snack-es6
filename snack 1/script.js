const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const invitation_array = invitati.map((invitato, i) =>{

    return {'_nome_del_tavolo_': 'Tavolo Vip', '_nome_dell_ospite_': invitato, '_posto_occupato': i}

});

console.log(invitation_array);
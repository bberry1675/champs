const weapons = require('./weapons');
const champions = require('./champions');

champions.forEach(champ => {
    let avail;
    if(champ.type){
        avail = weapons.filter(weapon => weapon.type == champ.type);
    }
    else if(champ.weapon){
        avail = weapons.filter(weapon => champ.weapon.indexOf(weapon.name) != -1);
    }
    else{
        console.log(`There is something wrong with champion: ${champ.name}`);
        return;
    }

    let weapon = avail[Math.floor(Math.random() * avail.length)];
    console.log(`Champion: ${champ.name} has ${weapon.name}`);
})
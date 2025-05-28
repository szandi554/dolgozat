function fullStack(frontendDevs, backendDevs) {
   
    const frontendList = frontendDevs.split(";").map(name => name.trim());
    const backendList = backendDevs.split(";").map(name => name.trim());

    
    const fullStackDevs = frontendList.filter(name => backendList.includes(name));

    return fullStackDevs;
}


console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'));


console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'));



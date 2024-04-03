

const maPremierePromesse = new Promise((resolve,reject) =>{
    resolve("Bonjour Raynald!");
})

maPremierePromesse.then((resultat)=> {console.log(resultat);});



const promesseRejetee = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        reject("Opération échouée")

    }, 2000);
});

promesseRejetee.catch((resultat) => {
    console.log(resultat);
})



const maPremierePromesse = new Promise((resolve, reject) => {
    // Ici, tu vas mettre le code qui sera exécuté de manière asynchrone.
    // Utilise setTimeout pour simuler un travail asynchrone.

    setTimeout(()=>(resolve("Hello, Raynald!")), 2000);

});

maPremierePromesse.then((message) => {
    console.log(message);
}).catch((erreur) => {
    console.error(erreur);
});


const doitReussir = true; // Change cette valeur pour tester le rejet

const maSecondePromesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (doitReussir) {
            resolve("Promesse tenue !");
        } else {
            reject("Oups, quelque chose s'est mal passé...");
        }
    }, 2000);
});

maSecondePromesse.then((message) => {
    console.log(message);
}).catch((erreur) => {
    console.error(erreur);
});




// function attendreEtSaluer(nom) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Bonjour, ${nom} !`);
//         }, 2000);
//     });
// }

// attendreEtSaluer('Raynald').then(message => console.log(message));



// function attendreEtSaluer(nom){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(`Bonjour ${nom}`), 2000);
//     })
// }

// attendreEtSaluer('Raynald').then(result => console.log(result));


function attendreEtAfficher(message, temps) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, temps);
    });
}

attendreEtAfficher("Premier message", 2000)
    .then(() => attendreEtAfficher("Deuxième message", 2000));
>
let nom = "alfred";
let age = 25;
let age2 = "25";

console.log("-----------------------------");

console.log("vérifier type d'un élement");
// vérifier le type d'une variable types primitifs=> number, string, float 
console.log(typeof(nom));
console.log(typeof(age));
console.log(typeof(age2));

console.log(typeof(unObjet));
// unObjet => type objet
// un type objet regroupe tous les types non primitifs


// création objet clé/valeur

var unObjet = {key: "toto", key2: "autrevaleur"}; // créer objet de maniére litterale

var unObjet2 = {nom: "alfredo", age:35, old:age2};

console.log("-----------------------------");

/*accéder à une propriété d'un objet*/
// 1er moyen accéder à la propriété nom de l'objet
unObjet2.nom; 
console.log(unObjet2.nom) // type: string
console.log(unObjet2.age)// type:number
console.log(unObjet2.old)// type: string
// 2ème moyen accéder à la propriété nom d'un objet
unObjet2["nom"];
console.log(unObjet2["nom"])// affiche alfredo

console.log("-----------------------------");

/* modifier le nom d'une propriété*/

// 1er moyen
console.log("modification nom d'une propriété");

unObjet2.nom = "toto";
console.log(unObjet2["nom"]);

console.log("-----------------------------");

// 2ème moyen

console.log("modification nom d'une propriété");

unObjet2["nom"] = "tata";
console.log(unObjet2.nom);

/* autres moyens création d'un objet*/

// décla un objet puis ajouter valeur aux clés
let obj3 = {};
obj3.nom = "robert";
obj3.age = 25;

// créer un new Object();
let obj4 = new Object();
obj4.nom = "toto";
obj4.age = 25;
obj4.sayHello = function(){
    console.log("hello" + this.nom);
}
obj4.sayHello();

// parcourir toute les clés de l'objet et accéder aux valeurs de chaque clé
/*boucler sur chaque clé de l'objet et on met chaque clé dans une variable key*/

for(let key in obj4){
    console.log("------------------------");
    console.log("key"+ " "+ key);// affiche la valeur des clés
    console.log("val"+ " "+ obj4[key]);// affiche la valeur des propriétés
    // executer une fonction
    if (typeof(obj4[key]) === "function"){
        obj4[key]();
    }else{
        console.log(`key is not a function.`);

    }
}



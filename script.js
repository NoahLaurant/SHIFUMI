
//créer un jeu de shifumi en interaction entre l'utilisateur et l'oradinateur


//demander a l'utilisateur de choisir entre "pierre" , "papier" , "ciseaux"

//role : demander a l'utilisateur entre "pierre" , "papier" , "ciseaux"
//parametre : rien
//return : retoune son choix

function utilisateur(){
    let choix = prompt("pierre , papier , ciseaux");
    return choix;
}


//demander a l'ordinateur de choisir entre "pierre" , "papier" , "ciseaux"

//piocher un chiffre aléatoire entre 0 et 2
//role : demander a l'ordinateur de choisir entre "pierre" , "papier" , "ciseaux"
//parametre : rien
//return : retourne son choix

function piocheOrdi(){
   let choix2= Math.floor(Math.random()*3);
    return choix2;
}

let choixFinal = piocheOrdi();

//convertir choix ordi
//role: convertir le choix en "pierre" , "papier" , "ciseaux"
//parametre : le choix de l'ordi
//retun : conversion si c'est une pierre, papier, ciseaux

function conversionOrdi(choisir){
    //si choix de l'ordi est égal a 0 alors retourne pierre
    if(choisir===0){
        return "pierre"
    } 

        //sinon si choix de l'ordi est égal a 1 alors retourne papier
        else if(choisir===1){
            return "papier"
        }

            //sinon l'ordi choisie ciseaux
            else{
                return "ciseaux"
            }
}

//comparé entre les deux choix

//role : comparer les deux choix 
//parametre : les deux choix
//return : retoune le vainqueur

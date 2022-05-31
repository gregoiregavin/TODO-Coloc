import { Mongo } from "meteor/mongo";

export const Colocations = new Mongo.Collection("Colocations");

// Renvoie la liste de toutes les Colocations 
export const toutesLesColocations = () => {
    return Colocations.find({})
}

// Renvoie l'identifiant de la colocation d'un colocataire
//export const colocationDe = (nomColocataire) => {
//    return Colocations.findOne({nom: nomColocataire})._id // Comment récupérer la String username, qui est dans un objet user, qui est dans un tableau de membres, qui est dans une coloc ?
//}
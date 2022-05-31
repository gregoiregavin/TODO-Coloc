import { Mongo } from "meteor/mongo";

export const Colocations = new Mongo.Collection("Colocations");

// Renvoie la liste de toutes les Colocations 
export const toutesLesColocations = () => {
    return Colocations.find({})
}

// Renvoie l'identifiant de la colocation d'un colocataire
export const colocationDe = (nomColocataire) => {
    return Colocations.findOne({nom: nomColocataire})._id
}
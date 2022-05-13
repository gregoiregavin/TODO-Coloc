import { Mongo } from "meteor/mongo";

export const TacheCollection = new Mongo.Collection("taches");

// Renvoie la liste de toutes les Taches
export const toutesLesTaches = () => {
  return TacheCollection.find({}, { sort: { createdAt: -1 } });
};

// Rajoute une Tache dans la collection
export const ajouterTache = (nomTache) => {
    TacheCollection.insert({
    nom: nomTache,
    dateCreation: new Date(),
  });
};

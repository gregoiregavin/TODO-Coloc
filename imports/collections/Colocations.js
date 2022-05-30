import { Mongo } from "meteor/mongo";

export const Colocations = new Mongo.Collection("Colocations");

// Renvoie la liste de toutes les Colocations 
export const toutesLesColocations = () => {
    return Colocations.find({}, { sort: { createdAt: -1 } });
}

// Rajoute une Colocation dans la collection

// export const ajouterColocation = (nomColoc) => {
//     Colocations.insert({
//         nom: nomColoc,
//         dateCreation: new Date(),
//         membres: [{
//             userId: user._id,
//             score: 0,
//         }]
//     });
// };

export const colocId = () => {
    return Colocations.find({});   
}
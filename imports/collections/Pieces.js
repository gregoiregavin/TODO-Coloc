import { Mongo } from "meteor/mongo";
import { Template } from 'meteor/templating';
import '../ui/ecrans/dashboard/dashboard.js'

export const PieceCollection = new Mongo.Collection("pieces");

// Renvoie la liste de toutes les Pieces
export const toutesLesPieces = () => {
  return Pieces.find({}, { sort: { createdAt: -1 } });
};

// Rajoute une Piece dans la collection
export const ajouterPiece = (nomPiece) => {
  Pieces.insert({
    nom: nomPiece,
    dateCreation: new Date(),
  });
};

// Template.piece.events({
//   "submit .piece-form"(event) {
//     // Prevent default browser form submit
//     event.preventDefault();

//     // Get value from form element
//     const target = event.target;
//     const nomPiece = target.nom.value;

//     // Insert a task into the collection
//     PieceCollection.insert({
//       nom : nomPiece,
//       dateCreation: new Date(), // current time
//     });

//     // Clear form
//     target.nom.value = '';
//   }
// })
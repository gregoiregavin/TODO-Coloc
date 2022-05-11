import { Mongo } from "meteor/mongo";

export const PieceCollection = new Mongo.Collection("pieces");

// Renvoie la liste de toutes les Pieces
export const toutesLesPieces = () => {
  return PieceCollection.find({}, { sort: { createdAt: -1 } });
};

// Rajoute une Piece dans la collection
export const ajouterPiece = (nomPiece) => {
  PieceCollection.insert({
    nom: nomPiece,
    dateCreation: new Date(),
  });
};

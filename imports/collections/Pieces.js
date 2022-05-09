import { Mongo } from 'meteor/mongo';
 
export const PieceCollection = new Mongo.Collection('pieces');

// Renvoie la liste de toutes les Pieces 
export const toutesLesPieces = () => {
    return Pieces.find({}, { sort: { createdAt: -1 } });
}

// Rajoute une Piece dans la collection
export const ajouterPiece = (nomPiece) => {

    Pieces.insert({
        nom: nomPiece,
        dateCreation: new Date(),
    });
};
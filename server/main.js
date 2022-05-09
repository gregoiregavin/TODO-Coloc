import { Meteor } from 'meteor/meteor';
import { PieceCollection } from '../imports/collections/Pieces';

const insertPiece = pieceText => PieceCollection.insert({ text: pieceText, userId: user._id, createdAt: new Date(), });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
          username: SEED_USERNAME,
          password: SEED_PASSWORD,
        });
      }
    if (PieceCollection.find().count() === 0) {
      [
       
      ].forEach(pieceText => insertPiece(pieceText, user))
    }
});
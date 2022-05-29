import { Meteor } from 'meteor/meteor';
import { PieceCollection } from '../imports/collections/Pieces';
import { TacheCollection } from '../imports/collections/Taches';
import { Colocations } from '../imports/collections/Colocations';

const insertPiece = pieceText => PieceCollection.insert({ text: pieceText, userId: user._id, createdAt: new Date(), });
const insertTache = tacheText => TacheCollection.insert({ text: tacheText, userId: user._id, createdAt: new Date(), });
const insertColocation = colocationText => ColocationCollection.insert({ text: colocationText, userId: user._id, createdAt: new Date(), });

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
    if (TacheCollection.find().count() === 0) {
      [
       
      ].forEach(tacheText => insertTache(tacheText, user))
    }
    if (Colocations.find().count() === 0) {
      [
       
      ].forEach(colocationText => insertColocation(colocationText, user))
    }
});
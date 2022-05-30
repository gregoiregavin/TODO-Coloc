import { Meteor } from 'meteor/meteor';
import { PieceCollection } from '../imports/collections/Pieces';
import { TacheCollection } from '../imports/collections/Taches';
import { Colocations } from '../imports/collections/Colocations';

const insertPiece = pieceText => PieceCollection.insert({ text: pieceText, userId: user._id, createdAt: new Date(), });
const insertTache = tacheText => TacheCollection.insert({ text: tacheText, userId: user._id, createdAt: new Date(), });
const insertColocation = colocationText => ColocationCollection.insert({ text: colocationText, userId: user._id, createdAt: new Date(), });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

// méthodes qu'on peut appeler depuis le client
Meteor.methods({
  //https://stackoverflow.com/questions/63384610/mongodb-increment-a-value-in-a-nested-array-when-filtering-parent-by-id
  incrementScore({ username, colocId }) {
    Colocations.update(
      {
        _id: colocId,
        "membres.username": username,
      },
      { $inc: { "membres.$.score": 1 } }
    );
  },
});

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
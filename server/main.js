import { Meteor } from 'meteor/meteor';
import { PieceCollection } from 'meteor/meteor';

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
          username: SEED_USERNAME,
          password: SEED_PASSWORD,
        });
      }
    if (PieceCollection.find()) {
       [

        ].forEach(pieceText => insertPiece(pieceText, user))
      }
});
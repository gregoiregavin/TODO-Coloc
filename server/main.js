import { Meteor } from 'meteor/meteor';
import { Pieces } from '../imports/collections/Pieces';

const insertPiece = pieceText => Pieces.insert({ text: pieceText, userId: user._id, createdAt: new Date(), });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
          username: SEED_USERNAME,
          password: SEED_PASSWORD,
        });
      }
    if (Pieces.find()) {
      [
       
      ].forEach(pieceText => insertPiece(pieceText, user))
    }
});
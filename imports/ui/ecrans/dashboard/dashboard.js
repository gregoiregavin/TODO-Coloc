import './dashboard.html'
import '../../components/header/header'
import '../../components/footer/footer'
import { PieceCollection } from '../../../collections/Pieces'

Template.piece.helpers({
    nomPiece(){
        return PieceCollection.find({});
    }
});
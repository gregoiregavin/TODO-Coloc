import './leaderboard.html'
import '../../components/header/header'
import '../../components/footer/footer'
import { Colocations } from '../../../collections/Colocations';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.leaderboard.helpers({
    nomColoc() {
      return Colocations.findOne({ _id: FlowRouter.getParam('colocId') }).nom;
    },
    membres(){
      return Colocations.find(
        { _id: FlowRouter.getParam('colocId') },
        { membres : 1},
        // Ou { "membres.username :1, "membres.score" : 1} ?
      );
    },
});
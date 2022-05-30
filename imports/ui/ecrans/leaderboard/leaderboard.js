import './leaderboard.html'
import '../../components/header/header'
import '../../components/footer/footer'
import { Colocations } from '../../../collections/Colocations';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.leaderboard.helpers({
    nomColoc() {
      return Colocations.findOne({ _id: FlowRouter.getParam('colocId') }).nom;
    },
});

// Template.membre.helpers({
//     membres(){
//         return Colocations.find({ colocId: FlowRouter.getParam('colocId') }).membres;
//     },
// });

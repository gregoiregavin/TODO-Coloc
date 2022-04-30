import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import { PieceCollection } from '/imports/api/PieceCollection';
import { CollocationCollection } from '/imports/api/CollocationCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

const insertPiece = pieceText => PieceCollection.insert({ text: pieceText });

const insertCollocation = collocationText => CollocationCollection.insert({ text: collocationText });

 
Meteor.startup(() => {
  if (TasksCollection.find()) {
    [
      
    ].forEach(insertTask)
  };
  
  if (PieceCollection.find()) {
      ['Salon',
      'Cuisine',
      'Salle de bain',
      'Autres',
      ].forEach(insertPiece)
  };

  if (CollocationCollection.find()) {
    [
    ].forEach(insertCollocation)
};
  

});


import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import { PieceCollection } from '/imports/api/PieceCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

const insertPiece = pieceText => PieceCollection.insert({ text: pieceText });
 
Meteor.startup(() => {
  if (TasksCollection.find()) {
    [
      
    ].forEach(insertTask)
  };
  
  if (PieceCollection.find()) {
      [

      ].forEach(insertPiece)
  };


});


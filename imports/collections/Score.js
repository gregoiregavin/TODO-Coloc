import { Mongo } from "meteor/mongo";

export const ScoreCollection = new Mongo.Collection("Scores");

// Renvoie la liste de tous les scores
export const tousLesScores = () => {
    return ScoreCollection.find({}, { sort: { createdAt: -1 } });
}

// changer le score
export const ajouterScore = () => {
    ScoreCollection.insert({
        userId: user._id,
        dateCreation: new Date(),
        score: 0,
    });
};
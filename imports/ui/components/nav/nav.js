import "./nav.html";
import "./nav.css";


import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.nav.events({
  "click #leaderboard"() {
    const colocId = FlowRouter.getParam("colocId")
    FlowRouter.go(
      "leaderboard", { colocId: colocId }
    )
  },
  "click #dashboard"() {
    const colocId = FlowRouter.getParam("colocId")
    FlowRouter.go(
      "coloc", { colocId: colocId }
    )
  }
});
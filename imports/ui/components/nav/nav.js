import "./nav.html";
import "./nav.css";

import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.nav.events({
  "click #leaderboard"() {
    FlowRouter.go("/leaderboard/:colocId");
    console.log("CLICK");
  },
  "click #dashboard"() {
    FlowRouter.go("/colocation/:colocId");
    console.log("CLICK");
  },
});

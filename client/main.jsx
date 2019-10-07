import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Strabo from '../imports/ui/component/Strabo';
import '../imports/ui/startup/accounts-config';

Meteor.startup(() => {
  render(
    <Router>
      <Strabo />
    </Router>
    , document.getElementById('react-target')
  );
});

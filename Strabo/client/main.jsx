import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Strabo from '../imports/ui/Container/Strabo';

Meteor.startup(() => {
  render(
    <Router>
      <Strabo />
    </Router>
    , document.getElementById('react-target')
  );
});

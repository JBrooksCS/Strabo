import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Strabo from '../imports/ui/Srabo';

Meteor.startup(() => {
  render(<Strabo />, document.getElementById('react-target'));
});

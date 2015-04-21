Meteor.publish('tutorials', function () {
  return Tutorials.find({}, { fields: { content: 0 } });
});
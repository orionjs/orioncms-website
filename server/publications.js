Meteor.publish('tutorials', function () {
  return Tutorials.find({}, { fields: { content: 0 } });
});

Meteor.publish('tutorial', function (slug) {
  check(slug, String); 
  return Tutorials.find({ slug: slug });
});
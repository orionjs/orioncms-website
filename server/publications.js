Meteor.publish('tutorials', function () {
  return Tutorials.find({}, { fields: { content: 0 } });
});

Meteor.publish('tutorial', function (slug) {
  check(slug, String); 
  return Tutorials.find({ slug: slug });
});

Meteor.publish('docs', function () {
  return Docs.find({}, { fields: { content: 0 } });
});

Meteor.publish('doc', function (identifier) {
  check(identifier, String); 
  return Docs.find({ identifier: identifier });
});
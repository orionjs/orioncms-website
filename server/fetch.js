Meteor.methods({
  fetchTutorials: function () {
    var indexFile = 'https://raw.githubusercontent.com/orionjs/tutorials/master/tutorials.json';
    var list = JSON.parse(HTTP.get(indexFile).content);
    Tutorials.remove({});
    list.map(function (tutorial) {
      tutorial.content = HTTP.get(tutorial.content).content;
      Tutorials.insert(tutorial);
    });
    console.log(list.length + ' tutorials syncronized');
  }
});


Meteor.call('fetchTutorials');
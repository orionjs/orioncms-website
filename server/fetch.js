fetchTutorials = function() {
  var indexFile = 'https://raw.githubusercontent.com/orionjs/tutorials/master/tutorials.json';
  var list = JSON.parse(HTTP.get(indexFile).content);
  Tutorials.remove({});
  list.map(function (tutorial) {
    try {
      tutorial.content = HTTP.get(tutorial.content).content;
      Tutorials.insert(tutorial);
    } catch (e) {
      console.log(e);
    }
  });
}

fetchDocs = function() {
  var indexFile = 'https://raw.githubusercontent.com/orionjs/documentation/master/documentation.json';
  var list = JSON.parse(HTTP.get(indexFile).content);
  Docs.remove({});
  list.map(function (doc) {
    try {
      var url = 'https://raw.githubusercontent.com/orionjs/documentation/master/docs/' + doc.identifier + '.md';
      doc.content = HTTP.get(url).content;
      Docs.insert(doc);
    } catch (e) {
      console.log(e);
    }
  });
}
Docs = new Ground.Collection(null);
Docs.didSync = false;
Options.init('doclinks');

Docs.sync = function() {
  var self = this;
  if (Docs.didSync) {
    return;
  }
  Docs.didSync = true;

  var url = filesUrl + 'orionjs/documentation/master/documentation.json';

  HTTP.get(url, function(error, response) {
    if (!error) {
      var data = JSON.parse(response.content);
      var list = data.pages;
      Options.set('doclinks', data.links);
      _.each(list, function(value, key, list){
        value.url = filesUrl + 'orionjs/documentation/master/docs/' + value.file;
        self.upsert({ slug: value.slug }, { $set: value });
      });
    }
  });
}

Docs.syncItem = function(slug) {
  var self = this;
  self.sync();
  Tracker.autorun(function() {
    var item = self.findOne({ slug: slug });
    if (item) {
      if (item.content) {
        return;
      }
      HTTP.get(item.url, function(error, response) {
        if (!error) {
          self.update({ slug: slug }, { $set: { content: response.content } });
        }
      });
    }
  })
}
Tutorials = new Ground.Collection('tutorials', { connection: null });

Tutorials.sync = function() {
  var self = this;
  if (self.find().count() != 0) {
    return;
  }

  var url = filesUrl + 'orionjs/tutorials/master/tutorials.json';

  HTTP.get(url, function(error, response) {
    if (!error) {
      var list = JSON.parse(response.content);
      _.each(list, function(value, key, list){
        value.url = filesUrl + 'orionjs/tutorials/master/tutorials/' + value.file;
        self.upsert({ slug: value.slug }, { $set: value });
      });

    }
  });
}

Tutorials.syncItem = function(slug) {
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
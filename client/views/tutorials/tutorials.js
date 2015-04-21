Template.tutorialsIndex.onRendered(function() {
  var self = this;
  var subscription = this.subscribe('tutorials');
  this.autorun(function() {
    Tutorials.find()
    if (subscription.ready()) {
      self.$('.masonry').masonry({
        columnWidth: '.col',
        itemSelector: '.col',
      });
      imagesLoaded('.masonry', function() {
        self.$('.masonry').masonry({
          columnWidth: '.col',
          itemSelector: '.col',
        });
      });
    }
  })
})

Template.tutorialsIndex.helpers({
  tutorials: function () {
    return Tutorials.find();
  }
});

Template.tutorialsShow.onRendered(function() {
  var slug = Router.current().params.slug;
  this.subscribe('tutorial', slug);
})

Template.tutorialsShow.helpers({
  tutorial: function () {
    var slug = Router.current().params.slug;
    return Tutorials.findOne({ slug: slug });
  }
});
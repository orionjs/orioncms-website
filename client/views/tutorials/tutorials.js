Template.tutorialsIndex.onRendered(function() {
  Tutorials.sync();
  imagesLoaded('.masonry', function() {
    self.$('.masonry').masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
  });
})

Template.tutorialsIndex.helpers({
  tutorials: function () {
    return Tutorials.find();
  }
});

Template.tutorialsShow.onRendered(function() {
  var slug = Router.current().params.slug;
  Tutorials.syncItem(slug);
})

Template.tutorialsShow.helpers({
  tutorial: function() {
    var slug = Router.current().params.slug;
    return Tutorials.findOne({ slug: slug });
  }
});
Template.tutorialsIndex.onRendered(function() {
  this.subscribe('tutorials');
  this.$('.masonry').masonry({
    columnWidth: '.col',
    itemSelector: '.col',
  });
})

Template.tutorialsIndex.helpers({
  tutorials: function () {
    return Tutorials.find();
  }
});
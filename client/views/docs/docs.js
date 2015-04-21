Template.docsLayout.onRendered(function() {
  Docs.syncItem('introduction');
})

Template.docsNavbar.onRendered(function() {
  this.autorun(function() {
    Options.get('doclinks');
    Tracker.afterFlush(function () {
      $('.collapsible').collapsible();
    });
  })
})

Template.docsNavbar.helpers({
  links: function () {
    return Options.get('doclinks');
  },
  getPath: function() {
    var route = Router.path('docs.show', this);
    return route;
  }
});

Template.docsShow.onRendered(function() {
  this.autorun(function() {
    var slug = Router.current().params.slug;
    Docs.syncItem(slug);
  })
})

Template.docsShow.helpers({
  doc: function() {
    var slug = Router.current().params.slug;
    return Docs.findOne({ slug: slug });
  }
});
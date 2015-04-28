Router.route('/', {
  layoutTemplate: 'layout',
  name: 'home',
})

Router.route('/tutorials', {
  layoutTemplate: 'layout',
  name: 'tutorials.index',
})

Router.route('/tutorials/:slug', {
  layoutTemplate: 'layout',
  name: 'tutorials.show',
})

Router.route('/docs/:slug', {
  layoutTemplate: 'docsLayout',
  name: 'docs.show',
})



Router.route('/tutorials-hook', function () {
  var res = this.response;
  res.end('Tutorials updated\n');
  fetchTutorials();
}, {where: 'server'});

Router.route('/docs-hook', function () {
  var res = this.response;
  res.end('Documentation updated\n');
  fetchDocumentations();
}, {where: 'server'});
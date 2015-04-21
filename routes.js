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

Router.route('/tutorials-hook', function () {
  fetchTutorials();
  var res = this.response;
  res.end('Tutorials updated\n');
}, {where: 'server'});
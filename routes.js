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
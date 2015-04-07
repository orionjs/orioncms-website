var doRouteAction = function(router, url) {
	router.layout('layout');
	router.render('loading');
	Meteor.call('getReadme', url, function(error, result) {
		router.render('content', {data: {content: result}});
	})
}

Router.route('/', function() {
	this.render('home');
}, { name: 'home' });

Router.route('/docs', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/README.md');
}, { name: 'intro' });

Router.route('/docs/entities', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/core/entities/README.md');
}, { name: 'entities' });

Router.route('/docs/dictionary', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/core/dictionary/README.md');
}, { name: 'dictionary' });

Router.route('/docs/attributes', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/core/attributes/README.md');
}, { name: 'attributes' });

Router.route('/docs/users', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/core/users/README.md');
}, { name: 'users' });

Router.route('/docs/configuration', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/core/config/README.md');
}, { name: 'configuration' });

Router.route('/docs/languages', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/core/languages/README.md');
}, { name: 'languages' });

Router.route('/docs/api', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/core/api/README.md');
}, { name: 'api' });

Router.route('/docs/pages', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/pages/README.md');
}, { name: 'pages' });

Router.route('/docs/relationships', function() {
	var router = this;
	router.layout('layout');
	router.render('loading');
	Meteor.call('getReadme', 'https://raw.githubusercontent.com/orionjs/orion/master/relationships/README.md', function(error, result1) {
		Meteor.call('getReadme', 'https://raw.githubusercontent.com/orionjs/orion/master/users-attribute/README.md', function(error, result2) {
			var result = result1 + result2;
			router.render('content', {data: {content: result}});
		})
	})
}, { name: 'relationships' });

Router.route('/docs/filesystem', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/filesystem/README.md');
}, { name: 'filesystem' });

Router.route('/docs/file-attribute', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/file-attribute/README.md');
}, { name: 'file_attribute' });

Router.route('/docs/text-editors', function() {
	doRouteAction(this, 'https://raw.githubusercontent.com/orionjs/orion/master/froala-editor/README.md');
}, { name: 'text_editors' });
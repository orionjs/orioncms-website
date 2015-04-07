Meteor.methods({
	getReadme: function(url) {
		return HTTP.get(url).content;
	}
})
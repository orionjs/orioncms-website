Template.about.onRendered(function () {
  $('ul.tabs').tabs();
  HTTP.get('https://api.github.com/repos/orionjs/orion/stats/contributors', function (error, response) {
    if (!error) {
      Session.set('contributors_core', response.data.reverse());
    }
  });

  HTTP.get('https://api.github.com/repos/orionjs/tutorials/stats/contributors', function (error, response) {
    if (!error) {
      Session.set('contributors_tutorials', response.data.reverse());
    }
  });

  HTTP.get('https://api.github.com/repos/orionjs/examples/stats/contributors', function (error, response) {
    if (!error) {
      Session.set('contributors_examples', response.data.reverse());
    }
  });
});

Template.about.helpers({
  gravatarFor: function (email) {
    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=500';
  },

  coreContribution: function () {
    return Session.get('contributors_core');
  },

  docsContribution: function () {
    return Session.get('contributors_docs');
  },

  tutorialsContribution: function () {
    return Session.get('contributors_tutorials');
  },

  examplesContribution: function () {
    return Session.get('contributors_examples');
  },
});

Template.contribution.helpers({
  format: function (number) {
    number += '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    return x1 + x2;
  },

  getCommits: function () {
    return this.total == 1 ? '1 commit' : this.total + ' commits';
  },

  getAdditions: function () {
    var count = 0;
    _.each(this.weeks, function (week) {
      count += week.a;
    });

    return count;
  },

  getDeletes: function () {
    var count = 0;
    _.each(this.weeks, function (week) {
      count += week.d;
    });

    return count;
  },
});

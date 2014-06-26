Template.home.events({
  'click #btn-user-data': function(e) {
    Meteor.call('getUserData', function(err, data) {
      console.log("hello");
      $('#result').text(JSON.stringify(data, undefined, 4));
    });
  }
});

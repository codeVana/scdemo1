
var Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {


  Template.posts.helpers({
    posts: function() {
      return Posts.find();
    }
  })

  Template.form.events({
    'click #submit': function(e){
      e.preventDefault();
      var title = $('#title').val();
      var body = $('#body').val();

      Posts.insert({
        title: title,
        body: body
      });

      $('#title, #body').val('');
    }
  });
}

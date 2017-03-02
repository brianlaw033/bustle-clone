import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submit(){
    var newStory = {
      author: this.get('author')? this.get('author') : "",
      title: this.get('title')? this.get('title') : "",
      content: this.get('content')? this.get('content') : "",
      image: this.get('image')? this.get('image') : ""
    };
    this.sendAction('submit', newStory);
  }
  }

});

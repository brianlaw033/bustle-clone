import Ember from 'ember';

export default Ember.Component.extend({
  showEdit: false,
  actions:{
    editNew(){
      this.set('showEdit',true);
    },

    update(news){
      var newNews = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('showEdit', false);
      this.sendAction('update', news, newNews);
    }

  }


});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('new');
  },
  actions:{
    submit(newStory){
      var newNew = this.store.createRecord('new', newStory);
      newNew.save();
      this.transitionTo('index');
    }
  }
});

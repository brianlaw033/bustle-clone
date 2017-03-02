import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('new', params.new_id);
  },
  actions:{
  update(news, params){
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        news.set(key,params[key]);
      }
    });
    news.save();
  }
}
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createStaff(staff) {
      return this.get("store").createRecord("staff", {
        ...staff
      }).save();
    }
  }
});

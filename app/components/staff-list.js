import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    this.get('getStaffList')()
      .then( res => {
        this.set('staffCollection', res);
      });
  },

  actions: {
    handleRemoveStaff(id) {
      this.get("removeStaff")(id)
        .then( res => {
          // console.log("staff removed successfull\nresponse:");
          // console.log(res);
        })
        .catch( err => {
          console.log(err);
        });
    }
  }
});

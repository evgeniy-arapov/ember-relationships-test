import Ember from 'ember';

export default Ember.Component.extend({
  newStaff: {},
  actions: {
    handleFirstNameChange(value) {
      this.newStaff.firstname = value;
    },
    handleIsActiveChange(event) {
      this.newStaff.isActive = event.target.checked;
    },
    handleBranchChange(event) {
      this.newStaff.branchId = event.target.value;
    },
    createStaff(staff) {
      this.get('createStaff')(staff)
        .then( res => {
          // console.log(res);
          let data = res.data;
          this.set('createdStaff', data);
        })
        .catch( err => {
          console.log(err);
        });
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  staffData: {},
  actions: {
    handleFirstNameChange(value) {
      this.staffData.firstname = value;
    },
    handleIsActiveChange(event) {
      this.staffData.isActive = event.target.checked;
    },
    handleBranchChange(value) {
      this.staffData.branchId = value;
    },
    createStaff(staff) {
      this.get('createStaff')(staff)
        .then(res => {
          console.log(res);
          this.set('createdStaff', { ...res.data })
        })
        .catch( err => {
          console.log(err);
        })
    }
  }
});

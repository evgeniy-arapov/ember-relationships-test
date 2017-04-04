import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createStaff(staff) {
      let options = {...staff};
      let newStaff = this.get("store").createRecord("staff", {...options});
      if(staff.branchId !== 0 ) {
        let branch = this.get("store").peekRecord("branch", staff.branchId);
        newStaff.set('branch', branch);
      }

      return newStaff.save();
    },
    removeStaff(id) {
      let removableStaff = this.get('store').peekRecord("staff", id);
      removableStaff.deleteRecord();
      let isDeleted = removableStaff.get("isDeleted");
      // console.log(`isDeleted - ${isDeleted}`);

      return removableStaff.save();
    },
    getStaffList() {
      return this.get('store').findAll('staff');
    }
  }
});

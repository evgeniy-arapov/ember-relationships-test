import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createStaff(newStaffAttributes, staffSchedules) {

      let store = this.get("store");
      let options = { ...newStaffAttributes };
      let newStaff = this.get("store").createRecord("staff", { ...options });

      if (newStaffAttributes.branchId !== 0) {
        let branch = this.get("store").peekRecord("branch", newStaffAttributes.branchId);
        newStaff.set('branch', branch);
      }

      let newStaffJSON = newStaff.serialize();
      newStaff.destroyRecord();

      if(staffSchedules.data.length > 0) {
        newStaffJSON.data.relationships["staff-schedules"] = staffSchedules;
      }

      let host = this.store.adapterFor('application').get('host');
      let headers = this.store.adapterFor('application').get('headers');

      return Ember.$.ajax({
        data: JSON.stringify(newStaffJSON),
        method: "POST",
        url: `${host}/branches/${newStaffJSON.data.relationships.branch.data.id}/staff`,
        headers
      })
        .then(createdStaff => {
          console.log(createdStaff);
          this.get("store").push(createdStaff);
          return createdStaff;
        })
        .catch(err => {
          console.log(err);
        });
    },
    removeStaff(id) {
      let removableStaff = this.get('store').peekRecord("staff", id);
      removableStaff.deleteRecord();
      let isDeleted = removableStaff.get("isDeleted");

      return removableStaff.save();
    },
    getStaffList() {
      return this.get('store').findAll('staff');
    },

  }
});

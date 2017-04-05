import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    let newStaffAttributes = {
      firstname: "",
      isActive: false,
      branchId: 0
    };
    let staffSchedules = {
      data: []
    };
    let schedule = {
      week_day: 0,
      from: "8:00:00",
      to: "17:00:00"
    };

    this.set("newStaffAttributes", newStaffAttributes);
    this.set("staffSchedules", staffSchedules);
    this.set("schedule", schedule);
  },
  actions: {
    handleFirstNameChange(value) {
      this.set("newStaffAttributes.firstname", value);
    },
    handleIsActiveChange(event) {
      this.set("newStaffAttributes.isActive", event.target.checked);
    },
    handleBranchChange(event) {
      this.set("newStaffAttributes.branchId", parseInt(event.target.value));
    },
    nandleSchduleChange(event) {
      let name = event.target.name;
      this.set(`schedule.${name}`, event.target.value);
    },
    handleAddSchedule(value) {
      let newSchedule = {
        type: "staff-schedules",
        attributes: {...value}
      };
      this.staffSchedules.data.push(newSchedule);
      this.rerender();
    },
    handleRemoveSchedule(index) {
      this.staffSchedules.data.splice(index, 1);
      this.rerender();
    },
    createStaff() {
      this.get('createStaff')(this.newStaffAttributes, this.staffSchedules)
        .then(res => {
          this.set('createdStaff', res.data.attributes);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});

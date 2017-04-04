import DS from 'ember-data';

let { Model, attr, hasMany } = DS;

export default Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  isActive: attr('boolean'),
  phone: attr('string'),
  email: attr('string'),
  photo: attr('string'),
  position: attr('string'),
  description: attr('string'),
  smsNotification: attr('boolean'),
  emailNotification: attr('boolean'),
  notificationOnline: attr('boolean'),
  notificationByAdmin: attr('boolean'),
  notificationUpdate: attr('boolean'),
  notificationWithCustomerData: attr('boolean'),

  branchId: attr('number', { defaultValue: 0 }), // temp, must be releationship

  staffSchedules: hasMany('staff-schedule'),
  staffBreaks: hasMany('staff-break')
});
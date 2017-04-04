import DS from 'ember-data';

let { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  firstname: attr('string'),
  lastname: attr('string', { defaultValue: "not blank"}),
  isActive: attr('boolean', { defaultValue: false}),
  phone: attr('string', { defaultValue: "0123456789"}),
  email: attr('string', { defaultValue: "not@blank.mail"}),
  photo: attr('string'),
  position: attr('string'),
  description: attr('string'),
  smsNotification: attr('boolean', { defaultValue: false}),
  emailNotification: attr('boolean', { defaultValue: false}),
  notificationOnline: attr('boolean', { defaultValue: false}),
  notificationByAdmin: attr('boolean', { defaultValue: false}),
  notificationUpdate: attr('boolean', { defaultValue: false}),
  notificationWithCustomerData: attr('boolean', { defaultValue: false}),

  branch: belongsTo('branch'),
  staffSchedules: hasMany('staff-schedule'),
  staffBreaks: hasMany('staff-break')
});
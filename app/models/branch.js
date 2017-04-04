import DS from 'ember-data';

let { attr, Model, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  address: attr('string'),
  phone: attr(),
  email: attr(),
  timeZone: attr('number'),
  currency: attr('string'),
  logo: attr('string'),
  facebook: attr('string'),
  vkontakte: attr('string'),
  twitter: attr('string'),
  subDomain: attr('string'),
  webAddress: attr('string'),

  bookingPolicies: hasMany('booking-policie'),
  branchSchedules: hasMany('branch-schedule')
});

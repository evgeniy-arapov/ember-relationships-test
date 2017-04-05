import DS from 'ember-data';

let { Model, attr, belongsTo } = DS;

export default Model.extend({
  week_day: attr('number'),
  from: attr('string'),
  to: attr('string'),

  staff: belongsTo('staff')
});
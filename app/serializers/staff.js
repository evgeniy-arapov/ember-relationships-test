import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize(snapshot, options) {
    var json = this._super(...arguments);
    delete json.data.attributes.branch_id;

    return json;
  }
});
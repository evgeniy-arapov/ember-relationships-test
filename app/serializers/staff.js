import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments);

    return json;
  }
});
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType(modelName) {
    return `branches/0/${modelName}`;
  },
  urlForCreateRecord(modelName, snapshot) {
    let baseUrl = this.buildURL();
    let branchId = snapshot.record.get('branch.id') || 0;
    return `${baseUrl}/branches/${branchId}/${modelName}`;
  }
});
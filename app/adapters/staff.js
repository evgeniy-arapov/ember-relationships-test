import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    let baseUrl = this.buildURL();
    console.log(snapshot);
    return `${baseUrl}/branches/${snapshot.attributes.branchId}/${modelName}`;
  },
  // namespace: "branches/0"
});

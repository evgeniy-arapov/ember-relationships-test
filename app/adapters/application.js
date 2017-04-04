import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  headers: {
    "Content-Type": "application/vnd.api+json",
    "Accept": "application/vnd.api+json",
    "Authorization": "Bearer Mmyo8g3NTUaVlB6LJujw5VjQLQM_dzHI_1491324280"
  },
  host: "http://api.bookashka.tsg.com.ua"
});

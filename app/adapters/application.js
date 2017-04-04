import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  headers: {
    "Content-Type": "application/vnd.api+json",
    "Accept": "application/vnd.api+json",
    "Authorization": "Bearer slvr3oA2H4gG7yzGe9lHeNGOjvA8HTvk"
  },
  host: "https://private-anon-865f2946e9-bookashka1.apiary-mock.com"
});

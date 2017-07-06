const Service = require('./index');

// Take this credentials from https://location-service.cagatay.me
let service = new Service({name:'marvelous-hitman', token: '3dd0ac06-6dda-4d31-a56c-785c5ef80831'});

// service.addLocation({
//   key: `ownId`, // That param is for end developer uniq identifier.
//   lat: 37.75153915304526,
//   lon: 29.101365375671318
// }, msg => {
//   console.log(msg);
// })


// service.nearby({
//   lat: 37.75153915304526,
//   lon: 29.101365375671318,
//   depth: 1, // Default 1
//   limit: 20 // Default 20
// }, msg => {
//   console.log(msg);
// })
//
// service.deleteLocation({
//   key: 'ownId',
// }, msg => {
//   console.log(msg);
// })
//
service.deleteUser({}, msg => {
  console.log(msg);
})

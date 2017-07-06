# Location Service Client :cloud:

# Install

```bash
# Even you can use npm: npm i -S location-client
yarn add location-client
```

# Usage

**Require client**

```javascript
const Service = require('location-client');
```

**Create new service instance**

_You can get credentials [click](https://location-service.cagatay.me)!_

```javascript
let service = new Service({name:'exceptional-lucky', token: 't6UoUezpcUaaXTx5AAAD'});
```

**Add location**

```javascript
service.addLocation({
  key: `ownId`, // That param is for end developer uniq identifier.
  lat: 37.75153915304526,
  lon: 29.101365375671318
}, msg => {
  console.log(msg);
})
/*
  Out:
  {
    status: true,
    location: { lat: 37.75153915304526, lon: 29.101365375671318 }
   }
*/
```

**Get nearby locations**

```javascript
service.nearby({
  lat: 37.75153915304526,
  lon: 29.101365375671318,
  depth: 1, // Default 1
  limit: 20 // Default 20
}, msg => {
  console.log(msg);
})
/*
  Out:
  { status: true,
    locations:
     [ { id: 2,
         latitude: 37.75153915304526,
         longitude: 29.10136537567132,
         distance: 0,
         token: 'ownId' } ],
    desired: { lat: 37.75153915304526, lon: 29.101365375671318 } }
*/
```

**Delete location**

```javascript
service.deleteLocation({
  key: 'ownId',
}, msg => {
  console.log(msg);
})
/*
  Out:
  { status: true, message: 'Deleted location' }
*/
```

**Delete user**

```javascript
service.deleteUser({}, msg => {
  console.log(msg);
})
/*
  Out:
  { status: true, message: 'Deleted user' }
*/
```

# License

[Çağatay Çalı](https://cagatay.me)

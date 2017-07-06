var socket = require('socket.io-client')

class Service {
  constructor(obj) {
    this.host = obj.host || 'https://location-service.cagatay.me';
    this.token = obj.token;
    this.name = obj.name;
    this.socket = socket(this.host);
  }

  createUser(data, callback) {
    this.socket.emit('createUser', data)
    this.socket.on('info:create', (msg) => {
      callback(msg)
    })
  }

  addLocation(data, callback) {
    this.socket.emit('addLocation', {
      name: this.name,
      token: this.token,
      key: data.key,
      lat: data.lat,
      lon: data.lon
    })
    this.socket.on('add:location', (msg) => {
      callback(msg)
    })
  }

  nearby(data, callback) {
    this.socket.emit('nearby', {
      name: this.name,
      token: this.token,
      lat: data.lat,
      lon: data.lon,
      depth: data.depth || 1, // Default is 1
      limit: data.limit || 20,
    })
    this.socket.on('nearby', (msg) => {
      callback(msg)
    })
  }

  deleteLocation(data, callback) {
    this.socket.emit('deleteLocation', {
      token: this.token,
      key: data.key
    })
    this.socket.on('info:delete:location', (msg) => {
      callback(msg)
    })
  }

  deleteUser(data, callback) {
    this.socket.emit('deleteUser', {
      token: this.token,
      name: this.name
    })
    this.socket.on('info:delete:user', (msg) => {
      callback(msg)
    })
  }

}

module.exports = Service;

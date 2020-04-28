class GeoCoder {
  getLatLng(address) {
    switch (address) {
      case 'Amsterdam' :
        return '52.3700° N, 4.8900° E';
      case 'London' :
        return '51.5171° N, 0.1062° W';
      case 'Paris' :
        return '48.8742° N, 2.3470° E';
      case 'Berlin' :
        return '52.5233° N, 13.4127° E';
      default :
        return ''
    }
  }
}

class GeoProxy {
  constructor() {
    this.geoCoder = new GeoCoder();
    this.geocache = new Map();
  }

  getLatLng(address) {
    if (!this.geocache.has(address)) {
      this.geocache.set(address, this.geoCoder.getLatLng(address));
    }
    console.log(`${address}: ${this.geocache.get(address)}`);
    return this.geocache.get(address);
  }

  getCount() {
    return this.geocache.size;
  }
}

const geo = new GeoProxy();

geo.getLatLng('Paris');
geo.getLatLng('London');
geo.getLatLng('London');
geo.getLatLng('London');
geo.getLatLng('London');
geo.getLatLng('Amsterdam');
geo.getLatLng('Amsterdam');
geo.getLatLng('Amsterdam');
geo.getLatLng('Amsterdam');
geo.getLatLng('London');
geo.getLatLng('London');

console.log(`Cache size: ${geo.getCount()}`);

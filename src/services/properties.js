import axios from 'axios';

const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'TBD'
    : 'http://localhost:5000/properties';

class PropertiesService {
  service = axios.create({
    baseURL: endpoint,
    timeout: 1000
  });

  create(body) {
    const path = '/';
    return this.service.post(path, body);
  }

  getAll() {
    const path = '/';
    return this.service.get(path);
  }
  get(id) {
    const path = `/${id}`;
    return this.service.get(path);
  }

  update(id, body) {
    const path = `/${id}`;
    return this.service.patch(path, body);
  }

  delete(id) {
    const path = `/${id}`;
    return this.service.delete(path);
  }
}

const propertiesService = new PropertiesService();

export default propertiesService;

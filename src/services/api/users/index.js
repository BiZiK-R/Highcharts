import Endpoint from '@src/services/api/endpoint';
import mc from "merge-change";
// import buildSearchParams from '@src/utils/build-search-params';

class UsersEndpoint extends Endpoint{

  defaultConfig() {
    return mc.patch(super.defaultConfig(), {
      url: '/users',
    });
  }

  getRepos(user) {
    return this.request({
      method: 'GET',
      url: `${this.config.url}/${user}/repos`,
    });
  }
}

export default UsersEndpoint;

import urljoin from 'url-join';
import reduce from 'lodash/reduce';
import forEach from 'lodash/forEach';
// ---
export default ({apis, endpoint, version}) => {
  if (version === 'v3' || version === 'util') {
    const mapApi = reduce(
      apis,
      (prev, curr) => {
        forEach(curr, (value, key) => {
          prev[key] = urljoin(endpoint, urljoin(value));
        });
        return prev;
      },
      {},
    );
    return mapApi;
  } else {
    const mapApi = reduce(
      apis,
      (prev, curr) => {
        forEach(curr, (value, key) => {
          prev[key] = urljoin(endpoint, urljoin(value));
        });
        return prev;
      },
      {},
    );

    return mapApi;
  }
};

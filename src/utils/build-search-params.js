export default function buildSearchParams(search) {
  const searchParams = new URLSearchParams();
  for (const param in search) {
    if (search[param]) {
      if (typeof search[param] === 'object' && !Array.isArray(search[param])) {
        search[param].forEach((val) => {
          searchParams.append(param, val);
        });
      } else {
        searchParams.append(param, search[param]);
      }
    }
  }
  return searchParams.toString();
}

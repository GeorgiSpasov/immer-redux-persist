const get = async (url: string) => {
  const response = (
    await fetch(url, {
      method: 'GET',
      headers: {'Content-type': 'application/json;charset=UTF-8'},
    })
  ).json();
  return response;
};

export default {
  get,
};

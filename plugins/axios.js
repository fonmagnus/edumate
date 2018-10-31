const ERR_CODE_LIST = [401];

export default ({
  $axios, store, env, redirect,
}) => {
  const URL_LIST = [
  ];
  $axios.onRequest((config) => {
    URL_LIST.forEach((val) => {
      if (!env.proxy && config.url.includes(`${val.url}/`)) {
        const segments = config.url.split(val.url);
        config.url = `${val.base}${segments[1]}`;
      }
    });

    const { token } = store.state.auth;
    if (token && token.access_token) {
      const { url } = config;
      const separator = url.includes('?') ? '&' : '?';
      config.url = `${url}${separator}access_token=${token.access_token}`;
    }
    return config;
  });
};

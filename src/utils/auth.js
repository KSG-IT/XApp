const auth = {
  login (username, password) {
    return Promise.resolve(true)
  },

  logout () {
    return Promise.resolve(true)
  },
};

export default auth;

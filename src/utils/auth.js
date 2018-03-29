// @flow

const auth = {
  login (username: string, password: string): Promise<Object> {
    return Promise.resolve({data: "true"})
  },

  logout (): Promise<Object> {
    return Promise.resolve({data: "true"})
  },
};

export default auth;

import testDatabase from '../testDatabase';
import User from '../model/user';

const loadUsersUtils = {
  loadUser(id: number): ?Promise<User> {
    let result = testDatabase.find((user) => {
      user.__proto__ = User.prototype;

      return user.getId() === id;
    });

    if (result) {
      result.__proto__ = User.prototype;
      //TODO: Flow is not happy here, so disabled flow for now..
      return Promise.resolve({ data: result });
    }
  }
};

export default loadUsersUtils;
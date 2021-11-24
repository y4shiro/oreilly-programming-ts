// 6.1.2.1

// サーバーに保存済みの既存ユーザ
type ExistingUser = {
  id: number;
  name: string;
};

//  サーバに保存していない新規ユーザ
type NewUser = {
  name: string;
};

function deleteUser(user: { id?: number; name: string }) {
  delete user.id;
}

const existingUser: ExistingUser = {
  id: 123456,
  name: 'Im a User',
};

deleteUser(existingUser);

type LegacyUser = {
  id?: number | string;
  name: string;
};
const legacyUser: LegacyUser = {
  id: '123456',
  name: 'Taro',
};
deleteUser(legacyUser);

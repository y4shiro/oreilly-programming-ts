// 6.1.2.1

// // サーバーに保存済みの既存ユーザ
// type ExistingUser = {
//   id: number;
//   name: string;
// };

// //  サーバに保存していない新規ユーザ
// type NewUser = {
//   name: string;
// };

// function deleteUser(user: { id?: number; name: string }) {
//   delete user.id;
// }

// const existingUser: ExistingUser = {
//   id: 123456,
//   name: 'Im a User',
// };

// deleteUser(existingUser);

// type LegacyUser = {
//   id?: number | string;
//   name: string;
// };
// const legacyUser: LegacyUser = {
//   id: '123456',
//   name: 'Taro',
// };
// deleteUser(legacyUser);

// 6.1.2.2
class Animal {}
class Bird extends Animal {
  chirp() {
    console.log('ぐえー');
  }
}
class Crow extends Bird {
  caw() {
    console.log('caw');
  }
}

function chirp(bird: Bird): Bird {
  bird.chirp();
  return bird;
}

// chirp(new Animal()); // エラー
chirp(new Bird());
chirp(new Crow());

// function clone(f: (b: Bird) => Bird): void {}
function clone(f: (b: Bird) => Bird): void {
  const parent = new Bird();
  const babyBird = f(parent);
  babyBird.chirp();
}

// function birdToBird(b: Bird): Bird {}
// clone(birdToBird);

// function birdToCrow(d: Bird): Crow {}
// clone(birdToCrow);

// function birdToAnimal(d: Bird): Animal {}
// clone(birdToAnimal);

// function AnimalToBird(a: Animal): Bird {}
// clone(AnimalToBird);

// function CrowToBird(c: Crow): Bird {
//   c.caw();
//   return new Bird();
// }
// clone(CrowToBird);

// 6.1.4
// let a = 'x'; // string
// let b = 3; // number
// var c = true; // boolean
// const d = { x: 3 }; // {x: number}

// enum E {
//   X,
//   Y,
//   Z,
// }
// let e = E.X; // E

// const a = 'x'; // 'x'
// const b = 3; // 3
// const c = true; // true

// enum E {
//   X,
//   Y,
//   Z,
// }
// const e = E.X; // E.X

// const a = 'x'; // 'x'
// let b = a; // string

// const c: 'x' = 'x'; // 'x'
// let d = c; // 'x'

// let a = null; // any
// a = 3; // any
// a = 'b'; // any

function x() {
  let a = null; // any
  a = 3; // any
  a = 'b'; // any
  return a;
}
x(); // string

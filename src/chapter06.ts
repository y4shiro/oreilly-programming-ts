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

// function x() {
//   let a = null; // any
//   a = 3; // any
//   a = 'b'; // any
//   return a;
// }
// x(); // string

// 6.1.4.1
// let a = { x: 3 }; // { x: number }
// let b: { x: 3 }; // { x: 3 }
// let c = { x: 3 } as const; // { readonly x: 3 }

// let d = [1, { x: 2 }]; // (number | { x: number })[]
// let e = [1, { x: 2 }] as const; // readonly [1, { readonly x: 2 }]

// 6.1.5
// type Unit = 'cm' | 'px' | '%';
// const units: Unit[] = ['cm', 'px', '%'];

// function parseUnit(value: string): Unit | null {
//   for (let i = 0; i < units.length; i++) {
//     if (value.endsWith(units[i])) {
//       return units[i];
//     }
//   }
//   return null;
// }

// type Width = {
//   unit: Unit;
//   value: number;
// };

// function parseWidth(width: number | string | null | undefined): Width | null {
//   if (width == null) return null;

//   if (typeof width === 'number') {
//     return { unit: 'px', value: width };
//   }

//   const unit = parseUnit(width);
//   if (unit) {
//     return { unit, value: parseFloat(width) };
//   }

//   return null;
// }

// 6.1.5.1

// type UserTextEvent = { value: string; target: HTMLInputElement };
// type UserMouseEvent = { value: [number, number]; target: HTMLElement };
// type UserEvent = UserTextEvent | UserMouseEvent;

// function handle(event: UserEvent) {
//   if (typeof event.value === 'string') {
//     event.value; // string
//     event.target; // HTMLInputElement | HTMLElement
//     // ...
//     return;
//   }
//   event.value; // [number, number]
//   event.target; // HTMLInputElement | HTMLElement
// }

type UserTextEvent = {
  type: 'TextEvent';
  value: string;
  target: HTMLInputElement;
};
type UserMouseEvent = {
  type: 'MouseEvent';
  value: [number, number];
  target: HTMLElement;
};
type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
  if (event.type === 'TextEvent') {
    event.value; // string
    event.target; // HTMLInputElement
    // ...
    return;
  }
  event.value; // [number, number]
  event.target; // HTMLElement
}

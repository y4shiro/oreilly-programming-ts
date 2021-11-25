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

// type UserTextEvent = {
//   type: 'TextEvent';
//   value: string;
//   target: HTMLInputElement;
// };
// type UserMouseEvent = {
//   type: 'MouseEvent';
//   value: [number, number];
//   target: HTMLElement;
// };
// type UserEvent = UserTextEvent | UserMouseEvent;

// function handle(event: UserEvent) {
//   if (event.type === 'TextEvent') {
//     event.value; // string
//     event.target; // HTMLInputElement
//     // ...
//     return;
//   }
//   event.value; // [number, number]
//   event.target; // HTMLElement
// }

// 6.2
// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
// type Day = Weekday | 'Sat' | 'Sun';

// function getNextDay(w: Weekday): Day {
//   switch (w) {
//     case 'Mon':
//       return 'Tue';
//     case 'Tue':
//       return 'Wed';
//     case 'Wed':
//       return 'Thu';
//     case 'Thu':
//       return 'Fri';
//     case 'Fri':
//       return 'Sat';
//   }
// }

// function isBig(n: number) {
//   if (n >= 100) {
//     return true;
//   }
// }

// 6.3.1.1
// type FriendList = {
//   count: number;
//   friends: {
//     firstName: string;
//     lastName: string;
//   }[];
// };

// type APIResponse = {
//   user: {
//     userId: string;
//     friendList: FriendList;
//   };
// };
// type APIResponse = {
//   user: {
//     userId: string;
//     friendList: {
//       count: number;
//       friends: {
//         firstName: string;
//         lastName: string;
//       }[];
//     };
//   };
// };

// type FriendList = APIResponse['user']['friendList'];

// function getAPIResponse(): Promise<APIResponse> {}
// function renderFriendList(friendList: FriendList) {}

// const response = await getAPIResponse();
// renderFriendList(response.user.friendList);

// 6.3.1.2
// type APIResponse = {
//   user: {
//     userId: string;
//     friendList: {
//       count: number;
//       friends: {
//         firstName: string;
//         lastName: string;
//       }[];
//     };
//   };
// };

// type ResponseKeys = keyof APIResponse; // 'user'
// type UserKeys = keyof APIResponse['user']; // 'userId' | 'friendList
// type FriendListKeys = keyof APIResponse['user']['friendList']; // 'count' | 'friends';

// function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
//   return o[k];
// }

// type ActiveLog = {
//   lastEvent: Date;
//   events: {
//     id: string;
//     timestamp: Date;
//     type: 'Read' | 'Write';
//   }[];
// };

// const activityLog: ActiveLog;
// const lastEvent = get(activityLog, 'lastEvent'); // Date

// type Get = {
//   <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
//   <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
//     o: O,
//     k1: K1,
//     k2: K2
//   ): O[K1][K2];
//   <
//     O extends object,
//     K1 extends keyof O,
//     K2 extends keyof O[K1],
//     K3 extends keyof O[K1][K2]
//   >(
//     o: O,
//     k1: K1,
//     k2: K2,
//     k3: K3
//   ): O[K1][K2][K3];
// };

// let get: Get = (object: any, ...keys: string[]) => {
//   let result = object;
//   keys.forEach((k) => (result = result[k]));
//   return result;
// };

// get(activityLog, 'events', 0, 'type'); // 'Read' | 'Write'
// get(activityLog, 'bad'); // エラー

// 6.3.2
// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
// type Day = Weekday | 'Sat' | 'Sun';

// const nextDay: Record<Weekday, Day> = {
//   Mon: 'Tue',
//   Tue: 'Wed',
//   Wed: 'Thu',
//   Thu: 'Fri',
//   Fri: 'Mon',
// };

// 6.3.3
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekday | 'Sat' | 'Sun';

const nextDay: { [K in Weekday]: Day } = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Mon',
};

// type MyMappedType = {
//   [Key in UnionType]: ValueType;
// };

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

type Account = {
  id: number;
  isEmployee: boolean;
  notes: string[];
};

// 全てのフィールドをオプショナルにする
type OptionalAccount = {
  [K in keyof Account]?: Account[K];
};

// 全てのフィールドを null 許容にする
type NullableAccount = {
  [K in keyof Account]: Account[K] | null;
};

// 全てのフィールドを読み取り専用にする
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K];
};

// 全てのフィールドを再び書き込み可能にする
type Account2 = {
  -readonly [K in keyof ReadonlyAccount]: Account[K];
};

// 全てのフィールドを再び必須にする
type Account3 = {
  [K in keyof OptionalAccount]-?: Account[K];
};

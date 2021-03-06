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
// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
// type Day = Weekday | 'Sat' | 'Sun';

// const nextDay: { [K in Weekday]: Day } = {
//   Mon: 'Tue',
//   Tue: 'Wed',
//   Wed: 'Thu',
//   Thu: 'Fri',
//   Fri: 'Mon',
// };

// type MyMappedType = {
//   [Key in UnionType]: ValueType;
// };

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

// type Account = {
//   id: number;
//   isEmployee: boolean;
//   notes: string[];
// };

// // 全てのフィールドをオプショナルにする
// type OptionalAccount = {
//   [K in keyof Account]?: Account[K];
// };

// // 全てのフィールドを null 許容にする
// type NullableAccount = {
//   [K in keyof Account]: Account[K] | null;
// };

// // 全てのフィールドを読み取り専用にする
// type ReadonlyAccount = {
//   readonly [K in keyof Account]: Account[K];
// };

// // 全てのフィールドを再び書き込み可能にする
// type Account2 = {
//   -readonly [K in keyof ReadonlyAccount]: Account[K];
// };

// // 全てのフィールドを再び必須にする
// type Account3 = {
//   [K in keyof OptionalAccount]-?: Account[K];
// };

// 6.3.4 コンパニオンオブジェクトパターン
// type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD';
// type Currency = {
//   unit: Unit;
//   value: number;
// };

// const Currency = {
//   from(value: number, unit: Unit): Currency {
//     return {
//       unit: unit,
//       value,
//     };
//   },
// };

// import { Cunnrency } from './Currency';
// let amountDue: Currency = {
//   unit: 'JPY',
//   value: 900.1,
// };
// let otherAmountDue = Currency.from(330, 'EUR');

// 6.4.1 タプルについての型推論の改善
// const a = [1, true]; // (number | boolean)[]

// function tuple<T extends unknown[]>(...ts: T): T {
//   return ts;
// }
// const a = tuple(1, true); // [number, boolean]

// 6.4.2 ユーザー定義型ガード
// function isString(a: unknown): a is string {
//   return typeof a === 'string';
// }
// const a = isString('a'); // true
// const seven = isString([7]); // false

// function parseInput(input: string | number) {
//   let formattedInput: string;
//   if (isString(input)) {
//     formattedInput = input.toUpperCase();
//   }
// }

// type LegacyDialog; // ...
// type Dialog; //...

// function isLegacyDialog(dialog: LegacyDialog | Dialog): dialog is LegacyDialog {
// 	// ...
// }

// 6.5 条件型
// type IsString<T> = T extends string ? true : false;

// 6.5.1 分配条件型
// string extends T ? A : B;
// string extends T ? A : B;

// (string | number) extends T ? A : B;
// (string extends T ? A : B) | (number extends T ? A : B)

// (string | number | boolean) extends T ? A : B;
// (string extends T ? A : B) | (number extends T ? A : B) | (boolean extends T ? A : B)

// type ToArray<T> = T[];
// type A = ToArray<number>; // number[]
// type B = ToArray<number | string>; // (number | string)[]

// type ToArray2<T> = T extends unknown ? T[] : T[];
// type A = ToArray2<number>; // number[]
// type B = ToArray2<number | string>; // number[] | string[]

// type Without<T, U> = T extends U ? never : T;

// type A = Without<boolean | number | string, boolean>; // number | string

// type A =
//   | Without<boolean, boolean>
//   | Without<number, boolean>
//   | Without<string, boolean>;

// type A =
//   | (boolean extends boolean ? never : boolean)
//   | (number extends boolean ? never : number)
//   | (string extends boolean ? never : string);

// type A = never | number | string;

// type A = number | string;

// 6.5.2 infer キーワード
// type ElementType<T> = T extends unknown[] ? T[number] : T;
// type A = ElementType<number[]>; // number

// type ElementType2<T> = T extends (infer U)[] ? U : T;
// type B = ElementType2<number[]>; // number

// type ElementUgly<T, U> = T extends U[] ? U : T;
// type C = ElementUgly<number[]>; // エラー

// type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;
// type F = typeof Array['prototype']['slice']; // Array.slice の型を取得
// type A = SecondArg<F>; // number | undefined

// 6.5.3 組み込みの条件型
// type A = number | string;
// type B = string;
// type C = Exclude<A, B>; // number

// type D = number | string;
// type E = string;
// type F = Extract<D, E>; // string

// type G = { a?: number | null };
// type H = NonNullable<G['a']>; // number

// type Func = (a: number) => string;
// type R = ReturnType<Func>; // string

// type J = { new (): K };
// type K = { b: number };
// type I = InstanceType<J>; // { b: number }

// 6.6.1 型アサーション
// function formatInput(input: string) {}
// function getUserInput(): string | number {}

// let input = getUserInput();

// formatInput(input as string); // input が string であることを伝える
// formatInput(<string>input); // 上のものと同等

// 6.6.2 非 null アサーション
// type Dialog = {
//   id?: string;
// };

// function closeDialog(dialog: Dialog) {
//   if (!dialog.id) {
//     return;
//   }
//   setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id!)!));
// }

// function removeFromDOM(dialog: Dialog, element: Element) {
//   element.parentNode!.removeChild(element);
//   delete dialog.id;
// }

// type VisibleDialog = { id: string };
// type DestroyedDialog = {};
// type Dialog = VisibleDialog | DestroyedDialog;

// function closeDialog(dialog: Dialog) {
//   if (!('id' in dialog)) return; // dialog に id がない場合は早期リターン
//   setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id)!));
// }

// function removeFromDOM(dialog: VisibleDialog, element: Element) {
//   element.parentNode!.removeChild(element);
//   delete dialog.id;
// }

// 6.6.3 明確な割り当てアサーション
// let userId: string;
// userId.toUpperCase();

// let userId!: string;
// fetchUser();

// userId.toUpperCase(); // エラー

// function fetchUser() {
//   userId = globalCache.get('userId');
// }

// 6.7 名前的型付けをシミュレートする
// type CompanyID = string;
// type OrderID = string;
// type UserID = string;
// type ID = CompanyID | OrderID | UserID;

// function queryForUser(id: UserID) {}

// const id: CompanyID = 'b123456';
// queryForUser(id); // OK (?????????)

// type CompanyID = string & { readonly brand: unique symbol };
// type OrderID = string & { readonly brand: unique symbol };
// type UserID = string & { readonly brand: unique symbol };
// type ID = CompanyID | OrderID | UserID;

// function CompanyID(id: string) {
//   return id as CompanyID;
// }
// function OrderID(id: string) {
//   return id as OrderID;
// }
// function UserID(id: string) {
//   return id as UserID;
// }

// function queryForUser(id: UserID) {}

// const companyId = CompanyID('c123456');
// const orderId = OrderID('o123456');
// const userId = UserID('u123456');

// queryForUser(userId); // OK
// queryForUser(companyId); // エラー

// 6.8 プロトタイプを安全に拡張する
// interface Array<T> {
//   zip<U>(list: U[]): [T, U][];
// }

// Array.prototype.zip = function (list) {
//   return this.map((v, k) => [v, list[k]]);
// };

// 6.10 練習問題
// 2.
// type O = { a: { b: { c: string } } };
// type ans = keyof O;

// 3.
// type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>;
// type R = Exclusive<1 | 2 | 3, 2 | 3 | 4>;
// type U = Exclusive<1 | 2, 2 | 4>;

// // 4.
// let globalCache = {
//   get(key: string) {
//     return 'user';
//   },
// };

// let uesrId = fetchUser();
// uesrId.toUpperCase();

// function fetchUser() {
//   return globalCache.get('userId');
// }

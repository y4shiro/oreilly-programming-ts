// 5.1 クラスと継承
type Color = 'Black' | 'White';
type ChessFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type ChessRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// チェスのゲームを表す
class Game {
  private pieces = Game.makePieces();

  private static makePieces() {
    return [
      // キング
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
      // クイーン
      // new Queen('White', 'D', 1),
      // new Queen('Black', 'D', 8),
      // ビショップ
      // new Bishop('White', 'C', 1),
      // new Bishop('White', 'F', 1),
      // new Bishop('Black', 'C', 8),
      // new Bishop('Black', 'F', 8),
    ];
  }
}

// 駒の座標
class Position {
  constructor(private file: ChessFile, private rank: ChessRank) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

// チェスの駒
abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: ChessFile, rank: ChessRank) {
    this.position = new Position(file, rank);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}

// チェスの駒 6 種
class King extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

// class Queen extends Piece {} // クイーン
// class Bishop extends Piece {} // ビショップ
// class Knight extends Piece {} // ナイト
// class Rook extends Piece {} // ルーク
// class Pawn extends Piece {} // ポーン

// 5.3
// const set = new Set();
// set.add(1).add(2).add(3);
// set.has(2); // true
// set.has(4); // false

// class Set {
//   has(value: number): boolean {}
//   add(value: number): this {}
// }

// class MutableSet extends Set {
//   delete(value: number): boolean {}
// }

// 5.4
// type Food = {
//   calories: number;
//   tasty: boolean;
// };
// type Sushi = Food & {
//   salty: boolean;
// };
// type Cake = Food & {
//   sweet: boolean;
// };

// interface Food {
//   calories: number;
//   tasty: boolean;
// }
// interface Sushi extends Food {
//   salty: boolean;
// }
// interface Cake extends Food {
//   sweet: boolean;
// }

// interface A {
//   good(x: number): string;
//   bad(x: number): string;
// }
// interface B extends A {
//   good(x: string | number): string;
//   bad(x: string): string;
// }

// 5.4.1
interface User {
  name: string;
}
interface User {
  age: number;
}

const userA: User = {
  name: 'Ashley',
  age: 22,
};

// interface User {
//   name: string;
// }
// interface User {
//   name: number;
// }

// interface User<Age extends number> {
//   age: Age;
// }
// interface User<Age extends string> {
//   age: Age;
// }

// 5.4.2
// interface Animal {
//   readonly name: string;
//   eat(food: string): void;
//   sleep(hours: number): void;
// }
// interface Feline {
//   meow(): void;
// }

// class Cat implements Animal, Feline {
//   name = 'Whiskers';
//   eat(food: string) {
//     console.info('Ate some', food, '. Mmm!');
//   }
//   sleep(hours: number) {
//     console.info('Slept for', hours, 'hours');
//   }
//   meow() {
//     console.log('Moew');
//   }
// }

// 5.5
// class Zebra {
//   trot() {
//     console.log('trot');
//   }
// }
// class Poodle {
//   trot() {
//     console.log('trot');
//   }
// }
// function ambleAround(animal: Zebra) {
//   animal.trot();
// }
// const zebra = new Zebra();
// const poodle = new Poodle();
// ambleAround(zebra);
// ambleAround(poodle);

// class A {
//   private x = 1;
// }
// class B extends A {}
// function f(a: A) {
//   console.log('hi');
// }
// f(new A());
// f(new B());
// f({ x: 1 });

// 5.6
type State = {
  [key: string]: string;
};
class StringDatabase {
  state: State = {};
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }
  set(key: string, value: string): void {
    this.state[key] = value;
  }
  static from(state: State) {
    const db = new StringDatabase();
    for (const key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}

// 5.7
// class MyMap<K, V> {
//   constructor(initialKey: K, initialValue: V) {}
//   get(key: K): V {}
//   set(key: K, value: V): void {}
//   merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {}
//   static of<K, V>(k: K, v: V): MyMap<K, V> {}
// }

// interface MyMap<K, V> {
//   get(key: K): V;
//   set(key: K, value: V): void;
// }

// cosnt a = MyMap<string, number>('k', 1) // MyMap<string, number>
// cosnt b = MyMap('k', true) // MyMap<string, boolean>
// a.get('k')
// b.toLocaleString('k', false)

// 5.8
// type ClassConstructor = new (...args: any[]) => {};

// function withEZDebug<C extends ClassConstructor>(Class: C) {
//   return class extends Class {
//     constructor(...args: any[]) {
//       super(...args);
//     }
//   };
// }

// type ClassConstructor<T> = new (...args: any[]) => T;

// function withEZDebug<
//   C extends ClassConstructor<{
//     getDebugValue(): object;
//   }>
// >(Class: C) {
//   return class extends Class {
//     debug() {
//       const Name = this.constructor.name;
//       const value = this.getDebugValue();
//       return Name + '(' + JSON.stringify(value) + ')';
//     }
//   };
// }

// class HardToDebugUser {
//   constructor(
//     private id: number,
//     private firstName: string,
//     private lastName: string
//   ) {}
//   getDebugValue() {
//     return {
//       id: this.id,
//       name: this.firstName + ' ' + this.lastName,
//     };
//   }
// }

// const User = withEZDebug(HardToDebugUser);
// const user = new User(3, 'Emma', 'Gluzman');
// user.debug(); // HardToDebugUser({"id", 3 "name": "Emma Gluzman"})

// 5.9
// @serializable
// class APIPayload {
//   getValue(): Payload {}
// }

// const APIPayload = serializable(
//   class APIPayload {
//     getvalue(): Payload {}
//   }
// );

// 5.10
// class MessageQueue {
//   private constructor(private messages: string[]) {}
//   static create(messages: string[]) {
//     return new MessageQueue(messages);
//   }
// }

// 5.11.1
// type Shoe = {
//   purpose: string;
// };

// class BalletFlat implements Shoe {
//   purpose = 'dancing';
// }

// class Boot implements Shoe {
//   purpose = 'woodcutting';
// }

// class Sneaker implements Shoe {
//   purpose = 'walking';
// }

// const Shoe = {
//   create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
//     switch (type) {
//       case 'balletFlat':
//         return new BalletFlat();
//       case 'boot':
//         return new Boot();
//       case 'sneaker':
//         return new Sneaker();
//     }
//   },
// };

// Shoe.create('boot'); // Shoe

// 5.11.2
class RequestBuilder {
  private url: string | null = null;
  private method: 'get' | 'post' | null = null;
  private data: object | null = null;

  setURL(url: string): this {
    this.url = url;
    return this;
  }

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setData(data: object): this {
    this.data = data;
    return this;
  }

  send() {}
}

new RequestBuilder()
  .setURL('/users')
  .setMethod('get')
  .setData({ firstName: 'Anna' })
  .send();

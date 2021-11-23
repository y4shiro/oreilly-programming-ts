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

interface Food {
  calories: number;
  tasty: boolean;
}
interface Sushi extends Food {
  salty: boolean;
}
interface Cake extends Food {
  sweet: boolean;
}

interface A {
  good(x: number): string;
  bad(x: number): string;
}
interface B extends A {
  good(x: string | number): string;
  bad(x: string): string;
}

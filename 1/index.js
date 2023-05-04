"use strict";
// TS from Microsoft company
// type
// interface
// type vs interface
// let user = {
//   name: "Jim",
//   age: 20,
//   info: "name",
// };
// console.log(user.name);
// interface ------------------
// interface Obj {
//   readonly name: string;
//   age: number;
//   info: any;
//   numArr: number[];
//   other?: string;
// }
// let user: Obj = {
//   name: "Jim",
//   age: 14,
//   info: "Bill",
//   numArr: [1, 5],
//   other: "5",
// };
// user.name = "Ann";
// type ------------------
// type User = {
//   password: string;
//   age: number | string;
// };
// let user: User = {
//   password: "my",
//   age: "12",
// };
// console.log(user);
// tuple ---------------
// let list: [number, string] = [12, "str"];
// let list: [number, string][] = [[12, "str"], [16, 'ttt']];
// type tuple = [number, string][]
// let list: tuple = [[12, "str"], [16, 'ttt']];
// console.log(list);
// enum ---------------
// enum id {
//   one = 6,
//   two,
//   three,
// }
// // id.one = 3; error - its only read-only
// console.log(id.one);
// console.log(id.two);
// console.log(id.three);
// type assertion --------------
// let ids: any = 10;
// let id = ids;
// let id = ids as string;
// let id = <string>ids;
// id = "sss";
// console.log(id);
// functions ------------
// function get(x: number, y?: string): void {
//   x + 5;
// }
// function get(x: number, y?: string) {
//   return x + 5;
// }
// console.log(get(10, "ss"));
// func interface ---------------
// interface func {
//   (a: number, b: number): void;
// }
// let get: func = function (a: number, b: number) {};
// interface func {
//   (a?: number, b?: number): void;
// }
// interface func {
//   (a?: number, b?: number): boolean;
// }
// let get: func = function (a?: number, b?: number) {
//   return false;
// };
// get();
//  class ------------
// private
// public
// protected
// ------------------ review
// interface Func {
//   (s: string, b: number): void;
// }
// let getData: Func = function (n: string, d: number) {};
// --------------- Generics
// function getData(a: any[]): any[] {
//   return new Array().concat(a);
// }
// let numArr = getData([1, 5, 3]);
// numArr.push("t");
// console.log(numArr);
function getData(a) {
    return new Array().concat(a);
}
let numArr = getData([1, 5, 3]);
let strArr = getData(["s"]);
console.log(numArr);
console.log(strArr);

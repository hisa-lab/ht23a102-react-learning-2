interface A {
    foo: number;
    bar?: string;
}
interface B { foo: string; }
interface C { bar: string; }
interface D { baz: boolean; }

type AorB = A | B;
type AorC = A | C;
type AorD = A | D;

const a: AorB = { foo: 'abcd', bar: 'efgh' };
console.log(a);
// const b: AorC = { foo: 1234, bar: 1234 };
const c: AorD = { foo: 1234, baz: true };
console.log(c);
interface T { foo: number }
interface U { bar: string }
interface V {
    foo?: number;
    baz: boolean;
}

type TnU = T & U;
type TnV = T & V;
type VnTorU = V & (T | U);

const tnu: TnU = { foo: 1234, bar: 'abcd' };
const tnv: TnV = { foo: 1234, baz: true };
// const tnv: TnV = { foo: 'abcd', baz: true };
const vntoru: VnTorU = {foo: 1234, baz: true };
const vntoru2: VnTorU = {bar: 'abcd', baz: true };
type Species = 'rabbit' | 'bear' | 'fox' | 'dog';

interface Resident {
    name: string;
    age: number;
    speceis: Species;
}

const isCanine = (resident: Resident): boolean =>
    ['dog', 'fox'].includes(resident.speceis);

export { Species, Resident, isCanine };
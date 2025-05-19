interface Resident {
    familyName: string;
    lastName: string;
    mom?: Resident;
}

// const getMomName = (resident: Resident): string => resident.mom.lastName;
const getMomName = (resident: Resident): string => resident.mom!.lastName;

const patty = { familyName: 'Hope-Rabbit', lastName: 'patty' };
// console.log(getMomName(patty));
const patty2 = { familyName: 'Hope-Rabbit', lastName: 'patty', mom: { familyName: 'Hope-Rabbit', lastName: 'Christine' } };
console.log(getMomName(patty2));
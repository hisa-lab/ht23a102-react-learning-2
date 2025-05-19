{
    const permissions = {
        r: 0b100, 
        w: 0b010,
        x: 0b001,
    } as const;

    type Valueof<T> = T[keyof T];
    type PermNum = Valueof<typeof permissions>;

    const a: PermNum = 1;
    // const b: PermNum = 3;
}
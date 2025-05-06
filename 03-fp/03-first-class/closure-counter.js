function counter() {
    let COUNT = 0;

    function increment() {
        return (COUNT += 1);
    }

    return increment;
}
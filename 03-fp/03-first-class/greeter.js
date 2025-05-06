function greeter(target) {
    const sayHello = () => {
        console.log(`Hi, ${target}!`);
    };

    return sayHello;
}

const greet = greeter('Step Jun');
greet();

//代入を省略
function greeter2(target) {
    return () => {
        console.log(`Hi, ${target}!`);
    };
}

const greet2 = greeter2('Step Jun');
greet();

//アロー関数式でreturn文を省略
const greeter3 = (target) => () => { console.log(`Hi, ${target}!`) };
const greet3 = greeter3('Step Jun');
greet3();
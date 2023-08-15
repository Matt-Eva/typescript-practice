interface MyType<Type> {
    contents: Type
};

let instance: MyType<string> = {
    contents: ""
}

console.log(instance);
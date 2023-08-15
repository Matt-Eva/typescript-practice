// union types are declare with the pipe symbol: |

function printId(id: number | string){
    console.log("Your ID is:" + id);
}

printId(101);

printId("202");

// printId({myId: 22343}); // throws error

export {}
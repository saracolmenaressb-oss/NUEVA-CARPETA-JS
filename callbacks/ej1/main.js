console.log("1. Pido la pizza"); // (A)

setTimeout(() => {
    console.log("2. Pizza lista! (Callback ejecutado)"); // (B)
}, 3000); 

console.log("3. Sigo hablando con mis amigos"); // (C)
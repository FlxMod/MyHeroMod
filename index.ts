import 'frida-il2cpp-bridge';
import {start} from "./main";

// setImmediate(() => {
//     start();
// })

setTimeout(() => {
    start();
},1000);
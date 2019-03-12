import { Greeter } from './greeter.js';
import 'style.css'
const greeter = new Greeter();

const message = greeter.greet('Hello', 'webpack');
console.log(message);

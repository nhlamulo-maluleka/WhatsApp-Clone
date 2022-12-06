import { io } from "socket.io-client";
const socket = io("ws://192.168.3.65:3000/");
export default socket;
import { io } from "socket.io-client";
const socket = io("ws://192.168.1.15:3000/");
export default socket;
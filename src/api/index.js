var socket1 = new WebSocket("ws://localhost:8080/room1");
var socket2 = new WebSocket("ws://localhost:8080/room2");

console.log("socket1: ", socket1)
console.log("socket2: ", socket2)

const sockets = {
    "room1": socket1,
    "room2": socket2,
}

console.log("socket map: ", sockets)

const getSocket = (room) => {
    console.log("returning room name: ", room)
    return sockets[room]
}

let connect = (socket, cb) => {
    console.log("Attempting connection...");
    console.log("socket is:.... ", socket)

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log("on_message: ", msg)
        cb(msg)
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};

let sendMsg = (socket, username, msg) => {
    console.log("send_mg: ", username, msg);
    socket.send(username + ": " + msg);
}

export {
    connect,
    sendMsg,
    getSocket,
};

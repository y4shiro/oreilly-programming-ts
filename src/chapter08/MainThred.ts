// let worker = new Worker('WorkderScript.js');
// workder.postMessage('WorkderScript.js');

// worker.onmessage = (e) => {
//   console.log(e.data);
// };

// worker.postMessage('some data');

// type Message = string;
// type ThreadID = number;
// type UserID = number;
// type Participants = UserID[];

// type Commands = {
//   sendMessageToThred: [ThreadID, Message];
//   createThread: [Participants];
//   addUserToThread: [ThreadID, UserID];
//   removeUserFromThread: [ThreadID, UserID];
// };

// type Events = {
//   receivedMessage: [ThreadID, UserID, Message];
//   createThread: [ThreadID, Participants];
//   addedUserToThread: [ThreadID, UserID];
//   removedUserFromThread: [ThreadID, UserID];
// };

// 8.6.2 子プロセス (Node.js)
import { fork } from 'child_process';

const child = fork('./ChildThread.js');

child.on('message', (data) =>
  console.info('Child process sent a message', data)
);

child.send({ type: 'syn', data: [3] });

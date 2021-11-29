// (onmessage) => (e) => {
//   console.log(e.data);
//   postMessage(`Ack: ${e.data}`);
// };
import { EventEmitter } from 'events';

interface SafeEmitter<Events extends Record<PropertyKey, unknown[]>> {
  emit<K extends keyof Events>(channel: K, ...data: Events[K]): boolean;
  on<K extends keyof Events>(
    channel: K,
    listener: (...data: Events[K]) => void
  ): this;
  on(channel: never, listener: (...data: unknown[]) => void): this;
}

type Command =
  | { type: 'sendMessageToThread'; data: [ThreadID, Message] }
  | { type: 'createThread'; data: [Participants] }
  | { type: 'addUserToThread'; data: [ThreadID, UserID] }
  | { type: 'removeUserFromThread'; data: [ThreadID, UserID] };

onmessage = (e) => processCommandFromMainThread(e.data);

function processCommandFromMainThread(command: Command) {
  switch (command.type) {
    case 'sendMessageToThread':
      const [threadID, message] = command.data;
      console.log(message);
    // ...
  }
}

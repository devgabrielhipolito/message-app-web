type ConnectionType = "call" | "message";
type Friend = {
  name: string;
  isOnline: boolean;
  connectionsOptions: ConnectionType[];
};

export const listFriends: Friend[] = [
  {
    name: "Astrofonildo Serra",
    isOnline: true,
    connectionsOptions: ["message", "call"],
  },
  {
    name: "Felipe limas",
    isOnline: false,
    connectionsOptions: ["message", "call"],
  },
  {
    name: "Ana Clara",
    isOnline: false,
    connectionsOptions: ["message", "call"],
  },
  {
    name: "Marcelo souza",
    isOnline: false,
    connectionsOptions: ["message", "call"],
  },
];

const port = 1880;
const key = "YOUR_KEY";

const rooms = [];
rooms["lounge"] = {
  host:"192.168.1.123",
  groups: [
    "tv",
    "amplifier",
  ]
};

const commands = [
  {
    "command":"volume_up",
    "group":"amplifier",
    "data":"DATA_HERE"
  }
];

module.exports = {
  port,
  key,
  rooms,
  commands,
}
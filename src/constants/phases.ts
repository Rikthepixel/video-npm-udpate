import { staticFile } from 'remotion';

const phases = [
  {
    src: staticFile("/update.png"),
    text: "npm update"
  },
  {
    src: staticFile("/upgrade.png"),
    text: "npm upgrade"
  },
  {
    src: staticFile("/udpate.png"),
    text: "npm udpate"
  }
];

export default phases;
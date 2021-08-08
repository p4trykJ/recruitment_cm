const RandomTextGenerator = require("random-text-generator");
const { getRandomDate } = require("./backendUtils");

const randomTextGenerator = new RandomTextGenerator({
  splitter: " ",
  deepness: 8,
});

const initMessage = `The Lord of the Rings is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, on Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.[2]
The title refers to the story's main antagonist, the Dark Lord Sauron, who in an earlier age created the One Ring to rule the other Rings of Power given to Men, Dwarves and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring mainly through the eyes of the hobbits Frodo, Sam, Merry and Pippin.
Although generally known to readers as a trilogy, the work was intended by Tolkien to be one volume of a two-volume set along with The Silmarillion. [3][T 2] For economic reasons, The Lord of the Rings was published over the course of a year from 29 July 1954 to 20 October 1955, in three volumes[3][4] titled The Fellowship of the Ring, The Two Towers and The Return of the King. The work is divided internally into six books, two per volume, with several appendices of background material. Some later editions print the entire work in a single volume, following the author's original intent.
Tolkien's work, after an initially mixed reception by the literary establishment, has been the subject of extensive analysis of its themes and origins. Influences on this earlier work, and on the story of The Lord of the Rings, include philology, mythology, Christianity, earlier fantasy works, and his own experiences in the First World War.`;

randomTextGenerator.learn(initMessage.split(" "));

const usernamesGenerator = new RandomTextGenerator();

const usernames = [
  "skarpyta",
  "Alextron234",
  "BattleDash",
  "berqkey10",
  "Ezblox23",
  "robiko858",
  "zakizakowski",
  "MrArtur1337",
  "AzisDeus",
  "AustrianPainter1889",
  "pomidorek2pl",
  "JoeMamma",
  "MafiaBoss75",
  "SciManDan",
  "klapki",
  "jacob.flix",
  "malario",
  "BenDrowned",
  "pickupthefox",
  "okboomer",
  "GHPL",
  "Firstbober",
];

usernames.forEach((username) => usernamesGenerator.learn(username));

function messagesGenerator(amount) {
  const messages = [];
  console.time();
  for (let i = 0; i <= amount; i++) {
    const message = randomTextGenerator.generate();
    messages.push({
      id: i,
      user: `${usernamesGenerator.generate()}@example.com`,
      date: getRandomDate(),
      title: message.slice(0, 50),
      message,
    });
  }
  console.timeEnd();
  return messages;
}

exports.messagesGenerator = messagesGenerator;

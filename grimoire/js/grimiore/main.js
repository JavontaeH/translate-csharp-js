// Put your code here
console.log("Do you believen in magic?");
console.log("------------------------");

allSpells = [
  {
    Name: "Turn enemy into a newt",
    IsEvil: true,
    EnergyReqired: 5.1,
  },
  {
    Name: "Conjure some gold for a local charity",
    IsEvil: false,
    EnergyReqired: 2.99,
  },
  {
    Name: "Give a deaf person the ability to heal",
    IsEvil: false,
    EnergyReqired: 12.2,
  },
  {
    Name: "Make yourself emperor of the universe",
    IsEvil: true,
    EnergyReqired: 100.0,
  },
  {
    Name: "Convince your relatives your political views are correct",
    IsEvil: false,
    EnergyReqired: 2921.5,
  },
];

displaySpellBook = (book) => {
  console.log(book.title);
  book.spells.forEach((spell) => {
    console.log(`   ${spell.Name}`);
  });
};

makeGoodSpellBook = (spells) => {
  goodSpells = [];
  spells.forEach((spell) => {
    if (!spell.IsEvil) {
      goodSpells.push(spell);
    }
  });
  obj = { title: "Good Book", spells: goodSpells };
  return obj;
};

makeEvilSpellBook = (spells) => {
  evilSpells = [];
  spells.forEach((spell) => {
    if (spell.IsEvil) {
      evilSpells.push(spell);
    }
  });
  obj = { title: "Evil Book", spells: evilSpells };
  return obj;
};

let goodBook = makeGoodSpellBook(allSpells);
let evilBook = makeEvilSpellBook(allSpells);
displaySpellBook(goodBook);
displaySpellBook(evilBook);

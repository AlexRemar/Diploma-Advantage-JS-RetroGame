import Team from './Team';
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  while (true) {
    const i = Math.floor(Math.random() * allowedTypes.length);
    const level = Math.ceil(Math.random() * maxLevel);

    yield { character: new allowedTypes[i](level), level };
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const newHero = characterGenerator(allowedTypes, maxLevel);
  const team = new Team();

  for (let i = 0; i < characterCount; i += 1) {
    const nextHero = newHero.next().value;
    team.add(nextHero.character);
  }

  team.toArray();
  return team.characters;
}
//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// | Mercury | 0.2408467                     |
// | Venus   | 0.61519726                    |
// | Earth   | 1.0                           |
// | Mars    | 1.8808158                     |
// | Jupiter | 11.862615                     |
// | Saturn  | 29.447498                     |
// | Uranus  | 84.016846                     |
// | Neptune | 164.79132                     |
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#relation_with_array_objects
const map =
  {"mercury": 0.2408467,
  "venus": 0.61519726,
  "earth": 1.0,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132,
  };
//const map = new Map(kvArray)

export function age(name, seconds) {
  if (map[name] == undefined)
    throw new Error("not a planet");
  return Math.round(((seconds/31557600)/map[name])*100)/100
 };

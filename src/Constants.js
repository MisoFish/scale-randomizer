import _ from "lodash";

export const LOWEST_LEVEL = 7;
export const HIGHEST_LEVEL_PLUS_1 = 10;
export const LEVELS = _.range(LOWEST_LEVEL, HIGHEST_LEVEL_PLUS_1);

// export const SECTIONS = [
//   "major scale",
//   "harmonic minor scale",
//   "melodic minor scale",
//   "major formula pattern",
//   "harmonic minor formula pattern",
//   "chromatic scale",
//   "major in octaves",
//   "harmonic minor in octaves",
//   "melodic minor in octaves"
// ];

export const SECTIONS = [
  ["major", "scale"],
  ["harmonic minor", "scale"],
  ["melodic minor", "scale"],
  ["major", "formula pattern"],
  ["harmonic minor", "formula pattern"],
  ["", "chromatic scale"],
  ["major", "in octaves"],
  ["harmonic minor", "in octaves"],
  ["melodic minor", "in octaves"]
];

//export const KEYS = ["C", "Db", "D", "Eb", "C#"];

// export const SECTIONS_KEYS_BY_LEVEL = {
//   9: {
//     sections: _.range(0, 9)
//   }
// };

export const SECTIONS_BY_LEVEL = {
  9: _.range(0, 9)
};


export const SYLLABUS = {
  9: {
    c: [0, 1, 2, 5],
    db: [0, 3, 5, 6],
    d: [0, 1, 2, 5],
    eb: [0, 1, 2, 5],
    F: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  }
};

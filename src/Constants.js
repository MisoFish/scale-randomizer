import _ from "lodash";

export const LOWEST_LEVEL = 7;
export const HIGHEST_LEVEL_PLUS_1 = 10;
export const LEVELS = _.range(LOWEST_LEVEL, HIGHEST_LEVEL_PLUS_1);

export const SECTIONS = [
  ["major", "scale"],
  ["harmonic minor", "scale"],
  ["melodic minor", "scale"],
  ["major", "formula pattern"],
  ["harmonic minor", "formula pattern"],
  ["", "chromatic scale"],
  ["major", "in octaves"],
  ["harmonic minor", "in octaves"],
  ["melodic minor", "in octaves"],
  ["major", "four-note chords"],
  ["minor", "four-note chords"],
  ["major", "dominant 7th chords"],
  ["minor", "diminished 7th chords"],
  ["major", "arpeggio"],
  ["minor", "arpeggio"],
  ["major", "dominant 7th arpeggio"],
  ["minor", "diminished 7th arpeggio"]
];

export const SECTIONS_BY_LEVEL = {
  7: _.range(0, 6).concat(_.range(9, 17)),
  8: _.range(0, 6).concat(_.range(9, 17)),
  9: _.range(0, 17)
};

export const SYLLABUS = {
  7: {
    C: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16],
    D: [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  8: {
    C: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16],
    D: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16],
    Eb: [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  9: {
    C: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    Db: [0, 3, 5, 6, 9, 11, 13, 15],
    D: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    Eb: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    E: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    "C#": [1, 2, 4, 5, 7, 8, 10, 12, 14, 16]
  }
};
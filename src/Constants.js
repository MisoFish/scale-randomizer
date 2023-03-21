import _ from 'lodash';

export const LOWEST_LEVEL = 1;
export const HIGHEST_LEVEL_PLUS_1 = 10;
export const LEVELS = _.range(LOWEST_LEVEL, HIGHEST_LEVEL_PLUS_1);

export const SECTIONS = [
  ['major', 'scale'],
  ['harmonic minor', 'scale'],
  ['melodic minor', 'scale'],
  ['major', 'formula pattern'],
  ['harmonic minor', 'formula pattern'],
  ['', 'chromatic scale'],
  ['major', 'in octaves'],
  ['harmonic minor', 'in octaves'],
  ['melodic minor', 'in octaves'],
  ['major', 'four-note chords'],
  ['minor', 'four-note chords'],
  ['major', 'dominant 7th chords'],
  ['minor', 'diminished 7th chords'],
  ['major', 'arpeggio'],
  ['minor', 'arpeggio'],
  ['major', 'dominant 7th arpeggio'],
  ['minor', 'diminished 7th arpeggio'],
  ['natural minor', 'scale'],
  ['major', 'contrary motion'],
  ['major', 'triads'],
  ['minor', 'triads'], //20
];

export const SECTIONS_BY_LEVEL = {
  1: _.range(0, 2).concat(17).concat(5).concat(_.range(18, 21)),
  2: _.range(0, 4).concat(5).concat(_.range(19, 21)),
  3: _.range(0, 6).concat(_.range(19, 21)).concat(11).concat(_.range(13, 15)),
  4: _.range(0, 3)
    .concat(_.range(4, 6))
    .concat(_.range(19, 21))
    .concat(_.range(13, 15)),
  5: _.range(0, 6).concat(_.range(19, 21)).concat(11).concat(_.range(13, 15)),
  6: _.range(0, 6).concat(_.range(19, 21)).concat(11).concat(_.range(13, 15)),
  7: _.range(0, 6).concat(_.range(9, 17)),
  8: _.range(0, 6).concat(_.range(9, 17)),
  9: _.range(0, 17),
};

export const SYLLABUS = {
  1: {
    C: [0, 5, 18, 19],
    G: [0, 19],
    F: [0, 19],
    A: [1, 17, 20],
    E: [1, 17, 20],
    D: [1, 17, 20],
  },
  2: {
    C: [3],
    G: [0, 1, 2, 3, 5, 19, 20],
    F: [0, 19],
    E: [1, 2, 20],
    D: [1, 2, 20],
    Bb: [0, 19],
  },
  3: {
    A: [0, 1, 2, 3, 4, 5, 11, 13, 14, 19, 20],
    E: [0, 1, 2, 11, 13, 14, 19, 20],
    F: [0, 1, 2, 5, 11, 13, 14, 19, 20],
    Ab: [0, 11, 13, 19],
  },
  4: {
    D: [0, 13, 19],
    B: [1, 2, 14, 20],
    A: [0, 13, 19],
    G: [1, 2, 14, 20],
    Bb: [0, 13, 19],
    C: [1, 2, 4, 5, 14, 20],
    Eb: [0, 13, 19],
  },
  5: {
    A: [0, 1, 2, 3, 4, 5, 11, 13, 14, 19, 20],
    E: [0, 1, 2, 11, 13, 14, 19, 20],
    F: [0, 1, 2, 5, 11, 13, 14, 19, 20],
    Ab: [0, 11, 13, 19],
  },
  6: {
    A: [0, 1, 2, 3, 4, 5, 11, 13, 14, 19, 20],
    E: [0, 1, 2, 11, 13, 14, 19, 20],
    F: [0, 1, 2, 5, 11, 13, 14, 19, 20],
    Ab: [0, 11, 13, 19],
  },
  7: {
    C: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16],
    D: [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    F: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16],
    Ab: [0, 9, 11, 13, 15],
    'G#': [1, 2, 10, 12, 14, 16],
    Gb: [0, 5, 9, 11, 13, 15],
    'F#': [1, 2, 10, 12, 14, 16],
  },
  8: {
    C: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16],
    D: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16],
    Eb: [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  9: {
    C: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    Db: [0, 3, 5, 6, 9, 11, 13, 15],
    D: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    Eb: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    E: [0, 1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16],
    'C#': [1, 2, 4, 5, 7, 8, 10, 12, 14, 16],
  },
};

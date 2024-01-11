import { Chord } from ".";


describe(`Chord`, () => {
  it(`Should return the notes for a Cmaj7 (C, E, G, B)`, () => {
    const cMaj7 = new Chord('C', 'maj7')
    const expected = [`C`, `E`, `G`, `B`]

    expect(cMaj7.notes).toEqual(expected)
  })
})

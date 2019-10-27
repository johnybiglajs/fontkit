import r from 'restructure-next';

// Set of instructions executed whenever the point size or font transformation change
export default new r.Struct({
  controlValueProgram: new r.Array(r.uint8)
});

//try catch
try {
  try {
    throw new Error('d\'oh');
  } catch (ex) {
    console.error('inner', ex.message);
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"

//TODO re-throw error so that the outer catch runs

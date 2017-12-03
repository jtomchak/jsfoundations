//try catch
try {
  try {
    //action goes here that may fail
    throw new Error('d\'oh');
  } catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  } finally {
    console.log('finally');
  }
} catch (err) {
  console.error('outer', err.message);
}


// Output:
// "inner" "oops"
// "finally"

//TODO re-throw error so that the outer catch runs
//TODO using the same error, NOT instanciating a new Error

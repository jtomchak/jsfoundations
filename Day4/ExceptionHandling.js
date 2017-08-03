//try catch
try {
  try {
    throw new Error("d'oh");
  } catch (err) {
    console.error("inner", err.message);
  } finally {
    console.log("finally");
  }
} catch (err) {
  console.error("outer", err.message);
}

// Output:
// "inner" "oops"
// "finally"

//TODO re-throw error so that the outer catch runs
//TODO using the same error, NOT instanciating a new Error

function parse(a) {
  let result = parseInt(a);
  if (!result) {
    throw new Error("Cupcakes FAIL");
  }
  return result;
}

function exceptionHandle(a) {
  try {
    let parseResult = parse(a);
    if (!parseResult) {
      throw new Error("Error");
    } else {
      return console.log(parseResult);
    }
  } catch (ex) {
    return console.error(ex.message);
  }

}

exceptionHandle("b");

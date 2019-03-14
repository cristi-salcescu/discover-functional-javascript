function deepFreeze(object) {
   Object.keys(object).forEach(function freezeNestedObjects(name){
   const value = object[name];
    if(typeof value === "object") {
     deepFreeze(value);
    }
  });
  return Object.freeze(object);
}
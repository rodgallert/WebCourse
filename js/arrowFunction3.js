let compareThis = function(param){
    console.log(this === param);
}

compareThis(global); // node's equivalent to browser's window

const obj = {}

compareThis = compareThis.bind(obj);
compareThis(global)
compareThis(obj)

let compareThisArrow = param => console.log(this === param);

compareThisArrow(global)
compareThisArrow(module.exports)

compareThisArrow = compareThisArrow.bind(obj)

compareThisArrow(obj)
compareThisArrow(module.exports)

// arrow functions are associated to the context it was written in
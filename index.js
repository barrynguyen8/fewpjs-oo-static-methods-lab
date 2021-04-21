class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  static sanitize(string) {
    let toNotInclude = ["!", "@", "#", "&", "(", ")", "[", "{", "}", "]", ":", ";", "'", ",", "?", "/", "*", "`", "~", "$", "^", "+", "=", "<", ">", '"']; 
    let newString = string.split("");
    newString = newString.filter(x => !toNotInclude.includes(x));
    console.log(newString); 
    return newString.join('')
  }

  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']; 
    let newString = string.split(""); //delimiter - what character - mapping array reference 
    newString = newString.filter(x => !toNotInclude.includes(x));
    console.log(newString); 
    return newString.join('')
  }  
}
Formatter.sanitize("i am barry!");



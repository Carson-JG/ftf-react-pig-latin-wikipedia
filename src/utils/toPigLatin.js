function toPigLatin(word) {
  const isVowel = char => "aeiou".includes(char.toLowerCase());
  const isCap = char => char === char.toUpperCase();

  const firstChar = word.charAt(0);
  const vowelStart = isVowel(firstChar);
  if (vowelStart) return word + "way";

  const firstVowel = word.split("").find(isVowel);
  const vowelIndex = word.indexOf(firstVowel) || 0;

  const end = word.substring(vowelIndex).toLowerCase();
  const start = word.substring(0, vowelIndex).toLowerCase();
  const output = end + start + "ay";

  const capStart = isCap(firstChar);
  return capStart
    ? output.replace(/[a-z]/i, char => char.toUpperCase())
    : output;
}

export default toPigLatin;

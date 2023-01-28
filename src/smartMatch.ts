export type TextRange = { from: number; to: number };

export const smartMatch = (
  input: string,
  searchText: string
): Array<TextRange> | null => {
  //convert both input and searchText to lowercase for case insensitive
  const lowerInput = input.toLowerCase();
  let lowerSearchText = searchText.toLowerCase();

  // removes all white space and non-alphanumerice characters
  const regexFilter = /[^0-9a-zA-Z]/g;
  const inputWords = lowerInput.replaceAll(regexFilter, ' ').split(' ');

  let textRanges: Array<TextRange> | null = null;

  let totalLettersSkipped = 0;

  for (let i = 0; i < inputWords.length; i++) {
    if (!lowerSearchText) break;
    const word = inputWords[i];

    let acc = lowerSearchText.substring(0, word.length);
    const exists = word.includes(acc);

    if (exists) {
      lowerSearchText = lowerSearchText.replace(acc, '');
      textRanges ??= [];
      textRanges.push({
        from: totalLettersSkipped,
        to: totalLettersSkipped + (acc.length - 1),
      });
    }

    totalLettersSkipped += word.length + 1;
  }

  console.log(textRanges);

  return textRanges;
};

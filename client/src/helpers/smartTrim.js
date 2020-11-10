const smartTrim = (str, length, delim, appendix) => {
  if (str.length <= length) return str;

  //   글자수는 70 + delim를 더한 값 만큼 짜르고 " " 주는 이유는 중간에 글자가 잘리는 것을 방지하기 위해서. 그 후에 마지막에 appendix를 붙여준다.
  let trimmedStr = str.substr(0, length + delim.length);

  const lastDelimIndex = trimmedStr.lastIndexOf(delim);
  if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);
  // 글자가 length 보다 길어도 띄어쓰기 전까지만 출력하는 조건문

  if (trimmedStr) trimmedStr += appendix;
  return trimmedStr;
};

export default smartTrim;

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const strCharPosition =  (str, char) => {
  var pos;
  var arr = [];
  pos = str.indexOf(char);
  while (pos > -1) {
    arr.push(pos);
    pos = str.indexOf(char, pos + 1);
  }
  return arr.length;
};

module.exports = {
  formatTime: formatTime,
  strCharPosition: strCharPosition
}

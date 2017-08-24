export default function (name) {
  var arrstr = document.cookie.split('; ')
  for (var i = 0; i < arrstr.length; i++) {
    var temp = arrstr[i].split('=')
    if (temp[0] === name) return unescape(temp[1])
  }
}

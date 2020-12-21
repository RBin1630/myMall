export function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

export function farmatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDay() + 1,
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = o[key] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

// 函数 padLeftZero 的作用：如果月份为1位（如9），则在其左边补0（变为09）
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

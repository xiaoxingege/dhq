export default {
  generateTimeline(market) {
    // todo 以后如果有需求完善其他市场（纳斯达克，纽交所，伦交所等等）分时时间轴，目前默认为沪深市场
    if (market === undefined) {
      market = 'HS';
    }
    let timeline = [];
    if (market === 'HS') {
      let hours = 9;
      let minutes = 30;
      while (hours < 15) {
        if (hours === 11 && minutes === 30) {
          timeline.push('11:30/13:00');
          hours = 13;
          minutes = 0;
        } else {
          timeline.push((hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes));
        }
        minutes++;
        if (minutes === 60) {
          hours++;
          minutes = 0;
        }
      }
      timeline.push('15:00');
    }
    return timeline;
  },
  generateRandomData(min, max, count) {
    if (count > 1000) {
      count = 1000
    }
    let data = [];
    while (count) {
      const item = Math.floor(Math.random() * (max - min + 1) + min)
      data.push(item);
      count--;
    }
    return data;
  },
  formatterInnercode(code) {
    var str = code + ''
    var s = '';
    var begin = str.charAt(0);
    if (begin === '6' || begin === '9') {
      s = str + '.SH'
    } else if (begin === '0' || begin === '2' || begin === '3') {
      s = str + '.SZ'
    } else {
      return code
    }
    return s
  }
}
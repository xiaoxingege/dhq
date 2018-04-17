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
          timeline.push(hours + ':' + (minutes < 10 ? '0' + minutes : minutes));
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
    var s = ''
    var index6 = str.indexOf('6');
    var index9 = str.indexOf('9');
    var index0 = str.indexOf('0');
    var index2 = str.indexOf('2');
    var index3 = str.indexOf('3');
    if (index6 === 0 || index9 === 0) {
      s = str + '.SH'

    } else if (index0 === 0 || index2 === 0 || index3 === 0) {
      s = str + '.SZ'

    } else {
      return false
    }
    return s
  }
}
const breakfast = [7, 60];
const lunch = [12, 60];
const dinner = [19, 60];

function timeToEat(hour, minute) {
  let now = [];
  now.push(hour);
  now.push(minute);
  if (hour >= 7 && hour < 12) {
    let c = lunch.map(function (v, i) {
      return v - now[i] - 1;
    });
    return `${c[0]} hour and ${c[1]} minutes until the next meal, lunch`;
  } else if (hour >= 12 && hour < 19) {
    let c = dinner.map(function (v, i) {
      return v - now[i] - 1;
    });
    return `${c[0]} hour and ${c[1]} minutes until the next meal, dinner`;
  } else if (hour >= 0 && hour < 7) {
    let c = breakfast.map(function (v, i) {
      return v - now[i] - 1;
    });
    return `${c[0]} hour and ${c[1]} minutes until the next meal, breakfast`;
  }else if(hour >= 19 && hour <= 23){
    let c = breakfast.map(function (v, i) {
      return v - now[i] + 24;
    });
    return `${c[0]} hour and ${c[1]} minutes until the next meal, breakfast`;
  }
}

console.log(timeToEat(16, 59));

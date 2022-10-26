const ftoc = function(degF) {

  ans = Math.round(((degF-32)*(5/9))*10)/10;
  return ans;

};

const ctof = function(degC) {

  ans = Math.round(((degC * (9/5)) + 32)*10)/10;
  return ans;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

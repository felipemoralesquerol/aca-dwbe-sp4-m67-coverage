// eslint-disable-next-line require-jsdoc
function divider() {
  this.divide = function (numberA, numberB) {
    if (!numberA || !numberB || numberB ==0) return;

    return numberA / numberB;
  };
}

// eslint-disable-next-line new-cap
module.exports = new divider();

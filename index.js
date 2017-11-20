function produceDrivingRange(blockRange) {
  return function (start, end) {
    const trip =  Math.abs(parseInt(end) - parseInt(start));

    const travel = blockRange - trip;

    if (travel > 0) {
      return `within range by ${travel}`;
    } else {
      return `${Math.abs(travel)} blocks out of range`;
    }
  };
}

function produceTipCalculator(tip) {
  return function (cost) {
    return cost * tip;
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}

const Driver = createDriver();

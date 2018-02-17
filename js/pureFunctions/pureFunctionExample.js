// Impure function

const speed = 20;

function distanceImpureDunction(time) {
  return time * speed;
}

// Pure function

/**
 *
 * @param time
 * @param vesselSpeed
 * @returns {number}
 *
 * Characteristics of pure functions
 *  only access local variables
 *  No side effects
 *  given same input, will always yield same output
 */

function distancePureFunction(time, vesselSpeed) {
  return time * vesselSpeed;
}

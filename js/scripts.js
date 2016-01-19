var triangle_tracker = function(sideA, sideB, sideC) {
  if ((sideA + sideB <= sideC) || (sideB + sideC <= sideA) || (sideC + sideA <= sideB)) {
  return true;
} else if ((sideA !== sideB) && (sideB !== sideC)) {
  return true;
} else if ((sideA === sideB) || (sideC === sideB) || (sideA === sideC)) {
  return false;
} else if ((sideA === sideB) && (sideB === sideC)) {
  return true;
}
}

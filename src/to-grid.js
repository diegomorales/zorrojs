export const toGrid = (value, gridSize, offset = 0) => (Math.round((value - offset) / gridSize) * gridSize) + offset

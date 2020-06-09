/**
 * zorro.js - A heroic helper library
 *
 *  @module zorrojs
 * */

import { animateProps } from './src/animate-props'
import { applyBounds } from './src/apply-bounds'
import { arc } from './src/arc'
import { clearStyles } from './src/clear-styles'
import { compareArrays } from './src/compare-arrays'
import { completeAssign } from './src/complete-assign'
import { compose } from './src/compose'
import { copyObject } from './src/copy-object'
import { deg2Matrix } from './src/deg-2-matrix'
import { deg2Rad } from './src/deg-2-rad'
import * as easings from './src/easings'
import { getStyleValue } from './src/get-style-value'
import { last } from './src/last'
import { matrix2Deg } from './src/matrix-2-deg'
import { matrix2xy } from './src/matrix-2-xy'
import { merge } from './src/merge'
import { once } from './src/once'
import { random } from './src/random'
import { round } from './src/round'
import { setStyles } from './src/set-styles'
import { shuffle } from './src/shuffle'
import { snapValue } from './src/snap-value'
import { str2dom } from './src/str-2-dom'
import { sumDBFS } from './src/sum-dbfs'
import { toDBFS } from './src/to-dbfs'
import { translateValue } from './src/translate-value'
import { valueBuilder } from './src/value-builder'

export {
  animateProps,
  applyBounds,
  arc,
  applyBounds as clamp,
  clearStyles,
  compareArrays,
  completeAssign,
  compose,
  copyObject,
  deg2Matrix,
  deg2Rad,
  easings,
  getStyleValue,
  last,
  matrix2xy,
  matrix2Deg,
  merge,
  once,
  random,
  round,
  setStyles,
  shuffle,
  snapValue,
  str2dom,
  sumDBFS,
  toDBFS,
  translateValue,
  valueBuilder
}

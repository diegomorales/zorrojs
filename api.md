<a name="module_zorrojs"></a>

## zorrojs
zorro.js - A heroic helper library


* [zorrojs](#module_zorrojs)
    * [.applyBounds(value, lowerBound, upperBound)](#module_zorrojs.applyBounds) ⇒ <code>number</code>
    * [.copyObject(obj)](#module_zorrojs.copyObject) ⇒ <code>Object</code>
    * [.deg2Matrix(deg, x, y)](#module_zorrojs.deg2Matrix) ⇒ <code>string</code>
    * [.deg2Rad(degrees)](#module_zorrojs.deg2Rad) ⇒ <code>number</code>
    * [.findPos(list, predicate, [index])](#module_zorrojs.findPos) ⇒ <code>number</code>
    * [.find(list, predicate, [index])](#module_zorrojs.find) ⇒ <code>any</code>
    * [.getStyleValue(el, style)](#module_zorrojs.getStyleValue) ⇒ <code>string</code>
    * [.last(list)](#module_zorrojs.last) ⇒ <code>any</code>
    * [.matrix2Deg(matrixStr)](#module_zorrojs.matrix2Deg) ⇒ <code>number</code>
    * [.matrix2xy(matrixStr)](#module_zorrojs.matrix2xy) ⇒ <code>object</code>
    * [.once(el, eventName, callback, [useCapture])](#module_zorrojs.once)
    * [.random(min, max, decimals)](#module_zorrojs.random) ⇒ <code>number</code>
    * [.round(number, decimals)](#module_zorrojs.round) ⇒ <code>number</code>
    * [.shuffle(arr)](#module_zorrojs.shuffle) ⇒ <code>Array</code>
    * [.sumDBFS(dB1, dB2)](#module_zorrojs.sumDBFS) ⇒ <code>number</code>
    * [.toDBFS(value, maxValue)](#module_zorrojs.toDBFS) ⇒ <code>number</code>
    * [.translateValue(srcValue, srcRangeMin, srcRangeMax, targetRangeMin, targetRangeMax, decimals)](#module_zorrojs.translateValue) ⇒ <code>number</code>
    * [.valueBuilder(value, options)](#module_zorrojs.valueBuilder) ⇒ <code>string</code>

<a name="module_zorrojs.applyBounds"></a>

### zorrojs.applyBounds(value, lowerBound, upperBound) ⇒ <code>number</code>
Apply Bounds to a numeric value.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - Processed value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Number |
| lowerBound | <code>number</code> | Lower bound |
| upperBound | <code>number</code> | Upper bound |

<a name="module_zorrojs.copyObject"></a>

### zorrojs.copyObject(obj) ⇒ <code>Object</code>
Returns a copy of given object without references.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>Object</code> - New object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object |

<a name="module_zorrojs.deg2Matrix"></a>

### zorrojs.deg2Matrix(deg, x, y) ⇒ <code>string</code>
Converts rotation to a matrix string.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>string</code> - Returns matrix string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| deg | <code>number</code> |  | Degree value |
| x | <code>number</code> | <code>0</code> | Horizontal translation |
| y | <code>number</code> | <code>0</code> | Vertical translation |

<a name="module_zorrojs.deg2Rad"></a>

### zorrojs.deg2Rad(degrees) ⇒ <code>number</code>
Converts degrees to radians

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - Angle in radians  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

<a name="module_zorrojs.findPos"></a>

### zorrojs.findPos(list, predicate, [index]) ⇒ <code>number</code>
Returns index of element in array which matches the given condition.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  

| Param | Type |
| --- | --- |
| list | <code>array</code> | 
| predicate | <code>function</code> | 
| [index] | <code>number</code> | 

<a name="module_zorrojs.find"></a>

### zorrojs.find(list, predicate, [index]) ⇒ <code>any</code>
Returns first element in array which matches the given condition.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  

| Param | Type |
| --- | --- |
| list | <code>array</code> | 
| predicate | <code>function</code> | 
| [index] | <code>number</code> | 

<a name="module_zorrojs.getStyleValue"></a>

### zorrojs.getStyleValue(el, style) ⇒ <code>string</code>
Get style value of given DOM element.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>string</code> - Style property value  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | DOM element |
| style | <code>string</code> | Style property name |

<a name="module_zorrojs.last"></a>

### zorrojs.last(list) ⇒ <code>any</code>
Return last item of array or array-like object.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>any</code> - Last item of iterable object  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>array</code> | Iterable object |

<a name="module_zorrojs.matrix2Deg"></a>

### zorrojs.matrix2Deg(matrixStr) ⇒ <code>number</code>
Gets rotation in degress from a matrix string.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - Returns degree value with one decimal place.  

| Param | Type | Description |
| --- | --- | --- |
| matrixStr | <code>string</code> | Matrix string |

<a name="module_zorrojs.matrix2xy"></a>

### zorrojs.matrix2xy(matrixStr) ⇒ <code>object</code>
Gets x, y position (top/left) from a matrix string, rounded to max. 2 decimal places.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>object</code> - Returns object with x and y values  

| Param | Type | Description |
| --- | --- | --- |
| matrixStr | <code>string</code> | Matrix string |

<a name="module_zorrojs.once"></a>

### zorrojs.once(el, eventName, callback, [useCapture])
A simple helper function to fire a callback for an event only once.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>HTMLElement</code> \| <code>Audio</code> |  | Element to attach an event to |
| eventName | <code>string</code> |  | Event name |
| callback | <code>function</code> |  | Callback function |
| [useCapture] | <code>boolean</code> | <code>false</code> | useCapture flag. |

<a name="module_zorrojs.random"></a>

### zorrojs.random(min, max, decimals) ⇒ <code>number</code>
Returns a random value between two numbers, min and max value included.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - Random value  

| Param | Type | Default |
| --- | --- | --- |
| min | <code>number</code> | <code>0</code> | 
| max | <code>number</code> | <code>100</code> | 
| decimals | <code>number</code> | <code>0</code> | 

<a name="module_zorrojs.round"></a>

### zorrojs.round(number, decimals) ⇒ <code>number</code>
Rounds a number to given decimal places.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - Rounded number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| number | <code>number</code> |  | Number to round |
| decimals | <code>number</code> | <code>0</code> | Decimal places |

<a name="module_zorrojs.shuffle"></a>

### zorrojs.shuffle(arr) ⇒ <code>Array</code>
Shuffles the item order of given array-like object. This method returns a new array. The original object is not mutated.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>Array</code> - Shuffled array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | Array or array-like object |

<a name="module_zorrojs.sumDBFS"></a>

### zorrojs.sumDBFS(dB1, dB2) ⇒ <code>number</code>
Sums two dBFS values

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - Resulting dBFS value  

| Param | Type | Description |
| --- | --- | --- |
| dB1 | <code>number</code> | dBFS value |
| dB2 | <code>number</code> | dBFS value |

<a name="module_zorrojs.toDBFS"></a>

### zorrojs.toDBFS(value, maxValue) ⇒ <code>number</code>
(Describe this method)

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - dBFS value  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| maxValue | <code>number</code> | 

<a name="module_zorrojs.translateValue"></a>

### zorrojs.translateValue(srcValue, srcRangeMin, srcRangeMax, targetRangeMin, targetRangeMax, decimals) ⇒ <code>number</code>
Translates a numeric value to a new range.

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>number</code> - Translated target value  

| Param | Type | Description |
| --- | --- | --- |
| srcValue | <code>number</code> | Original value within give source range |
| srcRangeMin | <code>number</code> | Lower bound of source range |
| srcRangeMax | <code>number</code> | Upper bound of source range |
| targetRangeMin | <code>number</code> | Lower bound of target range |
| targetRangeMax | <code>number</code> | Upper bound of target range |
| decimals | <code>number</code> | Decimal places to round the number to |

<a name="module_zorrojs.valueBuilder"></a>

### zorrojs.valueBuilder(value, options) ⇒ <code>string</code>
Little helper to create value formats

**Kind**: static method of [<code>zorrojs</code>](#module_zorrojs)  
**Returns**: <code>string</code> - Transformed value  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| options | <code>object</code> | 


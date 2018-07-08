## Constants

<dl>
<dt><a href="#copyObject">copyObject</a> ⇒ <code>Object</code></dt>
<dd><p>Returns a copy of given object without references.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#round">round(number, decimals)</a> ⇒ <code>number</code></dt>
<dd><p>Rounds a number to given decimal places.</p>
</dd>
<dt><a href="#matrix2Deg">matrix2Deg(matrixStr)</a> ⇒ <code>number</code></dt>
<dd><p>Gets rotation in degress from a matrix string.</p>
</dd>
<dt><a href="#deg2Matrix">deg2Matrix(deg, x, y)</a> ⇒ <code>string</code></dt>
<dd><p>Converts rotation to a matrix string.</p>
</dd>
<dt><a href="#matrix2xy">matrix2xy(matrixStr)</a> ⇒ <code>object</code></dt>
<dd><p>Gets x, y position (top/left) from a matrix string, rounded to max. 2 decimal places.</p>
</dd>
<dt><a href="#translateValue">translateValue(srcValue, srcRangeMin, srcRangeMax, targetRangeMin, targetRangeMax, round)</a> ⇒ <code>number</code></dt>
<dd><p>Translates a numeric value to a new range.</p>
</dd>
<dt><a href="#applyBounds">applyBounds(value, lowerBound, upperBound)</a> ⇒ <code>number</code></dt>
<dd><p>Apply Bounds to a numeric value.</p>
</dd>
<dt><a href="#getStyleValue">getStyleValue(el, style)</a> ⇒ <code>string</code></dt>
<dd><p>Get style value of given DOM element.</p>
</dd>
<dt><a href="#once">once(el, eventName, callback, [useCapture])</a></dt>
<dd><p>A simple helper function to fire a callback for an event only once.</p>
</dd>
<dt><a href="#valueBuilder">valueBuilder(value, options)</a> ⇒ <code>string</code></dt>
<dd><p>Little helper to create value formats</p>
</dd>
<dt><a href="#random">random(min, max, decimals)</a> ⇒ <code>number</code></dt>
<dd><p>Returns a random value between two numbers, min and max value included.</p>
</dd>
<dt><a href="#find">find(list, predicate, [index])</a> ⇒ <code>any</code></dt>
<dd><p>Returns first element in array which matches the given condition.</p>
</dd>
<dt><a href="#findPos">findPos(list, predicate, [index])</a> ⇒ <code>number</code></dt>
<dd><p>Returns index of element in array which matches the given condition.</p>
</dd>
</dl>

<a name="copyObject"></a>

## copyObject ⇒ <code>Object</code>
Returns a copy of given object without references.

**Kind**: global constant  
**Returns**: <code>Object</code> - New object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object |

<a name="round"></a>

## round(number, decimals) ⇒ <code>number</code>
Rounds a number to given decimal places.

**Kind**: global function  
**Returns**: <code>number</code> - Rounded number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| number | <code>number</code> |  | Number to round |
| decimals | <code>number</code> | <code>2</code> | Decimal places |

<a name="matrix2Deg"></a>

## matrix2Deg(matrixStr) ⇒ <code>number</code>
Gets rotation in degress from a matrix string.

**Kind**: global function  
**Returns**: <code>number</code> - Returns degree value with one decimal place.  

| Param | Type | Description |
| --- | --- | --- |
| matrixStr | <code>string</code> | Matrix string |

<a name="deg2Matrix"></a>

## deg2Matrix(deg, x, y) ⇒ <code>string</code>
Converts rotation to a matrix string.

**Kind**: global function  
**Returns**: <code>string</code> - Returns matrix string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| deg | <code>number</code> |  | Degree value |
| x | <code>number</code> | <code>0</code> | Horizontal translation |
| y | <code>number</code> | <code>0</code> | Vertical translation |

<a name="matrix2xy"></a>

## matrix2xy(matrixStr) ⇒ <code>object</code>
Gets x, y position (top/left) from a matrix string, rounded to max. 2 decimal places.

**Kind**: global function  
**Returns**: <code>object</code> - Returns object with x and y values  

| Param | Type | Description |
| --- | --- | --- |
| matrixStr | <code>string</code> | Matrix string |

<a name="translateValue"></a>

## translateValue(srcValue, srcRangeMin, srcRangeMax, targetRangeMin, targetRangeMax, round) ⇒ <code>number</code>
Translates a numeric value to a new range.

**Kind**: global function  
**Returns**: <code>number</code> - Translated target value  

| Param | Type | Description |
| --- | --- | --- |
| srcValue | <code>number</code> | Original value within give source range |
| srcRangeMin | <code>number</code> | Lower bound of source range |
| srcRangeMax | <code>number</code> | Upper bound of source range |
| targetRangeMin | <code>number</code> | Lower bound of target range |
| targetRangeMax | <code>number</code> | Upper bound of target range |
| round | <code>number</code> | Decimal places to round the number to |

<a name="applyBounds"></a>

## applyBounds(value, lowerBound, upperBound) ⇒ <code>number</code>
Apply Bounds to a numeric value.

**Kind**: global function  
**Returns**: <code>number</code> - Processed value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Number |
| lowerBound | <code>number</code> | Lower bound |
| upperBound | <code>number</code> | Upper bound |

<a name="getStyleValue"></a>

## getStyleValue(el, style) ⇒ <code>string</code>
Get style value of given DOM element.

**Kind**: global function  
**Returns**: <code>string</code> - Style property value  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | DOM element |
| style | <code>string</code> | Style property name |

<a name="once"></a>

## once(el, eventName, callback, [useCapture])
A simple helper function to fire a callback for an event only once.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>HTMLElement</code> \| <code>Audio</code> |  | Element to attach an event to |
| eventName | <code>string</code> |  | Event name |
| callback | <code>function</code> |  | Callback function |
| [useCapture] | <code>boolean</code> | <code>false</code> | useCapture flag. |

<a name="valueBuilder"></a>

## valueBuilder(value, options) ⇒ <code>string</code>
Little helper to create value formats

**Kind**: global function  
**Returns**: <code>string</code> - Transformed value  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| options | <code>object</code> | 

<a name="random"></a>

## random(min, max, decimals) ⇒ <code>number</code>
Returns a random value between two numbers, min and max value included.

**Kind**: global function  
**Returns**: <code>number</code> - Random value  

| Param | Type | Default |
| --- | --- | --- |
| min | <code>number</code> | <code>0</code> | 
| max | <code>number</code> | <code>100</code> | 
| decimals | <code>number</code> | <code>0</code> | 

<a name="find"></a>

## find(list, predicate, [index]) ⇒ <code>any</code>
Returns first element in array which matches the given condition.

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>array</code> | 
| predicate | <code>function</code> | 
| [index] | <code>number</code> | 

<a name="findPos"></a>

## findPos(list, predicate, [index]) ⇒ <code>number</code>
Returns index of element in array which matches the given condition.

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>array</code> | 
| predicate | <code>function</code> | 
| [index] | <code>number</code> | 


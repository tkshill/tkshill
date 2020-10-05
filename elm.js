(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.bO.a2 === region.cd.a2)
	{
		return 'on line ' + region.bO.a2;
	}
	return 'on lines ' + region.bO.a2 + ' through ' + region.cd.a2;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ds,
		impl.dT,
		impl.dQ,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		ae: func(record.ae),
		bP: record.bP,
		bK: record.bK
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.ae;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bP;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bK) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ds,
		impl.dT,
		impl.dQ,
		function(sendToApp, initialModel) {
			var view = impl.dV;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ds,
		impl.dT,
		impl.dQ,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.bN && impl.bN(sendToApp)
			var view = impl.dV;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.db);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.aT) && (_VirtualDom_doc.title = title = doc.aT);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.dB;
	var onUrlRequest = impl.dC;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		bN: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.cJ === next.cJ
							&& curr.cn === next.cn
							&& curr.cF.a === next.cF.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		ds: function(flags)
		{
			return A3(impl.ds, flags, _Browser_getUrl(), key);
		},
		dV: impl.dV,
		dT: impl.dT,
		dQ: impl.dQ
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { dn: 'hidden', dc: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { dn: 'mozHidden', dc: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { dn: 'msHidden', dc: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { dn: 'webkitHidden', dc: 'webkitvisibilitychange' }
		: { dn: 'hidden', dc: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		cQ: _Browser_getScene(),
		c2: {
			c4: _Browser_window.pageXOffset,
			c5: _Browser_window.pageYOffset,
			c3: _Browser_doc.documentElement.clientWidth,
			cl: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		c3: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		cl: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			cQ: {
				c3: node.scrollWidth,
				cl: node.scrollHeight
			},
			c2: {
				c4: node.scrollLeft,
				c5: node.scrollTop,
				c3: node.clientWidth,
				cl: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			cQ: _Browser_getScene(),
			c2: {
				c4: x,
				c5: y,
				c3: _Browser_doc.documentElement.clientWidth,
				cl: _Browser_doc.documentElement.clientHeight
			},
			dk: {
				c4: x + rect.left,
				c5: y + rect.top,
				c3: rect.width,
				cl: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.q) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.s),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.s);
		} else {
			var treeLen = builder.q * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.t) : builder.t;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.q);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.s) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.s);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{t: nodeList, q: (len / $elm$core$Array$branchFactor) | 0, s: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $author$project$Elmstatic$PostList = F4(
	function (posts, section, siteTitle, title) {
		return {dG: posts, cR: section, bs: siteTitle, aT: title};
	});
var $author$project$Elmstatic$Post = F8(
	function (content, date, format, link, section, siteTitle, tags, title) {
		return {de: content, dg: date, cj: format, dx: link, cR: section, bs: siteTitle, dR: tags, aT: title};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Elmstatic$decodeContent = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2($elm$json$Json$Decode$field, 'markdown', $elm$json$Json$Decode$string),
			A2($elm$json$Json$Decode$field, 'content', $elm$json$Json$Decode$string)
		]));
var $author$project$Elmstatic$ElmMarkup = 1;
var $author$project$Elmstatic$Markdown = 0;
var $author$project$Elmstatic$decodeFormat = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			function (format) {
				return (format === 'emu') ? 1 : 0;
			},
			A2($elm$json$Json$Decode$field, 'format', $elm$json$Json$Decode$string)),
			$elm$json$Json$Decode$succeed(0)
		]));
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map8 = _Json_map8;
var $author$project$Elmstatic$decodePost = A9(
	$elm$json$Json$Decode$map8,
	$author$project$Elmstatic$Post,
	$author$project$Elmstatic$decodeContent,
	A2($elm$json$Json$Decode$field, 'date', $elm$json$Json$Decode$string),
	$author$project$Elmstatic$decodeFormat,
	A2($elm$json$Json$Decode$field, 'link', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'section', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'siteTitle', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map4 = _Json_map4;
var $author$project$Elmstatic$decodePostList = A5(
	$elm$json$Json$Decode$map4,
	$author$project$Elmstatic$PostList,
	A2(
		$elm$json$Json$Decode$field,
		'posts',
		$elm$json$Json$Decode$list($author$project$Elmstatic$decodePost)),
	A2($elm$json$Json$Decode$field, 'section', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'siteTitle', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {ck: fragment, cn: host, cD: path, cF: port_, cJ: protocol, cK: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Elmstatic$inlineScript = function (js) {
	return A3(
		$elm$html$Html$node,
		'citatsmle-script',
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(js)
			]));
};
var $author$project$Elmstatic$script = function (src) {
	return A3(
		$elm$html$Html$node,
		'citatsmle-script',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'src', src)
			]),
		_List_Nil);
};
var $author$project$Elmstatic$stylesheet = function (href) {
	return A3(
		$elm$html$Html$node,
		'link',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'href', href),
				A2($elm$html$Html$Attributes$attribute, 'rel', 'stylesheet'),
				A2($elm$html$Html$Attributes$attribute, 'type', 'text/css')
			]),
		_List_Nil);
};
var $author$project$Elmstatic$htmlTemplate = F2(
	function (title, contentNodes) {
		return A3(
			$elm$html$Html$node,
			'html',
			_List_Nil,
			_List_fromArray(
				[
					A3(
					$elm$html$Html$node,
					'head',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$html$Html$node,
							'title',
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A3(
							$elm$html$Html$node,
							'meta',
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$attribute, 'charset', 'utf-8')
								]),
							_List_Nil),
							$author$project$Elmstatic$script('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.1/highlight.min.js'),
							$author$project$Elmstatic$script('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.1/languages/elm.min.js'),
							$author$project$Elmstatic$inlineScript('hljs.initHighlightingOnLoad();'),
							$author$project$Elmstatic$stylesheet('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.1/styles/default.min.css'),
							$author$project$Elmstatic$stylesheet('//fonts.googleapis.com/css?family=Open+Sans|Proza+Libre|Inconsolata')
						])),
					A3($elm$html$Html$node, 'body', _List_Nil, contentNodes)
				]));
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Elmstatic$layout = F2(
	function (decoder, view) {
		return $elm$browser$Browser$document(
			{
				ds: function (contentJson) {
					return _Utils_Tuple2(contentJson, $elm$core$Platform$Cmd$none);
				},
				dQ: function (_v0) {
					return $elm$core$Platform$Sub$none;
				},
				dT: F2(
					function (msg, contentJson) {
						return _Utils_Tuple2(contentJson, $elm$core$Platform$Cmd$none);
					}),
				dV: function (contentJson) {
					var _v1 = A2($elm$json$Json$Decode$decodeValue, decoder, contentJson);
					if (_v1.$ === 1) {
						var error = _v1.a;
						return {
							db: _List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$Attributes$attribute,
											'error',
											$elm$json$Json$Decode$errorToString(error))
										]),
									_List_Nil)
								]),
							aT: 'error'
						};
					} else {
						var content = _v1.a;
						var _v2 = view(content);
						if (_v2.$ === 1) {
							var viewError = _v2.a;
							return {
								db: _List_fromArray(
									[
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$attribute, 'error', viewError)
											]),
										_List_Nil)
									]),
								aT: 'error'
							};
						} else {
							var viewHtml = _v2.a;
							return {
								db: _List_fromArray(
									[
										A2($author$project$Elmstatic$htmlTemplate, content.bs, viewHtml)
									]),
								aT: ''
							};
						}
					}
				}
			});
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $author$project$Page$githubIcon = function () {
	var pathNode = A3(
		$elm$html$Html$node,
		'path',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'fill', '#fff'),
				A2($elm$html$Html$Attributes$attribute, 'd', '\nM7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z\n            ')
			]),
		_List_Nil);
	return A3(
		$elm$html$Html$node,
		'svg',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'width', '16'),
				A2($elm$html$Html$Attributes$attribute, 'height', '16'),
				A2($elm$html$Html$Attributes$attribute, 'viewBox', '0 0 16 16')
			]),
		_List_fromArray(
			[pathNode]));
}();
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Page$twitterIcon = function () {
	var pathNode = A3(
		$elm$html$Html$node,
		'path',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'fill', '#fff'),
				A2($elm$html$Html$Attributes$attribute, 'd', '\nM15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809 c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z\n            ')
			]),
		_List_Nil);
	return A3(
		$elm$html$Html$node,
		'svg',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'width', '16'),
				A2($elm$html$Html$Attributes$attribute, 'height', '16'),
				A2($elm$html$Html$Attributes$attribute, 'viewBox', '0 0 16 16')
			]),
		_List_fromArray(
			[pathNode]));
}();
var $author$project$Page$footer = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('footer')
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$img,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$alt('Author\'s blog'),
					$elm$html$Html$Attributes$src('/img/logo.png'),
					A2($elm$html$Html$Attributes$attribute, 'style', 'float: left; padding-top: 7px'),
					A2($elm$html$Html$Attributes$attribute, 'width', '75')
				]),
			_List_Nil),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('link')
				]),
			_List_fromArray(
				[
					$author$project$Page$githubIcon,
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://github.com')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Author\'s GitHub')
						]))
				])),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('link')
				]),
			_List_fromArray(
				[
					$author$project$Page$twitterIcon,
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://twitter.com')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Author\'s Twitter')
						]))
				])),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('link')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://www.npmjs.com/package/elmstatic')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Created with Elmstatic')
						]))
				]))
		]));
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Page$header = _List_fromArray(
	[
		A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('header-logo')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$alt('Author\'s blog'),
						$elm$html$Html$Attributes$src('/img/logo.png'),
						A2($elm$html$Html$Attributes$attribute, 'width', '100')
					]),
				_List_Nil)
			])),
		A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('navigation')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$ul,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('/posts')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Posts')
									]))
							])),
						A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('/about')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('About')
									]))
							])),
						A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('/contact')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Contact')
									]))
							]))
					]))
			]))
	]);
var $rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Preprocess$Snippet = $elm$core$Basics$identity;
var $rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$Structure$TypeSelector = $elm$core$Basics$identity;
var $rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Global$typeSelector = F2(
	function (selectorStr, styles) {
		var sequence = A2($rtfeldman$elm_css$Css$Structure$TypeSelectorSequence, selectorStr, _List_Nil);
		var sel = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
		return _List_fromArray(
			[
				$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, sel, _List_Nil, styles))
			]);
	});
var $rtfeldman$elm_css$Css$Global$a = $rtfeldman$elm_css$Css$Global$typeSelector('a');
var $rtfeldman$elm_css$Css$Structure$Compatible = 0;
var $rtfeldman$elm_css$Css$auto = {c7: 0, bc: 0, aE: 0, bf: 0, dw: 0, aI: 0, ad: 0, T: 0, aM: 0, Q: 0, bt: 0, aS: 0, J: 0, bT: 'auto'};
var $rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'background-color', c.bT);
};
var $rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2($rtfeldman$elm_css$Css$property, key, arg.bT);
	});
var $rtfeldman$elm_css$Css$baseline = $rtfeldman$elm_css$Css$prop1('baseline');
var $rtfeldman$elm_css$Css$Global$body = $rtfeldman$elm_css$Css$Global$typeSelector('body');
var $rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			$rtfeldman$elm_css$Css$property,
			key,
			A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.bT, argB.bT, argC.bT])));
	});
var $rtfeldman$elm_css$Css$border3 = $rtfeldman$elm_css$Css$prop3('border');
var $rtfeldman$elm_css$Css$borderBottom3 = $rtfeldman$elm_css$Css$prop3('border-bottom');
var $rtfeldman$elm_css$Css$borderRadius = $rtfeldman$elm_css$Css$prop1('border-radius');
var $rtfeldman$elm_css$Css$borderTop3 = $rtfeldman$elm_css$Css$prop3('border-top');
var $rtfeldman$elm_css$Css$center = $rtfeldman$elm_css$Css$prop1('center');
var $rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 1, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
		return _List_fromArray(
			[
				$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
			]);
	});
var $rtfeldman$elm_css$Css$Global$class = F2(
	function (str, styles) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
			styles,
			$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
				_List_fromArray(
					[
						$rtfeldman$elm_css$Css$Structure$ClassSelector(str)
					])));
	});
var $rtfeldman$elm_css$Css$Global$code = $rtfeldman$elm_css$Css$Global$typeSelector('code');
var $rtfeldman$elm_css$Css$color = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'color', c.bT);
};
var $rtfeldman$elm_css$Css$Structure$Descendant = 3;
var $rtfeldman$elm_css$Css$Preprocess$NestSnippet = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Global$descendants = $rtfeldman$elm_css$Css$Preprocess$NestSnippet(3);
var $rtfeldman$elm_css$Css$display = $rtfeldman$elm_css$Css$prop1('display');
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 0:
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 1:
				var list = sequence.a;
				return $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_v0) {
	var declarations = _v0;
	return declarations;
};
var $rtfeldman$elm_css$Css$Global$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (!declarations.a.$) {
				var _v5 = declarations.a.a;
				var firstSelector = _v5.a;
				var otherSelectors = _v5.b;
				var styles = _v5.c;
				var rest = declarations.b;
				return _Utils_ap(
					A2(
						$elm$core$List$cons,
						A2($rtfeldman$elm_css$Css$Global$unwrapSelector, firstSelector, styles),
						otherSelectors),
					$rtfeldman$elm_css$Css$Global$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Global$unwrapSelector = F2(
	function (_v0, styles) {
		var sequence = _v0.a;
		var combinators = _v0.b;
		var mPseudo = _v0.c;
		var unwrapSequenceSelector = F2(
			function (style, s) {
				if (style.$ === 1) {
					var nestedSelector = style.a;
					var evenMoreNestedStyles = style.b;
					return A3(
						$elm$core$List$foldr,
						unwrapSequenceSelector,
						A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, nestedSelector, s),
						evenMoreNestedStyles);
				} else {
					return s;
				}
			});
		var unwrapCombinatorSelector = F2(
			function (style, cs) {
				if (style.$ === 2) {
					var combinator = style.a;
					var snippets = style.b;
					return A2(
						$elm$core$List$append,
						cs,
						A2(
							$elm$core$List$map,
							function (_v3) {
								var s = _v3.a;
								return _Utils_Tuple2(combinator, s);
							},
							A2(
								$elm$core$List$concatMap,
								A2($elm$core$Basics$composeR, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, $rtfeldman$elm_css$Css$Global$collectSelectors),
								snippets)));
				} else {
					return cs;
				}
			});
		return A3(
			$rtfeldman$elm_css$Css$Structure$Selector,
			A3($elm$core$List$foldr, unwrapSequenceSelector, sequence, styles),
			A3($elm$core$List$foldr, unwrapCombinatorSelector, combinators, styles),
			mPseudo);
	});
var $rtfeldman$elm_css$Css$Global$each = F2(
	function (snippetCreators, styles) {
		var selectorsToSnippet = function (selectors) {
			if (!selectors.b) {
				return _List_Nil;
			} else {
				var first = selectors.a;
				var rest = selectors.b;
				return _List_fromArray(
					[
						$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
						A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, first, rest, styles))
					]);
			}
		};
		return selectorsToSnippet(
			$rtfeldman$elm_css$Css$Global$collectSelectors(
				A2(
					$elm$core$List$concatMap,
					$rtfeldman$elm_css$Css$Preprocess$unwrapSnippet,
					A2(
						$elm$core$List$map,
						$elm$core$Basics$apR(_List_Nil),
						snippetCreators))));
	});
var $rtfeldman$elm_css$Css$EmUnits = 0;
var $elm$core$String$fromFloat = _String_fromNumber;
var $rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			bU: 0,
			b4: 0,
			aE: 0,
			A: 0,
			a1: 0,
			aI: 0,
			ad: 0,
			aJ: 0,
			aK: 0,
			ar: 0,
			as: 0,
			T: 0,
			af: numericValue,
			aR: 0,
			aU: unitLabel,
			a8: units,
			bT: _Utils_ap(
				$elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var $rtfeldman$elm_css$Css$em = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'em');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return $elm$core$List$isEmpty(list) ? {bT: 'none'} : {
		bT: A2(
			$elm$core$String$join,
			', ',
			A2(
				$elm$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var $rtfeldman$elm_css$Css$fontFamilies = A2(
	$elm$core$Basics$composeL,
	$rtfeldman$elm_css$Css$prop1('font-family'),
	$rtfeldman$elm_css$Css$stringsToValue);
var $rtfeldman$elm_css$Css$fontSize = $rtfeldman$elm_css$Css$prop1('font-size');
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _v0) {
		var keyframesByName = _v0.a;
		var declarations = _v0.b;
		switch (declaration.$) {
			case 0:
				var _v2 = declaration.a;
				var properties = _v2.c;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 1:
				var styleBlocks = declaration.b;
				return A2(
					$elm$core$List$all,
					function (_v3) {
						var properties = _v3.c;
						return $elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 2:
				var otherDeclarations = declaration.b;
				return $elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 3:
				return _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 4:
				var properties = declaration.b;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 5:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 6:
				var record = declaration.a;
				return $elm$core$String$isEmpty(record.dh) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3($elm$core$Dict$insert, record.dA, record.dh, keyframesByName),
					declarations);
			case 7:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 8:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					$elm$core$List$all,
					function (_v4) {
						var properties = _v4.b;
						return $elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
		}
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 6, a: a};
};
var $rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			$elm$core$List$append,
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var decl = _v0.b;
					return $rtfeldman$elm_css$Css$Structure$Keyframes(
						{dh: decl, dA: name});
				},
				$elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_v0) {
	var charset = _v0.b6;
	var imports = _v0.co;
	var namespaces = _v0.cz;
	var declarations = _v0.di;
	var _v1 = A3(
		$elm$core$List$foldr,
		$rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _v1.a;
	var compactedDeclarations = _v1.b;
	var finalDeclarations = A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {b6: charset, di: finalDeclarations, co: imports, cz: namespaces};
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.cg + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$append(': '),
			expression.bT)) + ')'));
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType) {
		case 0:
			return 'print';
		case 1:
			return 'screen';
		default:
			return 'speech';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				$elm$core$String$join,
				' and ',
				A2(
					$elm$core$List$cons,
					$rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 0:
			var expressions = mediaQuery.a;
			return A2(
				$elm$core$String$join,
				' and ',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions));
		case 1:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 2:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + ($rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var $rtfeldman$elm_css$Css$Structure$Output$importToString = function (_v0) {
	var name = _v0.a;
	var mediaQueries = _v0.b;
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
			mediaQueries));
};
var $rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_v0) {
	var prefix = _v0.a;
	var str = _v0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var $rtfeldman$elm_css$Css$Structure$Output$spaceIndent = '    ';
var $rtfeldman$elm_css$Css$Structure$Output$indent = function (str) {
	return _Utils_ap($rtfeldman$elm_css$Css$Structure$Output$spaceIndent, str);
};
var $rtfeldman$elm_css$Css$Structure$Output$noIndent = '';
var $rtfeldman$elm_css$Css$Structure$Output$emitProperty = function (str) {
	return str + ';';
};
var $rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $rtfeldman$elm_css$Css$Structure$Output$indent, $rtfeldman$elm_css$Css$Structure$Output$emitProperty),
			properties));
};
var $elm$core$String$append = _String_append;
var $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_v0) {
	var str = _v0;
	return '::' + str;
};
var $rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator) {
		case 0:
			return '+';
		case 1:
			return '~';
		case 2:
			return '>';
		default:
			return '';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 0:
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 1:
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 2:
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 0:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
		case 1:
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return $elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A2(
				$elm$core$String$join,
				'',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors));
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_v0) {
	var combinator = _v0.a;
	var sequence = _v0.b;
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator),
				$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence)
			]));
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_v0) {
	var simpleSelectorSequence = _v0.a;
	var chain = _v0.b;
	var pseudoElement = _v0.c;
	var segments = A2(
		$elm$core$List$cons,
		$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			[
				A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement))
			]));
	return A2(
		$elm$core$String$append,
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$filter,
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
				segments)),
		pseudoElementsString);
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		var selectorStr = A2(
			$elm$core$String$join,
			', ',
			A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Structure$Output$selectorToString,
				A2($elm$core$List$cons, firstSelector, otherSelectors)));
		return A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					selectorStr,
					' {\n',
					indentLevel,
					$rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties),
					'\n',
					indentLevel,
					'}'
				]));
	});
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 0:
			var styleBlock = decl.a;
			return A2($rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, $rtfeldman$elm_css$Css$Structure$Output$noIndent, styleBlock);
		case 1:
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A2(
				$elm$core$String$join,
				',\n',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, mediaQueries));
			var blocks = A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						$rtfeldman$elm_css$Css$Structure$Output$indent,
						$rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock($rtfeldman$elm_css$Css$Structure$Output$spaceIndent)),
					styleBlocks));
			return '@media ' + (query + (' {\n' + (blocks + '\n}')));
		case 2:
			return 'TODO';
		case 3:
			return 'TODO';
		case 4:
			return 'TODO';
		case 5:
			return 'TODO';
		case 6:
			var name = decl.a.dA;
			var declaration = decl.a.dh;
			return '@keyframes ' + (name + (' {\n' + (declaration + '\n}')));
		case 7:
			return 'TODO';
		case 8:
			return 'TODO';
		default:
			return 'TODO';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_v0) {
	var charset = _v0.b6;
	var imports = _v0.co;
	var namespaces = _v0.cz;
	var declarations = _v0.di;
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$importToString, imports)),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$namespaceToString, namespaces)),
					A2(
					$elm$core$String$join,
					'\n\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, declarations))
				])));
};
var $rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 8, a: a};
};
var $rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 5, a: a};
};
var $rtfeldman$elm_css$Css$Structure$PageRule = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 7, a: a};
};
var $rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		return A3(
			$rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var $rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 0:
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2($rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 1:
						var _v1 = declarations.a;
						var mediaQueries = _v1.a;
						var styleBlocks = _v1.b;
						return _List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									$rtfeldman$elm_css$Css$Structure$mapLast,
									$rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					$rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2($elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var $rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _v0) {
		var sequence = _v0.a;
		var selectors = _v0.b;
		return A3(
			$rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			$elm$core$Maybe$Just(pseudo));
	});
var $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _v1 = list.a;
				var combinator = _v1.a;
				var sequence = _v1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (!declarations.a.$) {
				var _v1 = declarations.a.a;
				var firstSelector = _v1.a;
				var otherSelectors = _v1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2($elm$core$List$cons, firstSelector, otherSelectors),
					$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e};
	});
var $rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_v0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 0:
							var styleBlock = declarations.a.a;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 1:
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _v1 = declarations.a;
									var mediaQueries = _v1.a;
									var _v2 = _v1.b;
									var styleBlock = _v2.a;
									return _List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _v3 = declarations.a;
									var mediaQueries = _v3.a;
									var _v4 = _v3.b;
									var first = _v4.a;
									var rest = _v4.b;
									var _v5 = A2(
										$rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_v5.b && (_v5.a.$ === 1)) && (!_v5.b.b)) {
										var _v6 = _v5.a;
										var newMediaQueries = _v6.a;
										var newStyleBlocks = _v6.b;
										return _List_fromArray(
											[
												A2(
												$rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2($elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _v5;
										return newDeclarations;
									}
								}
							} else {
								break _v0$12;
							}
						case 2:
							var _v7 = declarations.a;
							var str = _v7.a;
							var nestedDeclarations = _v7.b;
							return _List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 3:
							var _v8 = declarations.a;
							var str1 = _v8.a;
							var str2 = _v8.b;
							var str3 = _v8.c;
							var str4 = _v8.d;
							var styleBlock = _v8.e;
							return A2(
								$elm$core$List$map,
								A4($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 4:
							var _v9 = declarations.a;
							return declarations;
						case 5:
							return declarations;
						case 6:
							return declarations;
						case 7:
							return declarations;
						case 8:
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			$elm$core$List$cons,
			first,
			A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var $elm$core$String$cons = _String_cons;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {aB: charsProcessed, aH: hash, cS: seed, aN: shift};
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1 = 3432918353;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Bitwise$or = _Bitwise_or;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$finalize = function (data) {
	var acc = (!(!data.aH)) ? (data.cS ^ A2(
		$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
		$rtfeldman$elm_css$ElmCssVendor$Murmur3$c2,
		A2(
			$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
			15,
			A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1, data.aH)))) : data.cS;
	var h0 = acc ^ data.aB;
	var h1 = A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
			5,
			A2(
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
					$rtfeldman$elm_css$ElmCssVendor$Murmur3$c2,
					A2(
						$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
						15,
						A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1, k1))))) + 3864292196;
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.aH | ((255 & $elm$core$Char$toCode(c)) << data.aN);
		var _v0 = data.aN;
		if (_v0 === 24) {
			return {
				aB: data.aB + 1,
				aH: 0,
				cS: A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$mix, data.cS, res),
				aN: 0
			};
		} else {
			return {aB: data.aB + 1, aH: res, cS: data.cS, aN: data.aN + 8};
		}
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString = F2(
	function (seed, str) {
		return $rtfeldman$elm_css$ElmCssVendor$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$hashFold,
				A4($rtfeldman$elm_css$ElmCssVendor$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $rtfeldman$elm_css$Hash$murmurSeed = 15739;
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return '0';
			case 1:
				return '1';
			case 2:
				return '2';
			case 3:
				return '3';
			case 4:
				return '4';
			case 5:
				return '5';
			case 6:
				return '6';
			case 7:
				return '7';
			case 8:
				return '8';
			case 9:
				return '9';
			case 10:
				return 'a';
			case 11:
				return 'b';
			case 12:
				return 'c';
			case 13:
				return 'd';
			case 14:
				return 'e';
			case 15:
				return 'f';
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			'-',
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		$elm$core$String$cons,
		'_',
		$rtfeldman$elm_hex$Hex$toString(
			A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString, $rtfeldman$elm_css$Hash$murmurSeed, str)));
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 1) {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 9, a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				$elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (!declaration.$) {
			var styleBlock = declaration.a;
			return A2(
				$rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (!declaration.$) {
			var structureStyleBlock = declaration.a;
			return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 0:
				var structureStyleBlock = declaration.a;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 1:
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 2:
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 3:
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 4:
				return declaration;
			case 5:
				return declaration;
			case 6:
				return declaration;
			case 7:
				return declaration;
			case 8:
				return declaration;
			default:
				return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$elm$core$List$tail(decls));
		};
		var nextResult = A2(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _v14 = _Utils_Tuple2(
				$elm$core$List$head(nextResult),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((!_v14.a.$) && (!_v14.b.$)) {
				var nextResultParent = _v14.a.a;
				var originalParent = _v14.b.a;
				return _Utils_ap(
					A2(
						$elm$core$List$take,
						$elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return $elm$core$List$concat(
				A2(
					$rtfeldman$elm_css$Css$Structure$mapLast,
					$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						$elm$core$List$map,
						$elm$core$List$singleton,
						A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				insertStylesToNestedDecl,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 0:
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 1:
					var _v4 = styles.a;
					var selector = _v4.a;
					var nestedStyles = _v4.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 2:
					var _v5 = styles.a;
					var selectorCombinator = _v5.a;
					var snippets = _v5.b;
					var rest = styles.b;
					var chain = F2(
						function (_v9, _v10) {
							var originalSequence = _v9.a;
							var originalTuples = _v9.b;
							var originalPseudoElement = _v9.c;
							var newSequence = _v10.a;
							var newTuples = _v10.b;
							var newPseudoElement = _v10.c;
							return A3(
								$rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								$rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 0:
								var _v7 = declaration.a;
								var firstSelector = _v7.a;
								var otherSelectors = _v7.b;
								var nestedStyles = _v7.c;
								var newSelectors = A2(
									$elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											$elm$core$List$map,
											chain(originalSelector),
											A2($elm$core$List$cons, firstSelector, otherSelectors));
									},
									$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 1:
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 2:
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 3:
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									$elm$core$List$map,
									A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 4:
								var str = declaration.a;
								var properties = declaration.b;
								return _List_fromArray(
									[
										A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
									]);
							case 5:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 6:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 7:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return $elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								$elm$core$List$map,
								expandDeclaration,
								A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 3:
					var _v11 = styles.a;
					var pseudoElement = _v11.a;
					var nestedStyles = _v11.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 5:
					var str = styles.a.a;
					var rest = styles.b;
					var name = $rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						$elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$Keyframes(
								{dh: str, dA: name})
							]));
				case 4:
					var _v12 = styles.a;
					var mediaQueries = _v12.a;
					var nestedStyles = _v12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _v13 = $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_v13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _v13.a;
							var otherSelectors = _v13.b;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									$elm$core$List$singleton(
										$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_v2) {
	var firstSelector = _v2.a;
	var otherSelectors = _v2.b;
	var styles = _v2.c;
	return A2(
		$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			$rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2($elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 0:
			var styleBlock = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 1:
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 2:
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 3:
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				$elm$core$List$map,
				A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 4:
			var str = snippetDeclaration.a;
			var properties = snippetDeclaration.b;
			return _List_fromArray(
				[
					A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
				]);
		case 5:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 6:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 7:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_v0) {
	var charset = _v0.b6;
	var imports = _v0.co;
	var namespaces = _v0.cz;
	var snippets = _v0.cU;
	var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {b6: charset, di: declarations, co: imports, cz: namespaces};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp = function (sheet) {
	return $rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		$rtfeldman$elm_css$Css$Structure$compactStylesheet(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (styles) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp, styles));
};
var $rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {b6: $elm$core$Maybe$Nothing, co: _List_Nil, cz: _List_Nil, cU: snippets};
};
var $rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 4, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode = $rtfeldman$elm_css$VirtualDom$Styled$Unstyled;
var $rtfeldman$elm_css$Css$Global$global = function (snippets) {
	return $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode(
		A3(
			$elm$virtual_dom$VirtualDom$node,
			'style',
			_List_Nil,
			$elm$core$List$singleton(
				$elm$virtual_dom$VirtualDom$text(
					$rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
						$elm$core$List$singleton(
							$rtfeldman$elm_css$Css$Preprocess$stylesheet(snippets)))))));
};
var $rtfeldman$elm_css$Css$Global$h1 = $rtfeldman$elm_css$Css$Global$typeSelector('h1');
var $rtfeldman$elm_css$Css$Global$h2 = $rtfeldman$elm_css$Css$Global$typeSelector('h2');
var $rtfeldman$elm_css$Css$Global$h3 = $rtfeldman$elm_css$Css$Global$typeSelector('h3');
var $rtfeldman$elm_css$Css$Global$h4 = $rtfeldman$elm_css$Css$Global$typeSelector('h4');
var $rtfeldman$elm_css$Css$Global$h5 = $rtfeldman$elm_css$Css$Global$typeSelector('h5');
var $rtfeldman$elm_css$Css$Global$h6 = $rtfeldman$elm_css$Css$Global$typeSelector('h6');
var $rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2($elm$core$String$startsWith, '#', str) ? str : A2($elm$core$String$cons, '#', str);
};
var $rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		aX: 1,
		aZ: 0,
		ca: 0,
		a$: 0,
		a4: 0,
		bT: $rtfeldman$elm_css$Css$withPrecedingHash(str)
	};
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$core$String$toLower = _String_toLower;
var $rtfeldman$elm_css$Css$validHex = F5(
	function (str, _v0, _v1, _v2, _v3) {
		var r1 = _v0.a;
		var r2 = _v0.b;
		var g1 = _v1.a;
		var g2 = _v1.b;
		var b1 = _v2.a;
		var b2 = _v2.b;
		var a1 = _v3.a;
		var a2 = _v3.b;
		var toResult = A2(
			$elm$core$Basics$composeR,
			$elm$core$String$fromList,
			A2($elm$core$Basics$composeR, $elm$core$String$toLower, $rtfeldman$elm_hex$Hex$fromString));
		var results = _Utils_Tuple2(
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[r1, r2])),
				toResult(
					_List_fromArray(
						[g1, g2]))),
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[b1, b2])),
				toResult(
					_List_fromArray(
						[a1, a2]))));
		if ((((!results.a.a.$) && (!results.a.b.$)) && (!results.b.a.$)) && (!results.b.b.$)) {
			var _v5 = results.a;
			var red = _v5.a.a;
			var green = _v5.b.a;
			var _v6 = results.b;
			var blue = _v6.a.a;
			var alpha = _v6.b.a;
			return {
				aX: alpha / 255,
				aZ: blue,
				ca: 0,
				a$: green,
				a4: red,
				bT: $rtfeldman$elm_css$Css$withPrecedingHash(str)
			};
		} else {
			return $rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var $rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2($elm$core$String$startsWith, '#', str) ? A2($elm$core$String$dropLeft, 1, str) : str;
	var _v0 = $elm$core$String$toList(withoutHash);
	_v0$4:
	while (true) {
		if ((_v0.b && _v0.b.b) && _v0.b.b.b) {
			if (!_v0.b.b.b.b) {
				var r = _v0.a;
				var _v1 = _v0.b;
				var g = _v1.a;
				var _v2 = _v1.b;
				var b = _v2.a;
				return A5(
					$rtfeldman$elm_css$Css$validHex,
					str,
					_Utils_Tuple2(r, r),
					_Utils_Tuple2(g, g),
					_Utils_Tuple2(b, b),
					_Utils_Tuple2('f', 'f'));
			} else {
				if (!_v0.b.b.b.b.b) {
					var r = _v0.a;
					var _v3 = _v0.b;
					var g = _v3.a;
					var _v4 = _v3.b;
					var b = _v4.a;
					var _v5 = _v4.b;
					var a = _v5.a;
					return A5(
						$rtfeldman$elm_css$Css$validHex,
						str,
						_Utils_Tuple2(r, r),
						_Utils_Tuple2(g, g),
						_Utils_Tuple2(b, b),
						_Utils_Tuple2(a, a));
				} else {
					if (_v0.b.b.b.b.b.b) {
						if (!_v0.b.b.b.b.b.b.b) {
							var r1 = _v0.a;
							var _v6 = _v0.b;
							var r2 = _v6.a;
							var _v7 = _v6.b;
							var g1 = _v7.a;
							var _v8 = _v7.b;
							var g2 = _v8.a;
							var _v9 = _v8.b;
							var b1 = _v9.a;
							var _v10 = _v9.b;
							var b2 = _v10.a;
							return A5(
								$rtfeldman$elm_css$Css$validHex,
								str,
								_Utils_Tuple2(r1, r2),
								_Utils_Tuple2(g1, g2),
								_Utils_Tuple2(b1, b2),
								_Utils_Tuple2('f', 'f'));
						} else {
							if (_v0.b.b.b.b.b.b.b.b && (!_v0.b.b.b.b.b.b.b.b.b)) {
								var r1 = _v0.a;
								var _v11 = _v0.b;
								var r2 = _v11.a;
								var _v12 = _v11.b;
								var g1 = _v12.a;
								var _v13 = _v12.b;
								var g2 = _v13.a;
								var _v14 = _v13.b;
								var b1 = _v14.a;
								var _v15 = _v14.b;
								var b2 = _v15.a;
								var _v16 = _v15.b;
								var a1 = _v16.a;
								var _v17 = _v16.b;
								var a2 = _v17.a;
								return A5(
									$rtfeldman$elm_css$Css$validHex,
									str,
									_Utils_Tuple2(r1, r2),
									_Utils_Tuple2(g1, g2),
									_Utils_Tuple2(b1, b2),
									_Utils_Tuple2(a1, a2));
							} else {
								break _v0$4;
							}
						}
					} else {
						break _v0$4;
					}
				}
			}
		} else {
			break _v0$4;
		}
	}
	return $rtfeldman$elm_css$Css$erroneousHex(str);
};
var $elm$core$String$endsWith = _String_endsWith;
var $rtfeldman$elm_css$Css$makeImportant = function (str) {
	return A2(
		$elm$core$String$endsWith,
		' !important',
		$elm$core$String$toLower(str)) ? str : (str + ' !important');
};
var $rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 6, a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Preprocess$mapAllLastProperty = F2(
	function (update, styles) {
		if (!styles.b) {
			return styles;
		} else {
			if (!styles.b.b) {
				var only = styles.a;
				return _List_fromArray(
					[
						A2($rtfeldman$elm_css$Css$Preprocess$mapLastProperty, update, only)
					]);
			} else {
				var first = styles.a;
				var rest = styles.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Preprocess$mapAllLastProperty, update, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$mapLastProperty = F2(
	function (update, style) {
		switch (style.$) {
			case 0:
				var property = style.a;
				return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(
					update(property));
			case 1:
				var selector = style.a;
				var styles = style.b;
				return A2(
					$rtfeldman$elm_css$Css$Preprocess$ExtendSelector,
					selector,
					A2($rtfeldman$elm_css$Css$Preprocess$mapAllLastProperty, update, styles));
			case 2:
				return style;
			case 3:
				return style;
			case 4:
				return style;
			case 5:
				return style;
			default:
				var otherStyles = style.a;
				return $rtfeldman$elm_css$Css$Preprocess$ApplyStyles(
					A2(
						$rtfeldman$elm_css$Css$Structure$mapLast,
						$rtfeldman$elm_css$Css$Preprocess$mapLastProperty(update),
						otherStyles));
		}
	});
var $rtfeldman$elm_css$Css$important = $rtfeldman$elm_css$Css$Preprocess$mapLastProperty($rtfeldman$elm_css$Css$makeImportant);
var $rtfeldman$elm_css$Css$inlineBlock = {p: 0, bT: 'inline-block'};
var $rtfeldman$elm_css$Css$left = $rtfeldman$elm_css$Css$prop1('left');
var $rtfeldman$elm_css$Css$Global$li = $rtfeldman$elm_css$Css$Global$typeSelector('li');
var $rtfeldman$elm_css$Css$lineHeight = $rtfeldman$elm_css$Css$prop1('line-height');
var $rtfeldman$elm_css$Css$margin = $rtfeldman$elm_css$Css$prop1('margin');
var $rtfeldman$elm_css$Css$margin3 = $rtfeldman$elm_css$Css$prop3('margin');
var $rtfeldman$elm_css$Css$marginBottom = $rtfeldman$elm_css$Css$prop1('margin-bottom');
var $rtfeldman$elm_css$Css$marginRight = $rtfeldman$elm_css$Css$prop1('margin-right');
var $rtfeldman$elm_css$Css$marginTop = $rtfeldman$elm_css$Css$prop1('margin-top');
var $rtfeldman$elm_css$Css$maxWidth = $rtfeldman$elm_css$Css$prop1('max-width');
var $rtfeldman$elm_css$Css$Media$feature = F2(
	function (key, _v0) {
		var value = _v0.bT;
		return {
			cg: key,
			bT: $elm$core$Maybe$Just(value)
		};
	});
var $rtfeldman$elm_css$Css$Media$minWidth = function (value) {
	return A2($rtfeldman$elm_css$Css$Media$feature, 'min-width', value);
};
var $rtfeldman$elm_css$Css$monospace = {ap: 0, bT: 'monospace'};
var $rtfeldman$elm_css$Css$none = {az: 0, b1: 0, D: 0, bc: 0, p: 0, $7: 0, cq: 0, bE: 0, aK: 0, ar: 0, T: 0, d: 0, c: 0, bG: 0, bk: 0, dF: 0, Q: 0, bp: 0, dM: 0, aQ: 0, ax: 0, J: 0, j: 0, dU: 0, bT: 'none'};
var $rtfeldman$elm_css$Css$Structure$OnlyQuery = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Media$only = $rtfeldman$elm_css$Css$Structure$OnlyQuery;
var $rtfeldman$elm_css$Css$overflowX = $rtfeldman$elm_css$Css$prop1('overflow-x');
var $rtfeldman$elm_css$Css$Global$p = $rtfeldman$elm_css$Css$Global$typeSelector('p');
var $rtfeldman$elm_css$Css$padding = $rtfeldman$elm_css$Css$prop1('padding');
var $rtfeldman$elm_css$Css$paddingLeft = $rtfeldman$elm_css$Css$prop1('padding-left');
var $rtfeldman$elm_css$Css$paddingRight = $rtfeldman$elm_css$Css$prop1('padding-right');
var $rtfeldman$elm_css$Css$paddingTop = $rtfeldman$elm_css$Css$prop1('padding-top');
var $rtfeldman$elm_css$Css$PercentageUnits = 0;
var $rtfeldman$elm_css$Css$pct = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '%');
var $rtfeldman$elm_css$Css$Global$pre = $rtfeldman$elm_css$Css$Global$typeSelector('pre');
var $rtfeldman$elm_css$Css$PxUnits = 0;
var $rtfeldman$elm_css$Css$px = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'px');
var $rtfeldman$elm_css$Css$RemUnits = 0;
var $rtfeldman$elm_css$Css$rem = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'rem');
var $rtfeldman$elm_css$Css$right = $rtfeldman$elm_css$Css$prop1('right');
var $rtfeldman$elm_css$Css$sansSerif = {ap: 0, bT: 'sans-serif'};
var $rtfeldman$elm_css$Css$Structure$Screen = 1;
var $rtfeldman$elm_css$Css$Media$screen = 1;
var $rtfeldman$elm_css$Css$scroll = {aY: 0, b1: 0, cq: 0, aM: 0, dN: 0, bT: 'scroll'};
var $rtfeldman$elm_css$Css$Global$small = $rtfeldman$elm_css$Css$Global$typeSelector('small');
var $rtfeldman$elm_css$Css$solid = {D: 0, aw: 0, bT: 'solid'};
var $rtfeldman$elm_css$Css$Global$span = $rtfeldman$elm_css$Css$Global$typeSelector('span');
var $rtfeldman$elm_css$Css$Global$svg = $rtfeldman$elm_css$Css$Global$typeSelector('svg');
var $rtfeldman$elm_css$Css$Internal$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$Internal$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			switch (style.$) {
				case 0:
					var str = style.a;
					var key = A2(
						$elm$core$Maybe$withDefault,
						'',
						$elm$core$List$head(
							A2($elm$core$String$split, ':', str)));
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, key);
				case 1:
					var selector = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-selector'));
				case 2:
					var combinator = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-combinator'));
				case 3:
					var pseudoElement = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-pseudo-element setter'));
				case 4:
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-media-query'));
				case 5:
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-keyframes'));
				default:
					if (!style.a.b) {
						return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-empty-Style'));
					} else {
						if (!style.a.b.b) {
							var _v1 = style.a;
							var only = _v1.a;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = only;
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						} else {
							var _v2 = style.a;
							var first = _v2.a;
							var rest = _v2.b;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = $rtfeldman$elm_css$Css$Preprocess$ApplyStyles(rest);
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var $rtfeldman$elm_css$Css$Internal$IncompatibleUnits = 0;
var $rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty = A3($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '', 0);
var $rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$textDecoration = $rtfeldman$elm_css$Css$prop1('text-decoration');
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_v0, styles) {
		var newStyles = _v0.b;
		var classname = _v0.c;
		return $elm$core$List$isEmpty(newStyles) ? styles : A3($elm$core$Dict$insert, classname, newStyles, styles);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = function (_v0) {
	var val = _v0.a;
	return val;
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_v6, _v7) {
		var key = _v6.a;
		var html = _v6.b;
		var pairs = _v7.a;
		var styles = _v7.b;
		switch (html.$) {
			case 4:
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v9 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v9.a;
				var finalStyles = _v9.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v10 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v10.a;
				var finalStyles = _v10.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v11 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v11.a;
				var finalStyles = _v11.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v12 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v12.a;
				var finalStyles = _v12.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _v0) {
		var nodes = _v0.a;
		var styles = _v0.b;
		switch (html.$) {
			case 4:
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v2 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v2.a;
				var finalStyles = _v2.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v3 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v3.a;
				var finalStyles = _v3.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v4 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v4.a;
				var finalStyles = _v4.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v5 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v5.a;
				var finalStyles = _v5.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			if (!properties.b) {
				return candidate;
			} else {
				var _v1 = properties.a;
				var styles = _v1.b;
				var classname = _v1.c;
				var rest = properties.b;
				if ($elm$core$String$isEmpty(classname)) {
					var $temp$candidate = candidate,
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				} else {
					var $temp$candidate = $elm$core$Maybe$Just(
						_Utils_Tuple2(classname, styles)),
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties = function (properties) {
	var _v0 = A2($rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp, $elm$core$Maybe$Nothing, properties);
	if (_v0.$ === 1) {
		return $elm$core$Dict$empty;
	} else {
		var _v1 = _v0.a;
		var classname = _v1.a;
		var styles = _v1.b;
		return A2($elm$core$Dict$singleton, classname, styles);
	}
};
var $rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair = function (_v0) {
	var classname = _v0.a;
	var styles = _v0.b;
	return A2(
		$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
		styles,
		$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$ClassSelector(classname)
				])));
};
var $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return $rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
		$elm$core$List$singleton(
			$rtfeldman$elm_css$Css$Preprocess$stylesheet(
				A2(
					$elm$core$List$map,
					$rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair,
					$elm$core$Dict$toList(dict)))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = function (styles) {
	return A3(
		$elm$virtual_dom$VirtualDom$node,
		'style',
		_List_Nil,
		$elm$core$List$singleton(
			$elm$virtual_dom$VirtualDom$text(
				$rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _v1 = pairs.a;
				var str = _v1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _v1 = pairs.a;
				var firstKey = _v1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2($rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var styleNodeKey = A2($rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(allStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			$elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F4(
	function (ns, elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A4(
			$elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F4(
	function (ns, elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 4:
			var plainNode = vdom.a;
			return plainNode;
		case 0:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyle, elemType, properties, children);
		case 1:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, ns, elemType, properties, children);
		case 2:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, ns, elemType, properties, children);
	}
};
var $rtfeldman$elm_css$Html$Styled$toUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var $rtfeldman$elm_css$Css$Global$ul = $rtfeldman$elm_css$Css$Global$typeSelector('ul');
var $rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$VwUnits = 0;
var $rtfeldman$elm_css$Css$vw = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'vw');
var $rtfeldman$elm_css$Css$Preprocess$WithMedia = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Media$withMedia = $rtfeldman$elm_css$Css$Preprocess$WithMedia;
var $author$project$Styles$styles = function () {
	var wideScreen = $rtfeldman$elm_css$Css$Media$withMedia(
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Css$Media$only,
				$rtfeldman$elm_css$Css$Media$screen,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Css$Media$minWidth(
						$rtfeldman$elm_css$Css$px(600))
					]))
			]));
	var codeStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$fontFamilies(
			_List_fromArray(
				[
					'Inconsolata',
					function ($) {
					return $.bT;
				}($rtfeldman$elm_css$Css$monospace)
				]))
		]);
	return $rtfeldman$elm_css$Html$Styled$toUnstyled(
		$rtfeldman$elm_css$Css$Global$global(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Global$body(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$padding(
							$rtfeldman$elm_css$Css$px(0)),
							$rtfeldman$elm_css$Css$margin(
							$rtfeldman$elm_css$Css$px(0)),
							$rtfeldman$elm_css$Css$backgroundColor(
							$rtfeldman$elm_css$Css$hex('ffffff')),
							$rtfeldman$elm_css$Css$color(
							$rtfeldman$elm_css$Css$hex('363636')),
							$rtfeldman$elm_css$Css$fontFamilies(
							_List_fromArray(
								[
									'Open Sans',
									'Arial',
									function ($) {
									return $.bT;
								}($rtfeldman$elm_css$Css$sansSerif)
								])),
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$px(18)),
							$rtfeldman$elm_css$Css$lineHeight(
							$rtfeldman$elm_css$Css$em(1.4))
						])),
					$rtfeldman$elm_css$Css$Global$a(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$color(
							$rtfeldman$elm_css$Css$hex('348aa7')),
							$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
						])),
					$rtfeldman$elm_css$Css$Global$code(codeStyle),
					$rtfeldman$elm_css$Css$Global$pre(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$Global$descendants(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$Global$code(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$important(
											$rtfeldman$elm_css$Css$overflowX($rtfeldman$elm_css$Css$scroll))
										]))
								]))
						])),
					A2(
					$rtfeldman$elm_css$Css$Global$each,
					_List_fromArray(
						[$rtfeldman$elm_css$Css$Global$h1, $rtfeldman$elm_css$Css$Global$h2, $rtfeldman$elm_css$Css$Global$h3, $rtfeldman$elm_css$Css$Global$h4, $rtfeldman$elm_css$Css$Global$h5, $rtfeldman$elm_css$Css$Global$h6]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontFamilies(
							_List_fromArray(
								[
									'Proza Libre',
									'Helvetica',
									function ($) {
									return $.bT;
								}($rtfeldman$elm_css$Css$sansSerif)
								])),
							$rtfeldman$elm_css$Css$lineHeight(
							$rtfeldman$elm_css$Css$em(1.1))
						])),
					$rtfeldman$elm_css$Css$Global$h1(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$em(2.66667)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$rem(2.0202))
						])),
					$rtfeldman$elm_css$Css$Global$h2(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$em(2.0)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$rem(1.61616))
						])),
					$rtfeldman$elm_css$Css$Global$h3(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$em(1.33333)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$rem(1.21212))
						])),
					$rtfeldman$elm_css$Css$Global$h4(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$em(1.2)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$rem(0.80808))
						])),
					A2(
					$rtfeldman$elm_css$Css$Global$each,
					_List_fromArray(
						[$rtfeldman$elm_css$Css$Global$h5, $rtfeldman$elm_css$Css$Global$h6]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$em(1.0)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$rem(0.60606))
						])),
					$rtfeldman$elm_css$Css$Global$p(
					_List_fromArray(
						[
							A3(
							$rtfeldman$elm_css$Css$margin3,
							$rtfeldman$elm_css$Css$auto,
							$rtfeldman$elm_css$Css$auto,
							$rtfeldman$elm_css$Css$rem(1.5))
						])),
					$rtfeldman$elm_css$Css$Global$small(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$pct(65))
						])),
					A2(
					$rtfeldman$elm_css$Css$Global$class,
					'header-logo',
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$paddingTop(
							$rtfeldman$elm_css$Css$px(6)),
							$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
							$rtfeldman$elm_css$Css$backgroundColor(
							$rtfeldman$elm_css$Css$hex('f2fae8')),
							wideScreen(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$left),
									A3(
									$rtfeldman$elm_css$Css$borderBottom3,
									$rtfeldman$elm_css$Css$px(2),
									$rtfeldman$elm_css$Css$solid,
									$rtfeldman$elm_css$Css$hex('3c8765'))
								]))
						])),
					A2(
					$rtfeldman$elm_css$Css$Global$class,
					'navigation',
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
							A3(
							$rtfeldman$elm_css$Css$borderBottom3,
							$rtfeldman$elm_css$Css$px(2),
							$rtfeldman$elm_css$Css$solid,
							$rtfeldman$elm_css$Css$hex('3c8765')),
							$rtfeldman$elm_css$Css$backgroundColor(
							$rtfeldman$elm_css$Css$hex('f2fae8')),
							$rtfeldman$elm_css$Css$padding(
							$rtfeldman$elm_css$Css$px(10)),
							$rtfeldman$elm_css$Css$marginTop(
							$rtfeldman$elm_css$Css$px(-20)),
							$rtfeldman$elm_css$Css$Global$descendants(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$Global$ul(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$margin(
											$rtfeldman$elm_css$Css$px(0)),
											$rtfeldman$elm_css$Css$padding(
											$rtfeldman$elm_css$Css$px(0)),
											wideScreen(
											_List_fromArray(
												[
													$rtfeldman$elm_css$Css$lineHeight(
													$rtfeldman$elm_css$Css$px(100))
												]))
										])),
									$rtfeldman$elm_css$Css$Global$li(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$display($rtfeldman$elm_css$Css$inlineBlock),
											$rtfeldman$elm_css$Css$marginRight(
											$rtfeldman$elm_css$Css$px(20))
										]))
								])),
							wideScreen(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$marginTop(
									$rtfeldman$elm_css$Css$px(0)),
									$rtfeldman$elm_css$Css$padding(
									$rtfeldman$elm_css$Css$px(0)),
									$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$right)
								]))
						])),
					A2(
					$rtfeldman$elm_css$Css$Global$class,
					'content',
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$maxWidth(
							$rtfeldman$elm_css$Css$vw(100))
						])),
					A2(
					$rtfeldman$elm_css$Css$Global$class,
					'footer',
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
							A3(
							$rtfeldman$elm_css$Css$borderTop3,
							$rtfeldman$elm_css$Css$px(2),
							$rtfeldman$elm_css$Css$solid,
							$rtfeldman$elm_css$Css$hex('2f4858')),
							$rtfeldman$elm_css$Css$backgroundColor(
							$rtfeldman$elm_css$Css$hex('348aa7')),
							$rtfeldman$elm_css$Css$color(
							$rtfeldman$elm_css$Css$hex('ffffff')),
							$rtfeldman$elm_css$Css$Global$descendants(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$Global$a(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$color(
											$rtfeldman$elm_css$Css$hex('ffffff')),
											$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
										])),
									$rtfeldman$elm_css$Css$Global$svg(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$paddingRight(
											$rtfeldman$elm_css$Css$px(5)),
											$rtfeldman$elm_css$Css$verticalAlign($rtfeldman$elm_css$Css$baseline)
										]))
								])),
							wideScreen(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$lineHeight(
									$rtfeldman$elm_css$Css$px(80)),
									$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$right),
									$rtfeldman$elm_css$Css$Global$descendants(
									_List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Css$Global$class,
											'link',
											_List_fromArray(
												[
													$rtfeldman$elm_css$Css$display($rtfeldman$elm_css$Css$inlineBlock),
													$rtfeldman$elm_css$Css$marginRight(
													$rtfeldman$elm_css$Css$px(20))
												]))
										]))
								]))
						])),
					A2(
					$rtfeldman$elm_css$Css$Global$class,
					'post-metadata',
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$marginTop(
							$rtfeldman$elm_css$Css$em(-0.5)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$em(2.0)),
							$rtfeldman$elm_css$Css$Global$descendants(
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$Global$each,
									_List_fromArray(
										[$rtfeldman$elm_css$Css$Global$a, $rtfeldman$elm_css$Css$Global$span]),
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$display($rtfeldman$elm_css$Css$inlineBlock),
											$rtfeldman$elm_css$Css$marginRight(
											$rtfeldman$elm_css$Css$px(5))
										])),
									$rtfeldman$elm_css$Css$Global$a(
									_List_fromArray(
										[
											A3(
											$rtfeldman$elm_css$Css$border3,
											$rtfeldman$elm_css$Css$px(1),
											$rtfeldman$elm_css$Css$solid,
											$rtfeldman$elm_css$Css$hex('e0e0e0')),
											$rtfeldman$elm_css$Css$borderRadius(
											$rtfeldman$elm_css$Css$px(3)),
											$rtfeldman$elm_css$Css$backgroundColor(
											$rtfeldman$elm_css$Css$hex('f2fae8')),
											$rtfeldman$elm_css$Css$paddingLeft(
											$rtfeldman$elm_css$Css$px(5)),
											$rtfeldman$elm_css$Css$paddingRight(
											$rtfeldman$elm_css$Css$px(5))
										]))
								]))
						]))
				])));
}();
var $author$project$Page$layout = F2(
	function (title, contentItems) {
		if (!contentItems.$) {
			var contentHtml = contentItems.a;
			return $elm$core$Result$Ok(
				_Utils_ap(
					$author$project$Page$header,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('sidebar')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('sidebar2')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('content')
								]),
							_Utils_ap(
								_List_fromArray(
									[
										A2(
										$elm$html$Html$h1,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(title)
											]))
									]),
								contentHtml)),
							$author$project$Page$footer,
							$author$project$Elmstatic$stylesheet('/styles.css'),
							$author$project$Styles$styles
						])));
		} else {
			var error = contentItems.a;
			return $elm$core$Result$Err(error);
		}
	});
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Post$tagsToHtml = function (tags) {
	var tagLink = function (tag) {
		return '/tags/' + $elm$core$String$toLower(tag);
	};
	var linkify = function (tag) {
		return A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href(
					tagLink(tag))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(tag)
				]));
	};
	return A2($elm$core$List$map, linkify, tags);
};
var $author$project$Post$metadataHtml = function (post) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('post-metadata')
			]),
		_Utils_ap(
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(post.dg)
						])),
					A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('•')
						]))
				]),
			$author$project$Post$tagsToHtml(post.dR)));
};
var $elm$core$List$sortBy = _List_sortBy;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Posts$main = function () {
	var sortPosts = function (posts) {
		return $elm$core$List$reverse(
			A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.dg;
				},
				posts));
	};
	var postItem = function (post) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('/' + post.dx)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(post.aT)
								]))
						])),
					$author$project$Post$metadataHtml(post)
				]));
	};
	var postListContent = function (posts) {
		return $elm$core$List$isEmpty(posts) ? _List_fromArray(
			[
				$elm$html$Html$text('No posts yet!')
			]) : A2($elm$core$List$map, postItem, posts);
	};
	return A2(
		$author$project$Elmstatic$layout,
		$author$project$Elmstatic$decodePostList,
		function (content) {
			return A2(
				$author$project$Page$layout,
				content.aT,
				$elm$core$Result$Ok(
					postListContent(
						sortPosts(content.dG))));
		});
}();
var $author$project$Tag$main = $author$project$Posts$main;
var $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Outcome$Success = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$DocumentMismatch = {$: 0};
var $mdgriffith$elm_markup$Mark$Internal$Error$Global = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Format$text = function (str) {
	return {b2: false, ca: $elm$core$Maybe$Nothing, dS: str, c1: false};
};
var $mdgriffith$elm_markup$Mark$Internal$Format$yellow = function (txt) {
	return _Utils_update(
		txt,
		{
			ca: $elm$core$Maybe$Just('yellow')
		});
};
var $mdgriffith$elm_markup$Mark$Internal$Error$documentMismatch = $mdgriffith$elm_markup$Mark$Internal$Error$Global(
	{
		ae: _List_fromArray(
			[
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Your '),
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('document')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text(' and your '),
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Parsed')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text(' structure don\'t match for some reason.\n\n'),
				$mdgriffith$elm_markup$Mark$Internal$Format$text('This usually occurs because you\'ve stored the '),
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Parsed')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text(' data somewhere and then made a breaking change to your document.')
			]),
		cG: $mdgriffith$elm_markup$Mark$Internal$Error$DocumentMismatch,
		aT: 'DOCUMENT MISMATCH'
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$errorsToList = function (_v0) {
	var fst = _v0.a;
	var remain = _v0.b;
	return A2($elm$core$List$cons, fst, remain);
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$Rendered = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$addIndent = F2(
	function (x, str) {
		return _Utils_ap(
			A2($elm$core$String$repeat, x, ' '),
			str);
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$CompilerError = {$: 1};
var $mdgriffith$elm_markup$Mark$Internal$Error$compilerError = $mdgriffith$elm_markup$Mark$Internal$Error$Global(
	{
		ae: _List_fromArray(
			[
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Oh boy, this looks like a  '),
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('compiler error')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text('\n\n'),
				$mdgriffith$elm_markup$Mark$Internal$Format$text('If you have time, could you file an '),
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('issue')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text(' on the elm-markup respository(https://github.com/mdgriffith/elm-markup) describing how you got here?')
			]),
		cG: $mdgriffith$elm_markup$Mark$Internal$Error$CompilerError,
		aT: 'COMPILER ERROR'
	});
var $mdgriffith$elm_markup$Mark$Internal$Format$red = function (txt) {
	return _Utils_update(
		txt,
		{
			ca: $elm$core$Maybe$Just('red')
		});
};
var $mdgriffith$elm_markup$Mark$Internal$Error$highlightLine = function (_v0) {
	var index = _v0.a;
	var line = _v0.b;
	return _List_fromArray(
		[
			$mdgriffith$elm_markup$Mark$Internal$Format$text(
			$elm$core$String$fromInt(index)),
			$mdgriffith$elm_markup$Mark$Internal$Format$red(
			$mdgriffith$elm_markup$Mark$Internal$Format$text('>')),
			$mdgriffith$elm_markup$Mark$Internal$Format$text(line + '\n')
		]);
};
var $elm$core$String$lines = _String_lines;
var $mdgriffith$elm_markup$Mark$Internal$Error$highlight = F2(
	function (range, source) {
		if (_Utils_eq(range.bO.a2, range.cd.a2)) {
			var lineStart = range.bO.b - (range.bO.bw - 1);
			var line = A2(
				$elm$core$Maybe$withDefault,
				'',
				$elm$core$List$head(
					$elm$core$String$lines(
						A3($elm$core$String$slice, lineStart, range.cd.b + 20, source))));
			var lineNumber = _Utils_ap(
				$elm$core$String$fromInt(range.bO.a2),
				A2($elm$core$String$startsWith, '|', line) ? '' : '|');
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text(lineNumber + (line + '\n')),
					$mdgriffith$elm_markup$Mark$Internal$Format$red(
					$mdgriffith$elm_markup$Mark$Internal$Format$text(
						A2(
							$elm$core$String$repeat,
							(range.bO.bw - 1) + $elm$core$String$length(lineNumber),
							' ') + (A2($elm$core$String$repeat, range.cd.bw - range.bO.bw, '^') + '\n')))
				]);
		} else {
			var snippet = A3($elm$core$String$slice, range.bO.b, range.cd.b, source);
			var indented = A3($elm$core$String$slice, (range.bO.b + 1) - range.bO.bw, range.bO.b, source);
			var lines = A2(
				$elm$core$List$indexedMap,
				F2(
					function (i, str) {
						return _Utils_Tuple2((i + range.bO.a2) - 1, str);
					}),
				$elm$core$String$lines(
					_Utils_ap(indented, snippet)));
			return A2($elm$core$List$concatMap, $mdgriffith$elm_markup$Mark$Internal$Error$highlightLine, lines);
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Format$underline = function (txt) {
	return _Utils_update(
		txt,
		{c1: true});
};
var $mdgriffith$elm_markup$Mark$Internal$Error$hint = function (str) {
	return _List_fromArray(
		[
			$mdgriffith$elm_markup$Mark$Internal$Format$underline(
			$mdgriffith$elm_markup$Mark$Internal$Format$text('Hint')),
			$mdgriffith$elm_markup$Mark$Internal$Format$text(': ' + str)
		]);
};
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$DocumentDoesntAllow = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$EditingError = function (a) {
	return {$: 16, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$indent = $mdgriffith$elm_markup$Mark$Internal$Format$text(
	A2($elm$core$String$repeat, 4, ' '));
var $mdgriffith$elm_markup$Mark$Internal$Error$documentDoesntAllow = F2(
	function (_new, expectations) {
		return $mdgriffith$elm_markup$Mark$Internal$Error$Global(
			{
				ae: _Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_markup$Mark$Internal$Format$text('You tried to insert a\n\n'),
							$mdgriffith$elm_markup$Mark$Internal$Error$indent,
							$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
							$mdgriffith$elm_markup$Mark$Internal$Format$text(_new)),
							$mdgriffith$elm_markup$Mark$Internal$Format$text('\n\n'),
							$mdgriffith$elm_markup$Mark$Internal$Format$text('but the block at the provided '),
							$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
							$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.Id')),
							$mdgriffith$elm_markup$Mark$Internal$Format$text(' is expecting\n\n')
						]),
					A2(
						$elm$core$List$concatMap,
						function (exp) {
							return _List_fromArray(
								[
									$mdgriffith$elm_markup$Mark$Internal$Error$indent,
									$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
									$mdgriffith$elm_markup$Mark$Internal$Format$text(exp)),
									$mdgriffith$elm_markup$Mark$Internal$Format$text('\n')
								]);
						},
						expectations)),
				cG: $mdgriffith$elm_markup$Mark$Internal$Error$EditingError(
					A2($mdgriffith$elm_markup$Mark$Internal$Error$DocumentDoesntAllow, _new, expectations)),
				aT: 'DOCUMENT DOESN\'T ALLOW'
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$IdNotFound = {$: 0};
var $mdgriffith$elm_markup$Mark$Internal$Error$idNotFound = $mdgriffith$elm_markup$Mark$Internal$Error$Global(
	{
		ae: _List_fromArray(
			[
				$mdgriffith$elm_markup$Mark$Internal$Format$text('The '),
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.Id')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text(' that you provided doesn\'t match any blocks in the document.')
			]),
		cG: $mdgriffith$elm_markup$Mark$Internal$Error$EditingError($mdgriffith$elm_markup$Mark$Internal$Error$IdNotFound),
		aT: 'ID NOT FOUND'
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$InvalidInsert = {$: 2};
var $mdgriffith$elm_markup$Mark$Internal$Error$invalidDelete = $mdgriffith$elm_markup$Mark$Internal$Error$Global(
	{
		ae: _List_fromArray(
			[
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.deleteAt')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text(' is only valid for elements within a '),
				$mdgriffith$elm_markup$Mark$Internal$Error$indent,
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.manyOf'))
			]),
		cG: $mdgriffith$elm_markup$Mark$Internal$Error$EditingError($mdgriffith$elm_markup$Mark$Internal$Error$InvalidInsert),
		aT: 'INVALID DELETE'
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$invalidInsert = $mdgriffith$elm_markup$Mark$Internal$Error$Global(
	{
		ae: _List_fromArray(
			[
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.insertAt')),
				$mdgriffith$elm_markup$Mark$Internal$Format$text(' is only valid for elements within a '),
				$mdgriffith$elm_markup$Mark$Internal$Error$indent,
				$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
				$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.manyOf'))
			]),
		cG: $mdgriffith$elm_markup$Mark$Internal$Error$EditingError($mdgriffith$elm_markup$Mark$Internal$Error$InvalidInsert),
		aT: 'INVALID INSERT'
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$InvalidTextEdit = {$: 1};
var $mdgriffith$elm_markup$Mark$Internal$Error$invalidTextEdit = $mdgriffith$elm_markup$Mark$Internal$Error$Global(
	{
		ae: _Utils_ap(
			_List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Text edits such as\n\n'),
					$mdgriffith$elm_markup$Mark$Internal$Error$indent,
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.insertText\n')),
					$mdgriffith$elm_markup$Mark$Internal$Error$indent,
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.deleteText\n')),
					$mdgriffith$elm_markup$Mark$Internal$Error$indent,
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.restyle\n')),
					$mdgriffith$elm_markup$Mark$Internal$Error$indent,
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.addStyles\n')),
					$mdgriffith$elm_markup$Mark$Internal$Error$indent,
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.Edit.removeStyles\n\n')),
					$mdgriffith$elm_markup$Mark$Internal$Format$text('only work on '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.text')),
					$mdgriffith$elm_markup$Mark$Internal$Format$text(' or '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Mark.textWith')),
					$mdgriffith$elm_markup$Mark$Internal$Format$text(' blocks.\n\n')
				]),
			$mdgriffith$elm_markup$Mark$Internal$Error$hint('If you\'re trying to update a simple Mark.string, you probably want to use `Mark.Edit.replace` instead.')),
		cG: $mdgriffith$elm_markup$Mark$Internal$Error$EditingError($mdgriffith$elm_markup$Mark$Internal$Error$InvalidTextEdit),
		aT: 'INVALID TEXT EDIT'
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$renderEditError = function (editErr) {
	switch (editErr.$) {
		case 0:
			return $mdgriffith$elm_markup$Mark$Internal$Error$idNotFound;
		case 1:
			return $mdgriffith$elm_markup$Mark$Internal$Error$invalidTextEdit;
		case 2:
			return $mdgriffith$elm_markup$Mark$Internal$Error$invalidInsert;
		case 3:
			return $mdgriffith$elm_markup$Mark$Internal$Error$invalidDelete;
		default:
			var _new = editErr.a;
			var exp = editErr.b;
			return A2($mdgriffith$elm_markup$Mark$Internal$Error$documentDoesntAllow, _new, exp);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Error$ParsingIssue = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$renderParsingProblem = function (prob) {
	switch (prob.$) {
		case 0:
			var i = prob.a;
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text(
					'I was expecting an indent of ' + ($elm$core$String$fromInt(i) + ' spaces'))
				]);
		case 1:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('InlineStart')
				]);
		case 2:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting the end of an inline: '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('}'))
				]);
		case 3:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting the start of a block: '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('|>'))
				]);
		case 4:
			var str = prob.a;
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting \"' + (str + '\"'))
				]);
		case 5:
			var name = prob.a;
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting a block named '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text(name))
				]);
		case 6:
			var name = prob.a;
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting an inline named '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text(name))
				]);
		case 7:
			var name = prob.a;
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting a field named '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text(name))
				]);
		case 8:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expectng a backslash')
				]);
		case 9:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting an escaped character')
				]);
		case 10:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting a newline')
				]);
		case 11:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting a space')
				]);
		case 12:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting the end of a document.')
				]);
		case 13:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting an '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Int'))
				]);
		case 14:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I was expecting a '),
					$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
					$mdgriffith$elm_markup$Mark$Internal$Format$text('Float'))
				]);
		default:
			return _List_fromArray(
				[
					$mdgriffith$elm_markup$Mark$Internal$Format$text('I ran into an invalid number.')
				]);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Error$renderParserIssue = function (deadends) {
	return A2(
		$elm$core$List$concatMap,
		function (dead) {
			return _Utils_ap(
				$mdgriffith$elm_markup$Mark$Internal$Error$renderParsingProblem(dead.cG),
				_List_fromArray(
					[
						$mdgriffith$elm_markup$Mark$Internal$Format$text('\n')
					]));
		},
		deadends);
};
var $mdgriffith$elm_markup$Mark$Internal$Error$renderParsingErrors = F2(
	function (source, issues) {
		return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
			{
				ae: $elm$core$List$concat(
					_List_fromArray(
						[
							_List_fromArray(
							[
								$mdgriffith$elm_markup$Mark$Internal$Format$text('\n')
							]),
							$mdgriffith$elm_markup$Mark$Internal$Error$renderParserIssue(issues)
						])),
				cG: $mdgriffith$elm_markup$Mark$Internal$Error$ParsingIssue(issues),
				bo: function () {
					if (!issues.b) {
						return {
							cd: {bw: 0, a2: 0, b: 0},
							bO: {bw: 0, a2: 0, b: 0}
						};
					} else {
						var first = issues.a;
						return {
							cd: {bw: first.b9, a2: first.cP, b: 0},
							bO: {bw: first.b9, a2: first.cP, b: 0}
						};
					}
				}(),
				aT: 'PARSING ISSUE'
			});
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$similarity = F2(
	function (source, target) {
		var lenSimilarity = 0 - A2(
			$elm$core$Basics$min,
			2,
			$elm$core$Basics$abs(
				$elm$core$String$length(source) - $elm$core$String$length(target)));
		var addCompared = F2(
			function (_v0, total) {
				var x = _v0.a;
				var y = _v0.b;
				return _Utils_eq(x, y) ? (total + 1) : total;
			});
		return lenSimilarity + A3(
			$elm$core$List$foldl,
			addCompared,
			0,
			A3(
				$elm$core$List$map2,
				$elm$core$Tuple$pair,
				$elm$core$String$toList(source),
				$elm$core$String$toList(target)));
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$styleChars = function (styles) {
	var strike = styles.cW;
	var italic = styles.ct;
	var isBold = styles.b2;
	var _v0 = _Utils_Tuple3(italic, isBold, strike);
	if (_v0.a) {
		if (_v0.b) {
			if (!_v0.c) {
				return '/ and *';
			} else {
				return '/, *, and ~';
			}
		} else {
			if (_v0.c) {
				return '/ and ~';
			} else {
				return '/';
			}
		}
	} else {
		if (_v0.b) {
			if (_v0.c) {
				return '* and ~';
			} else {
				return '*';
			}
		} else {
			if (!_v0.c) {
				return 'Some formatting is';
			} else {
				return '~';
			}
		}
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Error$styleNames = function (styles) {
	var strike = styles.cW;
	var italic = styles.ct;
	var isBold = styles.b2;
	var _v0 = _Utils_Tuple3(italic, isBold, strike);
	if (_v0.a) {
		if (_v0.b) {
			if (!_v0.c) {
				return 'Italic and bold formatting are';
			} else {
				return 'Italic, strike, and bold formatting are';
			}
		} else {
			if (_v0.c) {
				return 'Italic and strike formatting are';
			} else {
				return 'Italic formatting is';
			}
		}
	} else {
		if (_v0.b) {
			if (_v0.c) {
				return 'Strike, and bold formatting are';
			} else {
				return 'Bold formatting is';
			}
		} else {
			if (!_v0.c) {
				return 'Some formatting is';
			} else {
				return 'Strike formatting is';
			}
		}
	}
};
var $elm$core$String$toUpper = _String_toUpper;
var $mdgriffith$elm_markup$Mark$Internal$Error$render = F2(
	function (source, current) {
		var _v0 = current.cG;
		switch (_v0.$) {
			case 1:
				return $mdgriffith$elm_markup$Mark$Internal$Error$compilerError;
			case 0:
				return $mdgriffith$elm_markup$Mark$Internal$Error$documentMismatch;
			case 16:
				var editErr = _v0.a;
				return $mdgriffith$elm_markup$Mark$Internal$Error$renderEditError(editErr);
			case 2:
				var issues = _v0.a;
				return A2($mdgriffith$elm_markup$Mark$Internal$Error$renderParsingErrors, source, issues);
			case 3:
				var expecting = _v0.a;
				var target = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('I don\'t recognize this block name.\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source),
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('Do you mean one of these instead?\n\n'),
										$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
										$mdgriffith$elm_markup$Mark$Internal$Format$text(
											A2(
												$elm$core$String$join,
												'\n',
												A2(
													$elm$core$List$map,
													$mdgriffith$elm_markup$Mark$Internal$Error$addIndent(4),
													A2(
														$elm$core$List$sortBy,
														function (exp) {
															return 0 - A2($mdgriffith$elm_markup$Mark$Internal$Error$similarity, target, exp);
														},
														expecting)))))
									])
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'UNKNOWN BLOCK'
					});
			case 4:
				var expecting = _v0.a;
				var target = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('I ran into an unexpected inline name.\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source),
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('But I was expecting one of these instead:\n\n'),
										$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
										$mdgriffith$elm_markup$Mark$Internal$Format$text(
											A2(
												$elm$core$String$join,
												'\n',
												A2(
													$elm$core$List$map,
													$mdgriffith$elm_markup$Mark$Internal$Error$addIndent(4),
													A2(
														$elm$core$List$sortBy,
														function (exp) {
															return 0 - A2($mdgriffith$elm_markup$Mark$Internal$Error$similarity, target, exp);
														},
														expecting)))))
									])
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'UNKNOWN INLINE'
					});
			case 5:
				var expecting = _v0.a;
				var target = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('I wasn\'t able to match this.\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source),
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('to one of the following:\n\n'),
										$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
										$mdgriffith$elm_markup$Mark$Internal$Format$text(
											A2(
												$elm$core$String$join,
												'\n',
												A2(
													$elm$core$List$map,
													$mdgriffith$elm_markup$Mark$Internal$Error$addIndent(4),
													expecting))))
									])
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'NO MATCH'
					});
			case 9:
				var indentation = _v0.a;
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: _Utils_ap(
							_List_fromArray(
								[
									$mdgriffith$elm_markup$Mark$Internal$Format$text(
									'I was expecting ' + ($elm$core$String$fromInt(indentation) + ' spaces of indentation.\n\n'))
								]),
							_Utils_ap(
								A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source),
								$mdgriffith$elm_markup$Mark$Internal$Error$hint('All indentation in `elm-markup` is a multiple of 4.'))),
						cG: current.cG,
						bo: current.n,
						aT: 'MISMATCHED INDENTATION'
					});
			case 10:
				var line = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('This line of text starts with extra space.\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source),
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('Beyond the required indentation, text should start with non-whitespace characters.')
									])
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'TOO MUCH SPACE'
					});
			case 11:
				var styles = _v0.a;
				var line = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: _Utils_ap(
							$elm$core$List$concat(
								_List_fromArray(
									[
										_List_fromArray(
										[
											$mdgriffith$elm_markup$Mark$Internal$Format$text(
											$mdgriffith$elm_markup$Mark$Internal$Error$styleNames(styles) + (' still open.  Add ' + ($mdgriffith$elm_markup$Mark$Internal$Error$styleChars(styles) + ' to close it.\n\n')))
										])
									])),
							_Utils_ap(
								A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source),
								$mdgriffith$elm_markup$Mark$Internal$Error$hint('`*` is used for bold and `/` is used for italic.'))),
						cG: current.cG,
						bo: current.n,
						aT: 'UNCLOSED STYLE'
					});
			case 8:
				var msgUnexpectedField = _v0.a;
				var target = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('I ran into an unexpected field name for a '),
										$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
										$mdgriffith$elm_markup$Mark$Internal$Format$text(msgUnexpectedField.dI)),
										$mdgriffith$elm_markup$Mark$Internal$Format$text(' record\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source),
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('\nDo you mean one of these instead?\n\n'),
										$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
										$mdgriffith$elm_markup$Mark$Internal$Format$text(
											A2(
												$elm$core$String$join,
												'\n',
												A2(
													$elm$core$List$map,
													$mdgriffith$elm_markup$Mark$Internal$Error$addIndent(4),
													A2(
														$elm$core$List$sortBy,
														function (exp) {
															return 0 - A2($mdgriffith$elm_markup$Mark$Internal$Error$similarity, target, exp);
														},
														msgUnexpectedField.dE)))))
									])
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'UNKNOWN FIELD'
					});
			case 12:
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('I was trying to parse a float, but this format looks off.\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source)
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'BAD FLOAT'
					});
			case 13:
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('I was trying to parse an integer, but this format looks off.\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source)
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'BAD INT'
					});
			case 14:
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: $elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('I was trying to parse a boolean, but this format looks off.\n\n')
									]),
									A2($mdgriffith$elm_markup$Mark$Internal$Error$highlight, current.n, source)
								])),
						cG: current.cG,
						bo: current.n,
						aT: 'BAD INT'
					});
			case 7:
				var fields = _v0.a;
				var remaining = A2(
					$elm$core$List$filter,
					function (f) {
						return !A2($elm$core$List$member, f, fields.f);
					},
					fields.cf);
				var line = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: function () {
							if (!remaining.b) {
								return _List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('It looks like a field is missing.')
									]);
							} else {
								if (!remaining.b.b) {
									var single = remaining.a;
									return _List_fromArray(
										[
											$mdgriffith$elm_markup$Mark$Internal$Format$text('It looks like a field is missing.\n\n'),
											$mdgriffith$elm_markup$Mark$Internal$Format$text('You need to add the '),
											$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
											$mdgriffith$elm_markup$Mark$Internal$Format$text(single)),
											$mdgriffith$elm_markup$Mark$Internal$Format$text(' field.')
										]);
								} else {
									var multiple = remaining;
									return _List_fromArray(
										[
											$mdgriffith$elm_markup$Mark$Internal$Format$text('It looks like a field is missing.\n\n'),
											$mdgriffith$elm_markup$Mark$Internal$Format$text('You still need to add:\n'),
											$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
											$mdgriffith$elm_markup$Mark$Internal$Format$text(
												A2(
													$elm$core$String$join,
													'\n',
													A2(
														$elm$core$List$map,
														$mdgriffith$elm_markup$Mark$Internal$Error$addIndent(4),
														A2(
															$elm$core$List$sortBy,
															function (exp) {
																return 0 - A2($mdgriffith$elm_markup$Mark$Internal$Error$similarity, line, exp);
															},
															remaining)))))
										]);
								}
							}
						}(),
						cG: current.cG,
						bo: current.n,
						aT: 'MISSING FIELD'
					});
			case 6:
				var remaining = _v0.a;
				var line = A3($elm$core$String$slice, current.n.bO.b, current.n.cd.b, source);
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: function () {
							if (!remaining.b) {
								return _List_fromArray(
									[
										$mdgriffith$elm_markup$Mark$Internal$Format$text('It looks like a field is missing.')
									]);
							} else {
								if (!remaining.b.b) {
									var single = remaining.a;
									return _List_fromArray(
										[
											$mdgriffith$elm_markup$Mark$Internal$Format$text('It looks like a field is missing.\n\n'),
											$mdgriffith$elm_markup$Mark$Internal$Format$text('You need to add the '),
											$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
											$mdgriffith$elm_markup$Mark$Internal$Format$text(single)),
											$mdgriffith$elm_markup$Mark$Internal$Format$text(' field.')
										]);
								} else {
									var multiple = remaining;
									return _List_fromArray(
										[
											$mdgriffith$elm_markup$Mark$Internal$Format$text('It looks like a field is missing.\n\n'),
											$mdgriffith$elm_markup$Mark$Internal$Format$text('You still need to add:\n'),
											$mdgriffith$elm_markup$Mark$Internal$Format$yellow(
											$mdgriffith$elm_markup$Mark$Internal$Format$text(
												A2(
													$elm$core$String$join,
													'\n',
													A2(
														$elm$core$List$map,
														$mdgriffith$elm_markup$Mark$Internal$Error$addIndent(4),
														A2(
															$elm$core$List$sortBy,
															function (exp) {
																return 0 - A2($mdgriffith$elm_markup$Mark$Internal$Error$similarity, line, exp);
															},
															remaining)))))
										]);
								}
							}
						}(),
						cG: current.cG,
						bo: current.n,
						aT: 'MISSING FIELD'
					});
			default:
				var custom = _v0.a;
				return $mdgriffith$elm_markup$Mark$Internal$Error$Rendered(
					{
						ae: A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$Internal$Format$text, custom.ae),
						cG: current.cG,
						bo: current.n,
						aT: $elm$core$String$toUpper(custom.aT)
					});
		}
	});
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{b9: 1, e: _List_Nil, g: 1, b: 0, cP: 1, a: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$compile = F2(
	function (_v0, source) {
		var blocks = _v0;
		var _v1 = A2($elm$parser$Parser$Advanced$run, blocks.m, source);
		if (!_v1.$) {
			var parsed = _v1.a;
			var parsedDetails = parsed;
			return A3(
				$elm$core$Basics$composeL,
				$elm$core$Result$Ok,
				$elm$core$Tuple$pair(parsed),
				function () {
					var _v2 = parsedDetails.dl;
					if (!_v2.b) {
						var _v3 = blocks.k(parsed);
						switch (_v3.$) {
							case 0:
								var rendered = _v3.a;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(rendered);
							case 1:
								if (_v3.a.$ === 1) {
									var _v4 = _v3.a;
									var errors = _v4.a;
									var rendered = _v4.b;
									return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
										{
											dl: A2(
												$elm$core$List$map,
												$mdgriffith$elm_markup$Mark$Internal$Error$render(source),
												$mdgriffith$elm_markup$Mark$Internal$Description$errorsToList(errors)),
											dK: rendered
										});
								} else {
									var errors = _v3.a.a;
									return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(
										A2(
											$elm$core$List$map,
											$mdgriffith$elm_markup$Mark$Internal$Error$render(source),
											$mdgriffith$elm_markup$Mark$Internal$Description$errorsToList(errors)));
								}
							default:
								var _v5 = _v3.a;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(
									_List_fromArray(
										[$mdgriffith$elm_markup$Mark$Internal$Error$documentMismatch]));
						}
					} else {
						var _v6 = blocks.k(parsed);
						switch (_v6.$) {
							case 0:
								var rendered = _v6.a;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
									{dl: parsedDetails.dl, dK: rendered});
							case 1:
								if (!_v6.a.$) {
									var _v7 = _v6.a.a;
									var err = _v7.a;
									var remainError = _v7.b;
									return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(
										A2(
											$elm$core$List$map,
											$mdgriffith$elm_markup$Mark$Internal$Error$render(source),
											A2($elm$core$List$cons, err, remainError)));
								} else {
									var _v8 = _v6.a;
									var _v9 = _v8.a;
									var err = _v9.a;
									var remainError = _v9.b;
									var result = _v8.b;
									return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
										{
											dl: A2(
												$elm$core$List$map,
												$mdgriffith$elm_markup$Mark$Internal$Error$render(source),
												A2($elm$core$List$cons, err, remainError)),
											dK: result
										});
								}
							default:
								var noMatch = _v6.a;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(
									A2($elm$core$List$cons, $mdgriffith$elm_markup$Mark$Internal$Error$documentMismatch, parsedDetails.dl));
						}
					}
				}());
		} else {
			var deadEnds = _v1.a;
			return $elm$core$Result$Err(
				$mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(
					_List_fromArray(
						[
							A2($mdgriffith$elm_markup$Mark$Internal$Error$renderParsingErrors, source, deadEnds)
						])));
		}
	});
var $mdgriffith$elm_markup$Mark$flattenErrors = function (result) {
	if (!result.$) {
		var _v1 = result.a;
		var parsed = _v1.a;
		var outcome = _v1.b;
		return outcome;
	} else {
		var outcome = result.a;
		return outcome;
	}
};
var $mdgriffith$elm_markup$Mark$Almost = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Failure = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_markup$Mark$Success = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$rewrapOutcome = function (outcome) {
	switch (outcome.$) {
		case 0:
			var s = outcome.a;
			return $mdgriffith$elm_markup$Mark$Success(s);
		case 1:
			var x = outcome.a;
			return $mdgriffith$elm_markup$Mark$Almost(x);
		default:
			var f = outcome.a;
			return $mdgriffith$elm_markup$Mark$Failure(f);
	}
};
var $mdgriffith$elm_markup$Mark$compile = F2(
	function (doc, source) {
		return $mdgriffith$elm_markup$Mark$rewrapOutcome(
			$mdgriffith$elm_markup$Mark$flattenErrors(
				A2($mdgriffith$elm_markup$Mark$Internal$Description$compile, doc, source)));
	});
var $elm$html$Html$article = _VirtualDom_node('article');
var $elm$html$Html$code = _VirtualDom_node('code');
var $mdgriffith$elm_markup$Mark$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$MissingFields = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$ProtoRecord = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Description$Uncertain = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation = function (fromBlock) {
	var expect = fromBlock.l;
	return expect;
};
var $mdgriffith$elm_markup$Mark$fieldExpectation = function (_v0) {
	var name = _v0.a;
	var fieldBlock = _v0.b;
	return _Utils_Tuple2(
		name,
		$mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(fieldBlock));
};
var $mdgriffith$elm_markup$Mark$fieldName = function (_v0) {
	var name = _v0.a;
	return name;
};
var $mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Found = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$InRecordField = function (a) {
	return {$: 3, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{b9: col, e: s0.e, g: s0.g, b: offset, cP: row, a: s0.a});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.cP, s.b9, s);
	};
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {b9: col, e: context, cP: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {b9: s.b9, e: newContext, g: s.g, b: s.b, cP: s.cP, a: s.a};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(
				A2(
					$elm$parser$Parser$Advanced$changeContext,
					A2(
						$elm$core$List$cons,
						A3($elm$parser$Parser$Advanced$Located, s0.cP, s0.b9, context),
						s0.e),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.e, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {b9: col, df: contextStack, cG: problem, cP: row};
	});
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.cP, s.b9, x, s.e));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.b, s.cP, s.b9, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{b9: newCol, e: s.e, g: s.g, b: newOffset, cP: newRow, a: s.a});
	};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$getIndent = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.g, s);
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$withIndent = function (fn) {
	return A2($elm$parser$Parser$Advanced$andThen, fn, $elm$parser$Parser$Advanced$getIndent);
};
var $elm$parser$Parser$Advanced$changeIndent = F2(
	function (newIndent, s) {
		return {b9: s.b9, e: s.e, g: newIndent, b: s.b, cP: s.cP, a: s.a};
	});
var $elm$parser$Parser$Advanced$withIndent = F2(
	function (newIndent, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(
				A2($elm$parser$Parser$Advanced$changeIndent, newIndent, s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeIndent, s0.g, s1));
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.b, s);
};
var $elm$parser$Parser$Advanced$getPosition = function (s) {
	return A3(
		$elm$parser$Parser$Advanced$Good,
		false,
		_Utils_Tuple2(s.cP, s.b9),
		s);
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$getPosition = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		$elm$parser$Parser$Advanced$succeed(
			F2(
				function (offset, _v0) {
					var row = _v0.a;
					var col = _v0.b;
					return {bw: col, a2: row, b: offset};
				})),
		$elm$parser$Parser$Advanced$getOffset),
	$elm$parser$Parser$Advanced$getPosition);
var $mdgriffith$elm_markup$Mark$Internal$Parser$withRange = function (parser) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					F3(
						function (start, val, end) {
							return _Utils_Tuple2(
								{cd: end, bO: start},
								val);
						})),
				$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition),
			parser),
		$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition);
};
var $mdgriffith$elm_markup$Mark$fieldContentParser = F2(
	function (name, parser) {
		return $mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
			function (indentation) {
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						var pos = _v0.a;
						var description = _v0.b;
						return _Utils_Tuple2(
							name,
							A2($mdgriffith$elm_markup$Mark$Internal$Description$Found, pos, description));
					},
					$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$Advanced$withIndent,
										indentation + 4,
										A2(
											$elm$parser$Parser$Advanced$inContext,
											$mdgriffith$elm_markup$Mark$Internal$Error$InRecordField(name),
											parser)),
										A2(
										$elm$parser$Parser$Advanced$keeper,
										A2(
											$elm$parser$Parser$Advanced$ignorer,
											A2(
												$elm$parser$Parser$Advanced$ignorer,
												$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
												$elm$parser$Parser$Advanced$chompWhile(
													function (c) {
														return c === '\n';
													})),
											$elm$parser$Parser$Advanced$token(
												A2(
													$elm$parser$Parser$Advanced$Token,
													A2($elm$core$String$repeat, indentation + 4, ' '),
													$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(indentation)))),
										A2(
											$elm$parser$Parser$Advanced$withIndent,
											indentation + 4,
											A2(
												$elm$parser$Parser$Advanced$inContext,
												$mdgriffith$elm_markup$Mark$Internal$Error$InRecordField(name),
												parser)))
									])))));
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$ExpectingBlockName = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$getParser = F3(
	function (context, seed, _v0) {
		var details = _v0;
		var _v1 = details.h;
		switch (_v1.$) {
			case 1:
				var name = _v1.a;
				var _v2 = A2(details.m, context, seed);
				var newSeed = _v2.a;
				var blockParser = _v2.b;
				return _Utils_Tuple2(
					newSeed,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'|>',
										$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingBlockName(name)))),
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return c === ' ';
								})),
						blockParser));
			case 0:
				return A2(details.m, context, seed);
			case 2:
				var name = _v1.a;
				var _v3 = A2(details.m, context, seed);
				var newSeed = _v3.a;
				var blockParser = _v3.b;
				return _Utils_Tuple2(newSeed, blockParser);
			default:
				var name = _v1.a;
				var _v4 = A2(details.m, context, seed);
				var newSeed = _v4.a;
				var blockParser = _v4.b;
				return _Utils_Tuple2(newSeed, blockParser);
		}
	});
var $mdgriffith$elm_markup$Mark$fieldParser = F3(
	function (_v0, context, seed) {
		var name = _v0.a;
		var myBlock = _v0.b;
		var _v1 = A3($mdgriffith$elm_markup$Mark$Internal$Description$getParser, context, seed, myBlock);
		var newSeed = _v1.a;
		var blockParser = _v1.b;
		return _Utils_Tuple2(
			newSeed,
			_Utils_Tuple2(
				name,
				A2($mdgriffith$elm_markup$Mark$fieldContentParser, name, blockParser)));
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$renderBlock = function (fromBlock) {
	var converter = fromBlock.k;
	return converter;
};
var $mdgriffith$elm_markup$Mark$Internal$Description$uncertain = function (err) {
	return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
		$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(
			_Utils_Tuple2(err, _List_Nil)));
};
var $mdgriffith$elm_markup$Mark$matchField = F4(
	function (targetName, targetBlock, _v0, existing) {
		var name = _v0.a;
		var foundDescription = _v0.b;
		if (!existing.$) {
			return existing;
		} else {
			if (_Utils_eq(name, targetName)) {
				if (!foundDescription.$) {
					var rng = foundDescription.a;
					var description = foundDescription.b;
					return $elm$core$Maybe$Just(
						A2($mdgriffith$elm_markup$Mark$Internal$Description$renderBlock, targetBlock, description));
				} else {
					var unexpected = foundDescription.a;
					return $elm$core$Maybe$Just(
						$mdgriffith$elm_markup$Mark$Internal$Description$uncertain(unexpected));
				}
			} else {
				return existing;
			}
		}
	});
var $mdgriffith$elm_markup$Mark$getField = F2(
	function (_v0, fields) {
		var name = _v0.a;
		var fieldBlock = _v0.b;
		return A3(
			$elm$core$List$foldl,
			A2($mdgriffith$elm_markup$Mark$matchField, name, fieldBlock),
			$elm$core$Maybe$Nothing,
			fields);
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$Recovered = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered = F2(
	function (fn, outcome) {
		switch (outcome.$) {
			case 0:
				var s = outcome.a;
				return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
					fn(s));
			case 1:
				if (!outcome.a.$) {
					var u = outcome.a.a;
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
						$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(u));
				} else {
					var _v1 = outcome.a;
					var e = _v1.a;
					var a = _v1.b;
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
						A2(
							$mdgriffith$elm_markup$Mark$Internal$Description$Recovered,
							e,
							fn(a)));
				}
			default:
				var f = outcome.a;
				return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(f);
		}
	});
var $mdgriffith$elm_markup$Mark$field = F3(
	function (name, value, _v0) {
		var details = _v0;
		var newField = A2($mdgriffith$elm_markup$Mark$Field, name, value);
		return {
			X: details.X,
			Y: A2(
				$elm$core$List$cons,
				$mdgriffith$elm_markup$Mark$fieldExpectation(newField),
				details.Y),
			ao: F2(
				function (desc, ann) {
					var _v1 = A2(details.ao, desc, ann);
					switch (_v1.$) {
						case 0:
							var _v2 = _v1.a;
							var pos = _v2.a;
							var fieldDescriptions = _v2.b;
							var rendered = _v2.c;
							var _v3 = A2($mdgriffith$elm_markup$Mark$getField, newField, fieldDescriptions);
							if (!_v3.$) {
								var outcome = _v3.a;
								return A2(
									$mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered,
									function (myField) {
										return _Utils_Tuple3(
											pos,
											fieldDescriptions,
											rendered(myField));
									},
									outcome);
							} else {
								return $mdgriffith$elm_markup$Mark$Internal$Description$uncertain(
									{
										cG: $mdgriffith$elm_markup$Mark$Internal$Error$MissingFields(
											_List_fromArray(
												[
													$mdgriffith$elm_markup$Mark$fieldName(newField)
												])),
										n: pos
									});
							}
						case 2:
							var fail = _v1.a;
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(fail);
						default:
							if (_v1.a.$ === 1) {
								var _v4 = _v1.a;
								var e = _v4.a;
								var _v5 = _v4.b;
								var pos = _v5.a;
								var fieldDescriptions = _v5.b;
								var rendered = _v5.c;
								var _v6 = A2($mdgriffith$elm_markup$Mark$getField, newField, fieldDescriptions);
								if (!_v6.$) {
									var outcome = _v6.a;
									return A2(
										$mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered,
										function (myField) {
											return _Utils_Tuple3(
												pos,
												fieldDescriptions,
												rendered(myField));
										},
										outcome);
								} else {
									return $mdgriffith$elm_markup$Mark$Internal$Description$uncertain(
										{
											cG: $mdgriffith$elm_markup$Mark$Internal$Error$MissingFields(
												_List_fromArray(
													[
														$mdgriffith$elm_markup$Mark$fieldName(newField)
													])),
											n: pos
										});
								}
							} else {
								var e = _v1.a.a;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
									$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(e));
							}
					}
				}),
			Z: A2(
				$elm$core$List$cons,
				$mdgriffith$elm_markup$Mark$fieldParser(newField),
				details.Z),
			dA: details.dA
		};
	});
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $mdgriffith$elm_markup$Mark$Internal$Description$EmptyAnnotation = {$: 0};
var $mdgriffith$elm_markup$Mark$Internal$Description$Named = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$NoMatch = 0;
var $mdgriffith$elm_markup$Mark$record = F2(
	function (name, view) {
		return {
			X: $mdgriffith$elm_markup$Mark$Internal$Description$Named(name),
			Y: _List_Nil,
			ao: F2(
				function (desc, ann) {
					if (desc.$ === 1) {
						var details = desc.a;
						if (_Utils_eq(details.dA, name) && _Utils_eq(ann, $mdgriffith$elm_markup$Mark$Internal$Description$EmptyAnnotation)) {
							var _v1 = details.f;
							if (!_v1.$) {
								var pos = _v1.a;
								var fieldDescriptions = _v1.b;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
									_Utils_Tuple3(pos, fieldDescriptions, view));
							} else {
								var unexpected = _v1.a;
								return $mdgriffith$elm_markup$Mark$Internal$Description$uncertain(unexpected);
							}
						} else {
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
						}
					} else {
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
					}
				}),
			Z: _List_Nil,
			dA: name
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$Block = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Description$DescribeString = F3(
	function (a, b, c) {
		return {$: 10, a: a, b: b, c: c};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectString = function (a) {
	return {$: 9, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Value = {$: 0};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.b, s1.b, s0.a),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$End = {$: 12};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$Newline = {$: 10};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.a),
			s.b) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$newline = $elm$parser$Parser$Advanced$token(
	A2($elm$parser$Parser$Advanced$Token, '\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline));
var $mdgriffith$elm_markup$Mark$Internal$Parser$indentedString = F2(
	function (indentation, found) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Done(found)),
					$elm$parser$Parser$Advanced$end($mdgriffith$elm_markup$Mark$Internal$Error$End)),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (extra) {
								return $elm$parser$Parser$Advanced$Loop(
									extra ? (found + '\n\n') : (found + '\n'));
							}),
						$mdgriffith$elm_markup$Mark$Internal$Parser$newline),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(true),
									$elm$parser$Parser$Advanced$backtrackable(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c === ' ';
											}))),
								$elm$parser$Parser$Advanced$backtrackable(
									$elm$parser$Parser$Advanced$token(
										A2($elm$parser$Parser$Advanced$Token, '\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline)))),
								$elm$parser$Parser$Advanced$succeed(false)
							]))),
					(found === '') ? A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (str) {
							return $elm$parser$Parser$Advanced$Loop(
								_Utils_ap(found, str));
						}),
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return c !== '\n';
							}))) : A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (str) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_ap(found, str));
							}),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								A2($elm$core$String$repeat, indentation, ' '),
								$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(indentation)))),
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return c !== '\n';
							}))),
					$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(found))
				]));
	});
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Id$Id = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Id$Seed = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Id$step = function (_v0) {
	var seed = _v0;
	if (!seed.b) {
		return _Utils_Tuple2(
			_List_fromArray(
				[0]),
			_List_fromArray(
				[0]));
	} else {
		var current = seed.a;
		var remain = seed.b;
		return _Utils_Tuple2(
			seed,
			A2($elm$core$List$cons, current + 1, remain));
	}
};
var $elm$core$String$trim = _String_trim;
var $mdgriffith$elm_markup$Mark$string = {
	k: function (desc) {
		if (desc.$ === 10) {
			var id = desc.a;
			var range = desc.b;
			var str = desc.c;
			return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
				$elm$core$String$trim(str));
		} else {
			return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
		}
	},
	l: $mdgriffith$elm_markup$Mark$Internal$Description$ExpectString('REPLACE'),
	h: $mdgriffith$elm_markup$Mark$Internal$Description$Value,
	m: F2(
		function (context, seed) {
			var _v1 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
			var id = _v1.a;
			var newSeed = _v1.b;
			return _Utils_Tuple2(
				newSeed,
				function () {
					switch (context) {
						case 1:
							return A2(
								$elm$parser$Parser$Advanced$keeper,
								A2(
									$elm$parser$Parser$Advanced$keeper,
									A2(
										$elm$parser$Parser$Advanced$keeper,
										$elm$parser$Parser$Advanced$succeed(
											F3(
												function (start, str, end) {
													return A3(
														$mdgriffith$elm_markup$Mark$Internal$Description$DescribeString,
														id,
														{cd: end, bO: start},
														$elm$core$String$trim(str));
												})),
										$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition),
									$elm$parser$Parser$Advanced$getChompedString(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return (c !== '\n') && ((c !== ',') && (c !== '}'));
											}))),
								$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition);
						case 0:
							return A2(
								$elm$parser$Parser$Advanced$map,
								function (_v3) {
									var pos = _v3.a;
									var str = _v3.b;
									return A3($mdgriffith$elm_markup$Mark$Internal$Description$DescribeString, id, pos, str);
								},
								$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
									$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
										function (indentation) {
											return A2(
												$elm$parser$Parser$Advanced$loop,
												'',
												$mdgriffith$elm_markup$Mark$Internal$Parser$indentedString(indentation));
										})));
						default:
							return A2(
								$elm$parser$Parser$Advanced$map,
								function (_v4) {
									var pos = _v4.a;
									var str = _v4.b;
									return A3($mdgriffith$elm_markup$Mark$Internal$Description$DescribeString, id, pos, str);
								},
								$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
									$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
										function (indentation) {
											return A2(
												$elm$parser$Parser$Advanced$loop,
												'',
												$mdgriffith$elm_markup$Mark$Internal$Parser$indentedString(indentation));
										})));
					}
				}());
		})
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$BlockRecord = 1;
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectRecord = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$ParseBlock = 0;
var $mdgriffith$elm_markup$Mark$Internal$Error$Expecting = function (a) {
	return {$: 4, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Record = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Unexpected = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$backtrackCharacters = F2(
	function (chars, range) {
		return {
			cd: range.cd,
			bO: {bw: range.bO.bw - chars, a2: range.bO.a2, b: range.bO.b - chars}
		};
	});
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{b9: 1, e: s.e, g: s.g, b: s.b + 1, cP: s.cP + 1, a: s.a}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{b9: s.b9 + 1, e: s.e, g: s.g, b: newOffset, cP: s.cP, a: s.a}));
		};
	});
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.b, s.cP, s.b9, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return (_Utils_eq(newOffset, -1) || (0 <= A3(
			$elm$parser$Parser$Advanced$isSubChar,
			function (c) {
				return $elm$core$Char$isAlphaNum(c) || (c === '_');
			},
			newOffset,
			s.a))) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{b9: newCol, e: s.e, g: s.g, b: newOffset, cP: newRow, a: s.a});
	};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndent = function (a) {
	return {$: 9, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$UnexpectedField = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$ExpectingFieldName = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$parseField = function (_v0) {
	var name = _v0.a;
	var contentParser = _v0.b;
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$Advanced$keyword(
							A2(
								$elm$parser$Parser$Advanced$Token,
								name,
								$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingFieldName(name)))),
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return c === ' ';
						})),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					function (c) {
						return c === '=';
					},
					$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('='))),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return c === ' ';
				})),
		contentParser);
};
var $elm$parser$Parser$Advanced$getSource = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.a, s);
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$sliceRange = F2(
	function (range, source) {
		if (_Utils_eq(range.bO.a2, range.cd.a2)) {
			var lineStart = range.bO.b - (range.bO.bw - 1);
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$elm$core$List$head(
					$elm$core$String$lines(
						A3($elm$core$String$slice, lineStart, range.cd.b + 20, source))));
		} else {
			var snippet = A3($elm$core$String$slice, range.bO.b, range.cd.b, source);
			var indented = A3($elm$core$String$slice, (range.bO.b + 1) - range.bO.bw, range.bO.b, source);
			return _Utils_ap(indented, snippet);
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$getRangeAndSource = function (parser) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F4(
							function (src, start, result, end) {
								var range = {cd: end, bO: start};
								return {
									n: range,
									dP: A2($mdgriffith$elm_markup$Mark$Internal$Parser$sliceRange, range, src),
									bT: result
								};
							})),
					$elm$parser$Parser$Advanced$getSource),
				$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition),
			parser),
		$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition);
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$unexpectedField = F2(
	function (recordName, options) {
		return $mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
			function (indentation) {
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						var range = _v0.n;
						var value = _v0.bT;
						return _Utils_Tuple2(
							value,
							$mdgriffith$elm_markup$Mark$Internal$Description$Unexpected(
								{
									cG: $mdgriffith$elm_markup$Mark$Internal$Error$UnexpectedField(
										{f: value, dE: options, dI: recordName}),
									n: range
								}));
					},
					$mdgriffith$elm_markup$Mark$Internal$Parser$getRangeAndSource(
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										A2(
											$elm$parser$Parser$Advanced$ignorer,
											$elm$parser$Parser$Advanced$getChompedString(
												$elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isAlphaNum)),
											$elm$parser$Parser$Advanced$chompWhile(
												function (c) {
													return c === ' ';
												})),
										A2(
											$elm$parser$Parser$Advanced$chompIf,
											function (c) {
												return c === '=';
											},
											$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('='))),
									$elm$parser$Parser$Advanced$chompWhile(
										function (c) {
											return c === ' ';
										})),
								A2(
									$elm$parser$Parser$Advanced$withIndent,
									indentation + 4,
									$elm$parser$Parser$Advanced$getChompedString(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c !== '\n';
											})))))));
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$captureField = F4(
	function (found, recordName, fields, fieldNames) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (maybeField) {
				if (maybeField.$ === 1) {
					return $elm$parser$Parser$Advanced$Loop(fields);
				} else {
					var _v1 = maybeField.a;
					var foundFieldname = _v1.a;
					var fieldValue = _v1.b;
					if (!fieldValue.$) {
						return $elm$parser$Parser$Advanced$Loop(
							{
								f: $elm$core$Result$Ok(
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(foundFieldname, fieldValue),
										found)),
								y: A2(
									$elm$core$List$filter,
									function (_v3) {
										var fieldParserName = _v3.a;
										return !_Utils_eq(fieldParserName, foundFieldname);
									},
									fields.y)
							});
					} else {
						var unexpected = fieldValue.a;
						return $elm$parser$Parser$Advanced$Loop(
							{
								f: $elm$core$Result$Err(
									_Utils_Tuple2(
										$elm$core$Maybe$Just(unexpected.n),
										unexpected.cG)),
								y: A2(
									$elm$core$List$filter,
									function (_v4) {
										var fieldParserName = _v4.a;
										return !_Utils_eq(fieldParserName, foundFieldname);
									},
									fields.y)
							});
					}
				}
			},
			$elm$parser$Parser$Advanced$oneOf(
				_Utils_ap(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeL,
							$elm$parser$Parser$Advanced$map($elm$core$Maybe$Just),
							$mdgriffith$elm_markup$Mark$Internal$Parser$parseField),
						fields.y),
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$map,
							$elm$core$Maybe$Just,
							A2($mdgriffith$elm_markup$Mark$Internal$Parser$unexpectedField, recordName, fieldNames))
						]))));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$EmptyLine = {$: 2};
var $mdgriffith$elm_markup$Mark$Internal$Parser$Indented = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$Space = {$: 11};
var $mdgriffith$elm_markup$Mark$Internal$Parser$WeirdIndent = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$newlineWith = function (x) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'\n',
			$mdgriffith$elm_markup$Mark$Internal$Error$Expecting(x)));
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$indentOrSkip = F2(
	function (indentation, successParser) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								A2($elm$core$String$repeat, indentation, ' '),
								$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(indentation)))),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always($mdgriffith$elm_markup$Mark$Internal$Parser$EmptyLine),
								$mdgriffith$elm_markup$Mark$Internal$Parser$newline),
								A2(
								$elm$parser$Parser$Advanced$keeper,
								A2(
									$elm$parser$Parser$Advanced$keeper,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed(
											F2(
												function (foundIndent, content) {
													return (content !== '') ? $mdgriffith$elm_markup$Mark$Internal$Parser$WeirdIndent(
														$elm$core$String$length(foundIndent)) : $mdgriffith$elm_markup$Mark$Internal$Parser$EmptyLine;
												})),
										A2(
											$elm$parser$Parser$Advanced$chompIf,
											function (c) {
												return c === ' ';
											},
											$mdgriffith$elm_markup$Mark$Internal$Error$Space)),
									$elm$parser$Parser$Advanced$getChompedString(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c === ' ';
											}))),
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$getChompedString(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c !== '\n';
											})),
									$mdgriffith$elm_markup$Mark$Internal$Parser$newlineWith('indentOrSkip one'))),
								A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed($mdgriffith$elm_markup$Mark$Internal$Parser$Indented),
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									successParser,
									$elm$parser$Parser$Advanced$chompWhile(
										function (c) {
											return c === '\n';
										})))
							]))),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (foundIndent, hasContent) {
									return hasContent ? $mdgriffith$elm_markup$Mark$Internal$Parser$WeirdIndent(
										$elm$core$String$length(foundIndent)) : $mdgriffith$elm_markup$Mark$Internal$Parser$EmptyLine;
								})),
						$elm$parser$Parser$Advanced$getChompedString(
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return c === ' ';
								}))),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(false),
								$mdgriffith$elm_markup$Mark$Internal$Parser$newline),
								A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(true),
									$elm$parser$Parser$Advanced$getChompedString(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c !== '\n';
											}))),
								$mdgriffith$elm_markup$Mark$Internal$Parser$newline)
							])))
				]));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$indentationBetween = F2(
	function (lower, higher) {
		var top = A2($elm$core$Basics$max, lower, higher);
		var bottom = A2($elm$core$Basics$min, lower, higher);
		return $elm$core$List$reverse(
			A2(
				$elm$core$List$map,
				function (numSpaces) {
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(numSpaces),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								A2($elm$core$String$repeat, numSpaces, ' '),
								$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(numSpaces))));
				},
				A2($elm$core$List$range, bottom, top)));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$raggedIndentedStringAbove = F2(
	function (indentation, found) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (extra) {
								return $elm$parser$Parser$Advanced$Loop(
									extra ? (found + '\n\n') : (found + '\n'));
							}),
						$elm$parser$Parser$Advanced$token(
							A2($elm$parser$Parser$Advanced$Token, '\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline))),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(true),
									$elm$parser$Parser$Advanced$backtrackable(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c === ' ';
											}))),
								$elm$parser$Parser$Advanced$backtrackable(
									$elm$parser$Parser$Advanced$token(
										A2($elm$parser$Parser$Advanced$Token, '\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline)))),
								$elm$parser$Parser$Advanced$succeed(false)
							]))),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (indentCount, str) {
									return (indentCount <= 0) ? $elm$parser$Parser$Advanced$Done(found) : $elm$parser$Parser$Advanced$Loop(
										_Utils_ap(
											found,
											_Utils_ap(
												A2($elm$core$String$repeat, indentCount, ' '),
												str)));
								})),
						$elm$parser$Parser$Advanced$oneOf(
							A2($mdgriffith$elm_markup$Mark$Internal$Parser$indentationBetween, indentation + 1, indentation + 4))),
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return c !== '\n';
							}))),
					$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(found))
				]));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$parseFields = F3(
	function (recordName, fieldNames, fields) {
		var _v0 = fields.y;
		if (!_v0.b) {
			return $mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
				function (indentation) {
					return A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							function (remaining) {
								return ($elm$core$String$trim(remaining) === '') ? $elm$parser$Parser$Advanced$Done(fields.f) : $elm$parser$Parser$Advanced$Done(
									$elm$core$Result$Err(
										_Utils_Tuple2(
											$elm$core$Maybe$Nothing,
											$mdgriffith$elm_markup$Mark$Internal$Error$UnexpectedField(
												{
													f: $elm$core$String$trim(remaining),
													dE: fieldNames,
													dI: recordName
												}))));
							}),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$Advanced$keeper,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$Advanced$token(
											A2(
												$elm$parser$Parser$Advanced$Token,
												A2($elm$core$String$repeat, indentation, ' '),
												$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(indentation)))),
									$elm$parser$Parser$Advanced$getChompedString(
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c !== '\n';
											}))),
									$elm$parser$Parser$Advanced$succeed('')
								])));
				});
		} else {
			var _v1 = fields.f;
			if (!_v1.$) {
				var found = _v1.a;
				return $mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
					function (indentation) {
						return $elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$Advanced$map,
									function (indentedField) {
										switch (indentedField.$) {
											case 0:
												var thing = indentedField.a;
												return thing;
											case 2:
												return $elm$parser$Parser$Advanced$Loop(fields);
											default:
												var i = indentedField.a;
												return $elm$parser$Parser$Advanced$Loop(
													{
														f: $elm$core$Result$Err(
															_Utils_Tuple2(
																$elm$core$Maybe$Nothing,
																$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndent(indentation))),
														y: fields.y
													});
										}
									},
									A2(
										$mdgriffith$elm_markup$Mark$Internal$Parser$indentOrSkip,
										indentation,
										A4($mdgriffith$elm_markup$Mark$Internal$Parser$captureField, found, recordName, fields, fieldNames))),
									$elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Done(
										$elm$core$Result$Err(
											_Utils_Tuple2(
												$elm$core$Maybe$Nothing,
												$mdgriffith$elm_markup$Mark$Internal$Error$MissingFields(
													A2($elm$core$List$map, $elm$core$Tuple$first, fields.y))))))
								]));
					});
			} else {
				var unexpected = _v1.a;
				return $mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
					function (indentation) {
						return A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(
								$elm$parser$Parser$Advanced$Done(fields.f)),
							A2(
								$elm$parser$Parser$Advanced$loop,
								'',
								$mdgriffith$elm_markup$Mark$Internal$Parser$raggedIndentedStringAbove(indentation - 4)));
					});
			}
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$parseInlineFields = F3(
	function (recordName, fieldNames, fields) {
		var hasMore = function () {
			var _v2 = fields.y;
			if (!_v2.b) {
				return false;
			} else {
				if (!_v2.b.b) {
					var fst = _v2.a;
					return false;
				} else {
					return true;
				}
			}
		}();
		var _v0 = fields.y;
		if (!_v0.b) {
			return A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (remaining) {
						return ($elm$core$String$trim(remaining) === '') ? $elm$parser$Parser$Advanced$Done(fields.f) : $elm$parser$Parser$Advanced$Done(
							$elm$core$Result$Err(
								_Utils_Tuple2(
									$elm$core$Maybe$Nothing,
									$mdgriffith$elm_markup$Mark$Internal$Error$UnexpectedField(
										{
											f: $elm$core$String$trim(remaining),
											dE: fieldNames,
											dI: recordName
										}))));
					}),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$Advanced$getChompedString(
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return c !== '}';
								})),
							$elm$parser$Parser$Advanced$succeed('')
						])));
		} else {
			var _v1 = fields.f;
			if (!_v1.$) {
				var found = _v1.a;
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
								$elm$parser$Parser$Advanced$chompWhile(
									function (c) {
										return c === ' ';
									})),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									A4($mdgriffith$elm_markup$Mark$Internal$Parser$captureField, found, recordName, fields, fieldNames),
									$elm$parser$Parser$Advanced$chompWhile(
										function (c) {
											return c === ' ';
										})),
								hasMore ? $elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										',',
										$mdgriffith$elm_markup$Mark$Internal$Error$Expecting(','))) : $elm$parser$Parser$Advanced$succeed(0))),
							$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(
								$elm$core$Result$Err(
									_Utils_Tuple2(
										$elm$core$Maybe$Nothing,
										$mdgriffith$elm_markup$Mark$Internal$Error$MissingFields(
											A2($elm$core$List$map, $elm$core$Tuple$first, fields.y))))))
						]));
			} else {
				var unexpected = _v1.a;
				return A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Done(fields.f)),
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return c !== '}';
						}));
			}
		}
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$withRangeResult = function (parser) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					F3(
						function (start, result, end) {
							if (!result.$) {
								var val = result.a;
								return $elm$core$Result$Ok(
									{
										n: {cd: end, bO: start},
										bT: val
									});
							} else {
								var err = result.a;
								var range = {cd: end, bO: start};
								return $elm$core$Result$Err(
									{by: err, n: range});
							}
						})),
				$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition),
			parser),
		$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition);
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$record = F5(
	function (recordType, id, recordName, expectations, fields) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				function (result) {
					if (!result.$) {
						var details = result.a;
						return $mdgriffith$elm_markup$Mark$Internal$Description$Record(
							{
								an: expectations,
								f: A2(
									$mdgriffith$elm_markup$Mark$Internal$Description$Found,
									A2($mdgriffith$elm_markup$Mark$Internal$Parser$backtrackCharacters, 2, details.n),
									details.bT),
								L: id,
								dA: recordName
							});
					} else {
						var err = result.a;
						return $mdgriffith$elm_markup$Mark$Internal$Description$Record(
							{
								an: expectations,
								f: $mdgriffith$elm_markup$Mark$Internal$Description$Unexpected(
									{
										cG: err.by.b,
										n: A2(
											$elm$core$Maybe$withDefault,
											A2($mdgriffith$elm_markup$Mark$Internal$Parser$backtrackCharacters, 2, err.n),
											err.by.a)
									}),
								L: id,
								dA: recordName
							});
					}
				}),
			$mdgriffith$elm_markup$Mark$Internal$Parser$withRangeResult(
				$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
					function (indentation) {
						return A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
									$elm$parser$Parser$Advanced$keyword(
										A2(
											$elm$parser$Parser$Advanced$Token,
											recordName,
											$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingBlockName(recordName)))),
								$elm$parser$Parser$Advanced$chompWhile(
									function (c) {
										return c === ' ';
									})),
							$elm$core$List$isEmpty(fields) ? $elm$parser$Parser$Advanced$succeed(
								$elm$core$Result$Ok(_List_Nil)) : A2(
								$elm$parser$Parser$Advanced$keeper,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
									function () {
										if (!recordType) {
											return A2(
												$elm$parser$Parser$Advanced$chompIf,
												function (c) {
													return c === '|';
												},
												$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('bar'));
										} else {
											return A2(
												$elm$parser$Parser$Advanced$chompIf,
												function (c) {
													return c === '\n';
												},
												$mdgriffith$elm_markup$Mark$Internal$Error$Newline);
										}
									}()),
								function () {
									if (!recordType) {
										return A2(
											$elm$parser$Parser$Advanced$loop,
											{
												f: $elm$core$Result$Ok(_List_Nil),
												y: fields
											},
											A2(
												$mdgriffith$elm_markup$Mark$Internal$Parser$parseInlineFields,
												recordName,
												A2($elm$core$List$map, $elm$core$Tuple$first, fields)));
									} else {
										return A2(
											$elm$parser$Parser$Advanced$withIndent,
											indentation + 4,
											A2(
												$elm$parser$Parser$Advanced$loop,
												{
													f: $elm$core$Result$Ok(_List_Nil),
													y: fields
												},
												A2(
													$mdgriffith$elm_markup$Mark$Internal$Parser$parseFields,
													recordName,
													A2($elm$core$List$map, $elm$core$Tuple$first, fields))));
									}
								}()));
					})));
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_markup$Mark$Internal$Id$threadThrough = F2(
	function (current, _v0) {
		var seed = _v0.a;
		var past = _v0.b;
		var _v1 = current(seed);
		var newSeed = _v1.a;
		var result = _v1.b;
		return _Utils_Tuple2(
			newSeed,
			A2($elm$core$List$cons, result, past));
	});
var $mdgriffith$elm_markup$Mark$Internal$Id$thread = F2(
	function (seed, steps) {
		return A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$List$reverse,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_markup$Mark$Internal$Id$threadThrough,
				_Utils_Tuple2(seed, _List_Nil),
				steps));
	});
var $mdgriffith$elm_markup$Mark$toBlock = function (_v0) {
	var details = _v0;
	var expectations = A2($mdgriffith$elm_markup$Mark$Internal$Description$ExpectRecord, details.dA, details.Y);
	return {
		k: function (desc) {
			var _v1 = A2(details.ao, desc, $mdgriffith$elm_markup$Mark$Internal$Description$EmptyAnnotation);
			switch (_v1.$) {
				case 0:
					var _v2 = _v1.a;
					var pos = _v2.a;
					var fieldDescriptions = _v2.b;
					var rendered = _v2.c;
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(rendered);
				case 2:
					var fail = _v1.a;
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(fail);
				default:
					if (!_v1.a.$) {
						var e = _v1.a.a;
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
							$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(e));
					} else {
						var _v3 = _v1.a;
						var e = _v3.a;
						var _v4 = _v3.b;
						var pos = _v4.a;
						var fieldDescriptions = _v4.b;
						var rendered = _v4.c;
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
							A2($mdgriffith$elm_markup$Mark$Internal$Description$Recovered, e, rendered));
					}
			}
		},
		l: expectations,
		h: details.X,
		m: F2(
			function (context, seed) {
				var _v5 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
				var parentId = _v5.a;
				var parentSeed = _v5.b;
				var _v6 = A2(
					$mdgriffith$elm_markup$Mark$Internal$Id$thread,
					parentSeed,
					A3(
						$elm$core$List$foldl,
						F2(
							function (f, ls) {
								return A2(
									$elm$core$List$cons,
									f(0),
									ls);
							}),
						_List_Nil,
						details.Z));
				var newSeed = _v6.a;
				var fields = _v6.b;
				return _Utils_Tuple2(
					newSeed,
					A5($mdgriffith$elm_markup$Mark$Internal$Parser$record, 1, parentId, details.dA, expectations, fields));
			})
	};
};
var $author$project$ElmMarkup$code = $mdgriffith$elm_markup$Mark$toBlock(
	A3(
		$mdgriffith$elm_markup$Mark$field,
		'code',
		$mdgriffith$elm_markup$Mark$string,
		A3(
			$mdgriffith$elm_markup$Mark$field,
			'lang',
			$mdgriffith$elm_markup$Mark$string,
			A2(
				$mdgriffith$elm_markup$Mark$record,
				'Code',
				F2(
					function (lang, str) {
						return A2(
							$elm$html$Html$pre,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$code,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class(lang)
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(str)
										]))
								]));
					})))));
var $mdgriffith$elm_markup$Mark$Internal$Description$Document = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Description$Parsed = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Description$ParseInline = 1;
var $mdgriffith$elm_markup$Mark$Internal$Error$BlockStart = {$: 3};
var $mdgriffith$elm_markup$Mark$Internal$Error$UnknownBlock = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$word = $elm$parser$Parser$Advanced$getChompedString(
	$elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isAlphaNum));
var $mdgriffith$elm_markup$Mark$Internal$Parser$failableBlocks = function (blocks) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$token(
					A2($elm$parser$Parser$Advanced$Token, '|>', $mdgriffith$elm_markup$Mark$Internal$Error$BlockStart))),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return c === ' ';
				})),
		$elm$parser$Parser$Advanced$oneOf(
			_Utils_ap(
				A2(
					$elm$core$List$map,
					$elm$parser$Parser$Advanced$map($elm$core$Result$Ok),
					blocks.bJ),
				_List_fromArray(
					[
						$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
						function (indentation) {
							return A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										A2(
											$elm$parser$Parser$Advanced$ignorer,
											$elm$parser$Parser$Advanced$succeed(
												$elm$core$Result$Err(
													$mdgriffith$elm_markup$Mark$Internal$Error$UnknownBlock(blocks.bF))),
											$mdgriffith$elm_markup$Mark$Internal$Parser$word),
										$elm$parser$Parser$Advanced$chompWhile(
											function (c) {
												return c === ' ';
											})),
									$mdgriffith$elm_markup$Mark$Internal$Parser$newline),
								A2(
									$elm$parser$Parser$Advanced$loop,
									'',
									$mdgriffith$elm_markup$Mark$Internal$Parser$raggedIndentedStringAbove(indentation)));
						})
					]))));
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$getFailableBlock = F3(
	function (context, seed, _v0) {
		var details = _v0;
		var _v1 = details.h;
		switch (_v1.$) {
			case 1:
				var name = _v1.a;
				var _v2 = A2(details.m, context, seed);
				var newSeed = _v2.a;
				var blockParser = _v2.b;
				return _Utils_Tuple2(
					newSeed,
					$mdgriffith$elm_markup$Mark$Internal$Parser$failableBlocks(
						{
							bF: _List_fromArray(
								[name]),
							bJ: _List_fromArray(
								[blockParser])
						}));
			case 0:
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$parser$Parser$Advanced$map($elm$core$Result$Ok),
					A2(details.m, context, seed));
			case 2:
				var name = _v1.a;
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$parser$Parser$Advanced$map($elm$core$Result$Ok),
					A2(details.m, 1, seed));
			default:
				var name = _v1.a;
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$parser$Parser$Advanced$map($elm$core$Result$Ok),
					A2(details.m, 1, seed));
		}
	});
var $mdgriffith$elm_markup$Mark$unexpectedFromFound = function (found) {
	if (!found.$) {
		return _List_Nil;
	} else {
		var unexpected = found.a;
		return _List_fromArray(
			[unexpected]);
	}
};
var $mdgriffith$elm_markup$Mark$getUnexpecteds = function (description) {
	switch (description.$) {
		case 0:
			var details = description.a;
			return $mdgriffith$elm_markup$Mark$spelunkUnexpectedsFromFound(details.f);
		case 1:
			var details = description.a;
			var _v2 = details.f;
			if (!_v2.$) {
				var fields = _v2.b;
				return A2(
					$elm$core$List$concatMap,
					A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $mdgriffith$elm_markup$Mark$spelunkUnexpectedsFromFound),
					fields);
			} else {
				var unexpected = _v2.a;
				return _List_fromArray(
					[unexpected]);
			}
		case 2:
			var one = description.a;
			return $mdgriffith$elm_markup$Mark$spelunkUnexpectedsFromFound(one.b7);
		case 3:
			var many = description.a;
			return A2($elm$core$List$concatMap, $mdgriffith$elm_markup$Mark$spelunkUnexpectedsFromFound, many.dd);
		case 4:
			var details = description.a;
			return _Utils_ap(
				$mdgriffith$elm_markup$Mark$getUnexpecteds(details.bB.f),
				$mdgriffith$elm_markup$Mark$getUnexpecteds(details.bM.f));
		case 5:
			var details = description.a;
			return _List_Nil;
		case 6:
			var details = description.a;
			return $mdgriffith$elm_markup$Mark$unexpectedFromFound(details.f);
		case 7:
			var details = description.a;
			return $mdgriffith$elm_markup$Mark$unexpectedFromFound(details.f);
		case 8:
			var details = description.a;
			return $mdgriffith$elm_markup$Mark$unexpectedFromFound(details.f);
		case 9:
			var details = description.a;
			return _List_Nil;
		case 10:
			var rng = description.a;
			var str = description.c;
			return _List_Nil;
		default:
			return _List_Nil;
	}
};
var $mdgriffith$elm_markup$Mark$spelunkUnexpectedsFromFound = function (found) {
	if (!found.$) {
		var desc = found.b;
		return $mdgriffith$elm_markup$Mark$getUnexpecteds(desc);
	} else {
		var unexpected = found.a;
		return _List_fromArray(
			[unexpected]);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Id$initialSeed = _List_fromArray(
	[0]);
var $mdgriffith$elm_markup$Mark$document = F2(
	function (view, child) {
		var seed = $mdgriffith$elm_markup$Mark$Internal$Id$initialSeed;
		var expectation = $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(child);
		var _v0 = A3($mdgriffith$elm_markup$Mark$Internal$Parser$getFailableBlock, 0, seed, child);
		var currentSeed = _v0.a;
		var blockParser = _v0.b;
		return {
			k: function (_v1) {
				var parsed = _v1;
				var _v2 = parsed.f;
				if (!_v2.$) {
					var range = _v2.a;
					var childDesc = _v2.b;
					var _v3 = A2($mdgriffith$elm_markup$Mark$Internal$Description$renderBlock, child, childDesc);
					switch (_v3.$) {
						case 0:
							var renderedChild = _v3.a;
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
								view(renderedChild));
						case 2:
							var err = _v3.a;
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(err);
						default:
							if (!_v3.a.$) {
								var unexpected = _v3.a.a;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
									$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(unexpected));
							} else {
								var _v4 = _v3.a;
								var errors = _v4.a;
								var renderedChild = _v4.b;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
									A2(
										$mdgriffith$elm_markup$Mark$Internal$Description$Recovered,
										errors,
										view(renderedChild)));
							}
					}
				} else {
					var unexpected = _v2.a;
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
						$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(
							_Utils_Tuple2(unexpected, _List_Nil)));
				}
			},
			bx: currentSeed,
			l: expectation,
			bD: seed,
			m: A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (source, result) {
									if (!result.$) {
										var details = result.a;
										return {
											bx: currentSeed,
											dl: A2(
												$elm$core$List$map,
												$mdgriffith$elm_markup$Mark$Internal$Error$render(source),
												$mdgriffith$elm_markup$Mark$getUnexpecteds(details.bT)),
											an: $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(child),
											f: A2($mdgriffith$elm_markup$Mark$Internal$Description$Found, details.n, details.bT),
											bD: seed
										};
									} else {
										var details = result.a;
										return {
											bx: currentSeed,
											dl: _List_fromArray(
												[
													A2(
													$mdgriffith$elm_markup$Mark$Internal$Error$render,
													source,
													{cG: details.by, n: details.n})
												]),
											an: $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(child),
											f: $mdgriffith$elm_markup$Mark$Internal$Description$Unexpected(
												{cG: details.by, n: details.n}),
											bD: seed
										};
									}
								})),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return c === '\n';
							})),
					$elm$parser$Parser$Advanced$getSource),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$mdgriffith$elm_markup$Mark$Internal$Parser$withRangeResult(
							A2($elm$parser$Parser$Advanced$withIndent, 0, blockParser)),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return (c === ' ') || (c === '\n');
							})),
					$elm$parser$Parser$Advanced$end($mdgriffith$elm_markup$Mark$Internal$Error$End)))
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectStartsWith = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$StartsWith = function (a) {
	return {$: 4, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$skipBlankLineWith = function (x) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(x),
			$elm$parser$Parser$Advanced$token(
				A2($elm$parser$Parser$Advanced$Token, '\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline))),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(0),
						$elm$parser$Parser$Advanced$backtrackable(
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return c === ' ';
								}))),
					$elm$parser$Parser$Advanced$backtrackable(
						$elm$parser$Parser$Advanced$token(
							A2($elm$parser$Parser$Advanced$Token, '\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline)))),
					$elm$parser$Parser$Advanced$succeed(0)
				])));
};
var $mdgriffith$elm_markup$Mark$manyBlankLines = function (lineCount) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$mdgriffith$elm_markup$Mark$Internal$Parser$skipBlankLineWith(
				$elm$parser$Parser$Advanced$Loop(lineCount + 1)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(0))
			]));
};
var $mdgriffith$elm_markup$Mark$Internal$Description$mergeErrors = F2(
	function (_v0, _v1) {
		var h1 = _v0.a;
		var r1 = _v0.b;
		var h2 = _v1.a;
		var r2 = _v1.b;
		return _Utils_Tuple2(
			h1,
			_Utils_ap(
				r1,
				A2($elm$core$List$cons, h2, r2)));
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$mergeWith = F3(
	function (fn, one, two) {
		var _v0 = _Utils_Tuple2(one, two);
		_v0$3:
		while (true) {
			_v0$4:
			while (true) {
				switch (_v0.a.$) {
					case 0:
						switch (_v0.b.$) {
							case 0:
								var renderedOne = _v0.a.a;
								var renderedTwo = _v0.b.a;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
									A2(fn, renderedOne, renderedTwo));
							case 1:
								if (!_v0.b.a.$) {
									break _v0$3;
								} else {
									break _v0$4;
								}
							default:
								break _v0$4;
						}
					case 1:
						if (_v0.a.a.$ === 1) {
							if (_v0.b.$ === 1) {
								if (_v0.b.a.$ === 1) {
									var _v1 = _v0.a.a;
									var firstErrs = _v1.a;
									var fst = _v1.b;
									var _v2 = _v0.b.a;
									var secondErrs = _v2.a;
									var snd = _v2.b;
									return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
										A2(
											$mdgriffith$elm_markup$Mark$Internal$Description$Recovered,
											A2($mdgriffith$elm_markup$Mark$Internal$Description$mergeErrors, firstErrs, secondErrs),
											A2(fn, fst, snd)));
								} else {
									break _v0$3;
								}
							} else {
								break _v0$4;
							}
						} else {
							var unexpected = _v0.a.a.a;
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
								$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(unexpected));
						}
					default:
						if ((_v0.b.$ === 1) && (!_v0.b.a.$)) {
							break _v0$3;
						} else {
							break _v0$4;
						}
				}
			}
			return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
		}
		var unexpected = _v0.b.a.a;
		return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
			$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(unexpected));
	});
var $mdgriffith$elm_markup$Mark$startWith = F3(
	function (fn, startBlock, endBlock) {
		return {
			k: function (desc) {
				if (desc.$ === 4) {
					var details = desc.a;
					return A3(
						$mdgriffith$elm_markup$Mark$Internal$Description$mergeWith,
						fn,
						A2($mdgriffith$elm_markup$Mark$Internal$Description$renderBlock, startBlock, details.bB.f),
						A2($mdgriffith$elm_markup$Mark$Internal$Description$renderBlock, endBlock, details.bM.f));
				} else {
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
				}
			},
			l: A2(
				$mdgriffith$elm_markup$Mark$Internal$Description$ExpectStartsWith,
				$mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(startBlock),
				$mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(endBlock)),
			h: $mdgriffith$elm_markup$Mark$Internal$Description$Value,
			m: F2(
				function (context, seed) {
					var _v1 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
					var parentId = _v1.a;
					var newSeed = _v1.b;
					var _v2 = A3($mdgriffith$elm_markup$Mark$Internal$Description$getParser, 0, newSeed, startBlock);
					var startSeed = _v2.a;
					var startParser = _v2.b;
					var _v3 = A3($mdgriffith$elm_markup$Mark$Internal$Description$getParser, 0, startSeed, endBlock);
					var remainSeed = _v3.a;
					var endParser = _v3.b;
					return _Utils_Tuple2(
						remainSeed,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed(
								function (_v4) {
									var range = _v4.a;
									var _v5 = _v4.b;
									var begin = _v5.a;
									var end = _v5.b;
									return $mdgriffith$elm_markup$Mark$Internal$Description$StartsWith(
										{
											bB: {
												an: $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(startBlock),
												f: begin
											},
											L: parentId,
											n: range,
											bM: {
												an: $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(endBlock),
												f: end
											}
										});
								}),
							$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
								A2(
									$elm$parser$Parser$Advanced$keeper,
									A2(
										$elm$parser$Parser$Advanced$keeper,
										$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
										A2(
											$elm$parser$Parser$Advanced$ignorer,
											startParser,
											A2($elm$parser$Parser$Advanced$loop, 0, $mdgriffith$elm_markup$Mark$manyBlankLines))),
									endParser))));
				})
		};
	});
var $mdgriffith$elm_markup$Mark$documentWith = F2(
	function (renderer, _v0) {
		var metadata = _v0.dy;
		var body = _v0.db;
		return A2(
			$mdgriffith$elm_markup$Mark$document,
			$elm$core$Basics$identity,
			A3($mdgriffith$elm_markup$Mark$startWith, renderer, metadata, body));
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$DescribeBlock = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectBlock = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$InBlock = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$block = F3(
	function (name, view, child) {
		return {
			k: function (desc) {
				if (!desc.$) {
					var details = desc.a;
					if (_Utils_eq(details.dA, name)) {
						var _v1 = details.f;
						if (!_v1.$) {
							var range = _v1.a;
							var found = _v1.b;
							return A2(
								$mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered,
								view,
								A2($mdgriffith$elm_markup$Mark$Internal$Description$renderBlock, child, found));
						} else {
							var unexpected = _v1.a;
							return $mdgriffith$elm_markup$Mark$Internal$Description$uncertain(unexpected);
						}
					} else {
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
					}
				} else {
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
				}
			},
			l: A2(
				$mdgriffith$elm_markup$Mark$Internal$Description$ExpectBlock,
				name,
				$mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(child)),
			h: $mdgriffith$elm_markup$Mark$Internal$Description$Named(name),
			m: F2(
				function (context, seed) {
					var _v2 = A3($mdgriffith$elm_markup$Mark$Internal$Description$getParser, context, seed, child);
					var newSeed = _v2.a;
					var childParser = _v2.b;
					var _v3 = $mdgriffith$elm_markup$Mark$Internal$Id$step(newSeed);
					var parentId = _v3.a;
					var finalSeed = _v3.b;
					return _Utils_Tuple2(
						finalSeed,
						A2(
							$elm$parser$Parser$Advanced$map,
							function (result) {
								if (!result.$) {
									var details = result.a;
									return $mdgriffith$elm_markup$Mark$Internal$Description$DescribeBlock(
										{
											an: A2(
												$mdgriffith$elm_markup$Mark$Internal$Description$ExpectBlock,
												name,
												$mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(child)),
											f: A2($mdgriffith$elm_markup$Mark$Internal$Description$Found, details.n, details.bT),
											L: parentId,
											dA: name
										});
								} else {
									var details = result.a;
									return $mdgriffith$elm_markup$Mark$Internal$Description$DescribeBlock(
										{
											an: A2(
												$mdgriffith$elm_markup$Mark$Internal$Description$ExpectBlock,
												name,
												$mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(child)),
											f: $mdgriffith$elm_markup$Mark$Internal$Description$Unexpected(
												{cG: details.by, n: details.n}),
											L: parentId,
											dA: name
										});
								}
							},
							$mdgriffith$elm_markup$Mark$Internal$Parser$withRangeResult(
								$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
									function (indentation) {
										return A2(
											$elm$parser$Parser$Advanced$keeper,
											A2(
												$elm$parser$Parser$Advanced$ignorer,
												A2(
													$elm$parser$Parser$Advanced$ignorer,
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
														$elm$parser$Parser$Advanced$keyword(
															A2(
																$elm$parser$Parser$Advanced$Token,
																name,
																$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingBlockName(name)))),
													$elm$parser$Parser$Advanced$chompWhile(
														function (c) {
															return c === ' ';
														})),
												$mdgriffith$elm_markup$Mark$Internal$Parser$skipBlankLineWith(0)),
											$elm$parser$Parser$Advanced$oneOf(
												_List_fromArray(
													[
														A2(
														$elm$parser$Parser$Advanced$andThen,
														function (start) {
															return $elm$parser$Parser$Advanced$oneOf(
																_List_fromArray(
																	[
																		A2(
																		$elm$parser$Parser$Advanced$keeper,
																		A2(
																			$elm$parser$Parser$Advanced$ignorer,
																			A2(
																				$elm$parser$Parser$Advanced$ignorer,
																				$elm$parser$Parser$Advanced$succeed(
																					function (end) {
																						return $elm$core$Result$Err(
																							$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndent(indentation + 4));
																					}),
																				A2(
																					$elm$parser$Parser$Advanced$chompIf,
																					function (c) {
																						return c === ' ';
																					},
																					$mdgriffith$elm_markup$Mark$Internal$Error$Space)),
																			$elm$parser$Parser$Advanced$chompWhile(
																				function (c) {
																					return c === ' ';
																				})),
																		A2(
																			$elm$parser$Parser$Advanced$ignorer,
																			$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition,
																			A2(
																				$elm$parser$Parser$Advanced$loop,
																				'',
																				$mdgriffith$elm_markup$Mark$Internal$Parser$raggedIndentedStringAbove(indentation)))),
																		A2(
																		$elm$parser$Parser$Advanced$map,
																		$elm$core$Result$Ok,
																		A2(
																			$elm$parser$Parser$Advanced$withIndent,
																			indentation + 4,
																			A2(
																				$elm$parser$Parser$Advanced$inContext,
																				$mdgriffith$elm_markup$Mark$Internal$Error$InBlock(name),
																				childParser)))
																	]));
														},
														A2(
															$elm$parser$Parser$Advanced$keeper,
															$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
															A2(
																$elm$parser$Parser$Advanced$ignorer,
																$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition,
																$elm$parser$Parser$Advanced$token(
																	A2(
																		$elm$parser$Parser$Advanced$Token,
																		A2($elm$core$String$repeat, indentation + 4, ' '),
																		$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(indentation + 4)))))),
														A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$succeed(
															$elm$core$Result$Err(
																$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndent(indentation + 4))),
														A2(
															$elm$parser$Parser$Advanced$loop,
															'',
															$mdgriffith$elm_markup$Mark$Internal$Parser$raggedIndentedStringAbove(indentation)))
													])));
									}))));
				})
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$AnnotationNamed = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_markup$Mark$textToTuple = function (_v0) {
	var style = _v0.a;
	var str = _v0.b;
	return _Utils_Tuple2(style, str);
};
var $mdgriffith$elm_markup$Mark$selectedText = function (sel) {
	switch (sel.$) {
		case 0:
			return _List_Nil;
		case 1:
			var txts = sel.a;
			return A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$textToTuple, txts);
		default:
			return _List_Nil;
	}
};
var $mdgriffith$elm_markup$Mark$annotation = F2(
	function (name, view) {
		return {
			X: $mdgriffith$elm_markup$Mark$Internal$Description$AnnotationNamed(name),
			Y: _List_Nil,
			ao: F2(
				function (desc, selected) {
					if (desc.$ === 1) {
						var details = desc.a;
						if (_Utils_eq(details.dA, name)) {
							var _v1 = details.f;
							if (!_v1.$) {
								var pos = _v1.a;
								var fieldDescriptions = _v1.b;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
									_Utils_Tuple3(
										pos,
										fieldDescriptions,
										view(
											$mdgriffith$elm_markup$Mark$selectedText(selected))));
							} else {
								var unexpected = _v1.a;
								return $mdgriffith$elm_markup$Mark$Internal$Description$uncertain(unexpected);
							}
						} else {
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
						}
					} else {
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
					}
				}),
			Z: _List_Nil,
			dA: name
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$Balanced = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$Replacement = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$commonReplacements = _List_fromArray(
	[
		A2($mdgriffith$elm_markup$Mark$Internal$Parser$Replacement, '...', '…'),
		A2($mdgriffith$elm_markup$Mark$Internal$Parser$Replacement, '<>', '\u00A0'),
		A2($mdgriffith$elm_markup$Mark$Internal$Parser$Replacement, '---', '—'),
		A2($mdgriffith$elm_markup$Mark$Internal$Parser$Replacement, '--', '–'),
		A2($mdgriffith$elm_markup$Mark$Internal$Parser$Replacement, '//', '/'),
		A2($mdgriffith$elm_markup$Mark$Internal$Parser$Replacement, '\'', '’'),
		$mdgriffith$elm_markup$Mark$Internal$Parser$Balanced(
		{
			cd: _Utils_Tuple2('\"', '”'),
			bO: _Utils_Tuple2('\"', '“')
		})
	]);
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $author$project$ElmMarkup$styledText = F2(
	function (styles, string) {
		return (styles.b2 || (styles.ct || styles.cW)) ? A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('bold', styles.b2),
							_Utils_Tuple2('italic', styles.ct),
							_Utils_Tuple2('strike', styles.cW)
						]))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(string)
				])) : $elm$html$Html$text(string);
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectInlineBlock = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectTextBlock = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$SelectString = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$SelectText = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$blockKindToSelection = function (kind) {
	switch (kind.$) {
		case 0:
			return $mdgriffith$elm_markup$Mark$Internal$Description$EmptyAnnotation;
		case 1:
			var name = kind.a;
			return $mdgriffith$elm_markup$Mark$Internal$Description$EmptyAnnotation;
		case 2:
			var name = kind.a;
			return $mdgriffith$elm_markup$Mark$Internal$Description$SelectString('');
		default:
			var name = kind.a;
			return $mdgriffith$elm_markup$Mark$Internal$Description$SelectText(_List_Nil);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Description$emptyStyles = {b2: false, ct: false, cW: false};
var $mdgriffith$elm_markup$Mark$Internal$Parser$InlineRecord = 0;
var $mdgriffith$elm_markup$Mark$recordToInlineBlock = F2(
	function (_v0, annotationType) {
		var details = _v0;
		var expectations = A2($mdgriffith$elm_markup$Mark$Internal$Description$ExpectRecord, details.dA, details.Y);
		return {
			k: function (desc) {
				var _v1 = A2(details.ao, desc, annotationType);
				switch (_v1.$) {
					case 0:
						var _v2 = _v1.a;
						var pos = _v2.a;
						var fieldDescriptions = _v2.b;
						var rendered = _v2.c;
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(rendered);
					case 2:
						var fail = _v1.a;
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(fail);
					default:
						if (!_v1.a.$) {
							var e = _v1.a.a;
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
								$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(e));
						} else {
							var _v3 = _v1.a;
							var e = _v3.a;
							var _v4 = _v3.b;
							var pos = _v4.a;
							var fieldDescriptions = _v4.b;
							var rendered = _v4.c;
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
								A2($mdgriffith$elm_markup$Mark$Internal$Description$Recovered, e, rendered));
						}
				}
			},
			l: expectations,
			h: details.X,
			m: F2(
				function (context, seed) {
					var _v5 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
					var parentId = _v5.a;
					var parentSeed = _v5.b;
					var _v6 = A2(
						$mdgriffith$elm_markup$Mark$Internal$Id$thread,
						parentSeed,
						A3(
							$elm$core$List$foldl,
							F2(
								function (f, ls) {
									return A2(
										$elm$core$List$cons,
										f(1),
										ls);
								}),
							_List_Nil,
							details.Z));
					var newSeed = _v6.a;
					var fields = _v6.b;
					return _Utils_Tuple2(
						newSeed,
						A5($mdgriffith$elm_markup$Mark$Internal$Parser$record, 0, parentId, details.dA, expectations, fields));
				})
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$UnknownInline = function (a) {
	return {$: 4, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Text = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$startingCharacters = F2(
	function (one, two) {
		var strikeOpening = ((!one.cW) && two.cW) ? '~' : '';
		var strikeClosing = (one.cW && (!two.cW)) ? '~' : '';
		var italicOpening = ((!one.ct) && two.ct) ? '/' : '';
		var italicClosing = (one.ct && (!two.ct)) ? '/' : '';
		var boldOpening = ((!one.b2) && two.b2) ? '*' : '';
		var boldClosing = (one.b2 && (!two.b2)) ? '*' : '';
		return _Utils_ap(
			boldClosing,
			_Utils_ap(
				italicClosing,
				_Utils_ap(
					strikeClosing,
					_Utils_ap(
						strikeOpening,
						_Utils_ap(italicOpening, boldOpening)))));
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$gatherText = F2(
	function (_v0, _v1) {
		var styles = _v0.a;
		var txt = _v0.b;
		var existingStyles = _v1.a;
		var existingStr = _v1.b;
		return _Utils_Tuple2(
			styles,
			_Utils_ap(
				existingStr,
				_Utils_ap(
					A2($mdgriffith$elm_markup$Mark$Internal$Description$startingCharacters, existingStyles, styles),
					txt)));
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$inlineExample = F2(
	function (kind, _v0) {
		var block = _v0;
		var selection = function () {
			switch (kind.$) {
				case 0:
					return '';
				case 1:
					var txts = kind.a;
					var _v5 = A2(
						$mdgriffith$elm_markup$Mark$Internal$Description$gatherText,
						A2($mdgriffith$elm_markup$Mark$Internal$Description$Text, $mdgriffith$elm_markup$Mark$Internal$Description$emptyStyles, ''),
						A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_markup$Mark$Internal$Description$gatherText,
							_Utils_Tuple2($mdgriffith$elm_markup$Mark$Internal$Description$emptyStyles, ''),
							txts));
					var newStyles = _v5.a;
					var renderedText = _v5.b;
					return renderedText;
				default:
					var str = kind.a;
					return str;
			}
		}();
		var renderField = function (_v3) {
			var name = _v3.a;
			var contentBlock = _v3.b;
			return name + (' = ' + 'value');
		};
		var containerAsString = function () {
			var _v2 = block.l;
			if (_v2.$ === 1) {
				if (!_v2.b.b) {
					var name = _v2.a;
					return '{' + (name + '}');
				} else {
					var name = _v2.a;
					var fields = _v2.b;
					return '{' + (name + ('| ' + (A2(
						$elm$core$String$join,
						', ',
						A2($elm$core$List$map, renderField, fields)) + ' }')));
				}
			} else {
				return '';
			}
		}();
		var _v1 = block.h;
		switch (_v1.$) {
			case 1:
				var name = _v1.a;
				return containerAsString;
			case 0:
				return containerAsString;
			case 2:
				var str = _v1.a;
				return '`' + (selection + ('`' + containerAsString));
			default:
				var name = _v1.a;
				return '[' + (selection + (']' + containerAsString));
		}
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $mdgriffith$elm_markup$Mark$Internal$Description$textLength = function (_v0) {
	var str = _v0.b;
	return $elm$core$String$length(str);
};
var $mdgriffith$elm_markup$Mark$Internal$Description$length = function (inlineEl) {
	if (!inlineEl.$) {
		var txt = inlineEl.b;
		return $mdgriffith$elm_markup$Mark$Internal$Description$textLength(txt);
	} else {
		var details = inlineEl.a;
		var _v1 = details.h;
		switch (_v1.$) {
			case 0:
				return 0;
			case 2:
				var str = _v1.a;
				return $elm$core$String$length(str);
			default:
				var txts = _v1.a;
				return $elm$core$List$sum(
					A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$Internal$Description$textLength, txts));
		}
	}
};
var $mdgriffith$elm_markup$Mark$matchKinds = F2(
	function (inline, blockKind) {
		var recordName = function () {
			var _v2 = inline.bL;
			if (_v2.$ === 1) {
				var rec = _v2.a;
				return $elm$core$Maybe$Just(rec.dA);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}();
		var _v0 = _Utils_Tuple3(recordName, inline.h, blockKind);
		_v0$3:
		while (true) {
			if (!_v0.a.$) {
				switch (_v0.b.$) {
					case 2:
						if (_v0.c.$ === 2) {
							var inlineName = _v0.a.a;
							var str = _v0.b.a;
							var vertName = _v0.c.a;
							return _Utils_eq(inlineName, vertName);
						} else {
							break _v0$3;
						}
					case 1:
						if (_v0.c.$ === 3) {
							var inlineName = _v0.a.a;
							var annName = _v0.c.a;
							return _Utils_eq(inlineName, annName);
						} else {
							break _v0$3;
						}
					default:
						if (_v0.c.$ === 1) {
							var inlineName = _v0.a.a;
							var _v1 = _v0.b;
							var name = _v0.c.a;
							return _Utils_eq(inlineName, name);
						} else {
							break _v0$3;
						}
				}
			} else {
				break _v0$3;
			}
		}
		return false;
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$recordName = function (desc) {
	if (desc.$ === 1) {
		var details = desc.a;
		return $elm$core$Maybe$Just(details.dA);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_markup$Mark$convertTextDescription = F4(
	function (id, options, comp, cursor) {
		var blockLength = $mdgriffith$elm_markup$Mark$Internal$Description$length(comp);
		if (!comp.$) {
			var range = comp.a;
			var _v1 = comp.b;
			var styling = _v1.a;
			var str = _v1.b;
			return {
				N: cursor.N + blockLength,
				ag: A3(
					$mdgriffith$elm_markup$Mark$Internal$Description$mergeWith,
					$elm$core$List$cons,
					$mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
						A3(
							options.dV,
							{
								L: id,
								dO: {bY: cursor.N, ci: cursor.N + blockLength}
							},
							styling,
							str)),
					cursor.ag)
			};
		} else {
			var details = comp.a;
			var recordName = A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_markup$Mark$Internal$Description$recordName(details.bL));
			var matchInlineName = F3(
				function (name, almostInlineBlock, maybeFound) {
					if (maybeFound.$ === 1) {
						var _v4 = almostInlineBlock(details.h);
						var inlineDetails = _v4;
						return A2($mdgriffith$elm_markup$Mark$matchKinds, details, inlineDetails.h) ? $elm$core$Maybe$Just(inlineDetails) : $elm$core$Maybe$Nothing;
					} else {
						return maybeFound;
					}
				});
			var maybeMatched = A3(
				$elm$core$List$foldl,
				matchInlineName(recordName),
				$elm$core$Maybe$Nothing,
				options.dt);
			if (maybeMatched.$ === 1) {
				return {
					N: cursor.N + blockLength,
					ag: $mdgriffith$elm_markup$Mark$Internal$Description$uncertain(
						{
							cG: $mdgriffith$elm_markup$Mark$Internal$Error$UnknownInline(
								A2(
									$elm$core$List$map,
									function (inline) {
										return A2(
											$mdgriffith$elm_markup$Mark$Internal$Description$inlineExample,
											details.h,
											inline($mdgriffith$elm_markup$Mark$Internal$Description$EmptyAnnotation));
									},
									options.dt)),
							n: details.n
						})
				};
			} else {
				var matched = maybeMatched.a;
				return {
					N: cursor.N + blockLength,
					ag: A3(
						$mdgriffith$elm_markup$Mark$Internal$Description$mergeWith,
						$elm$core$List$cons,
						matched.k(details.bL),
						cursor.ag)
				};
			}
		}
	});
var $mdgriffith$elm_markup$Mark$renderText = F2(
	function (options, description) {
		if (description.$ === 9) {
			var details = description.a;
			return A2(
				$mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered,
				$elm$core$List$reverse,
				A3(
					$elm$core$List$foldl,
					A2($mdgriffith$elm_markup$Mark$convertTextDescription, details.L, options),
					{
						N: 0,
						ag: $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(_List_Nil)
					},
					details.dS).ag);
		} else {
			return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$DescribeText = function (a) {
	return {$: 9, a: a};
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$firstChar = function (str) {
	var _v0 = $elm$core$String$uncons(str);
	if (_v0.$ === 1) {
		return $elm$core$Maybe$Nothing;
	} else {
		var _v1 = _v0.a;
		var fst = _v1.a;
		return $elm$core$Maybe$Just(fst);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$replacementStartingChars = function (replacements) {
	var first = function (repl) {
		if (!repl.$) {
			var x = repl.a;
			var y = repl.b;
			return $mdgriffith$elm_markup$Mark$Internal$Parser$firstChar(x);
		} else {
			var range = repl.a;
			return $mdgriffith$elm_markup$Mark$Internal$Parser$firstChar(range.bO.a);
		}
	};
	return A2($elm$core$List$filterMap, first, replacements);
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Bold = 0;
var $mdgriffith$elm_markup$Mark$Internal$Parser$ContinueWith = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$DescribeNothing = function (a) {
	return {$: 11, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$InlineBlock = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Italic = 1;
var $mdgriffith$elm_markup$Mark$Internal$Parser$StopWith = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$Strike = 2;
var $mdgriffith$elm_markup$Mark$Internal$Description$Styled = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$TextCursor = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Parser$addText = F2(
	function (newTxt, _v0) {
		var cursor = _v0;
		var _v1 = cursor.o;
		var styles = _v1.a;
		var txt = _v1.b;
		return _Utils_update(
			cursor,
			{
				o: A2(
					$mdgriffith$elm_markup$Mark$Internal$Description$Text,
					styles,
					_Utils_ap(txt, newTxt))
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$addToTextCursor = F2(
	function (_new, _v0) {
		var cursor = _v0;
		return _Utils_update(
			cursor,
			{
				f: A2($elm$core$List$cons, _new, cursor.f)
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$advanceTo = F2(
	function (target, _v0) {
		var cursor = _v0;
		return {u: cursor.u, o: cursor.o, f: cursor.f, bO: target};
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$EscapedChar = {$: 9};
var $mdgriffith$elm_markup$Mark$Internal$Parser$almostReplacement = F2(
	function (replacements, existing) {
		var first = function (repl) {
			if (!repl.$) {
				var x = repl.a;
				var y = repl.b;
				return $mdgriffith$elm_markup$Mark$Internal$Parser$firstChar(x);
			} else {
				var range = repl.a;
				return $mdgriffith$elm_markup$Mark$Internal$Parser$firstChar(range.bO.a);
			}
		};
		var captureChar = function (_char) {
			return A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (c) {
						return A2($mdgriffith$elm_markup$Mark$Internal$Parser$addText, c, existing);
					}),
				$elm$parser$Parser$Advanced$getChompedString(
					A2(
						$elm$parser$Parser$Advanced$chompIf,
						function (c) {
							return _Utils_eq(c, _char) && ((_char !== '{') && ((_char !== '*') && (_char !== '/')));
						},
						$mdgriffith$elm_markup$Mark$Internal$Error$EscapedChar)));
		};
		var allFirstChars = A2($elm$core$List$filterMap, first, replacements);
		return A2(
			$elm$core$List$map,
			captureChar,
			A2($elm$core$List$cons, '1', allFirstChars));
	});
var $mdgriffith$elm_markup$Mark$Internal$Error$ExpectingInlineName = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$InlineEnd = {$: 2};
var $mdgriffith$elm_markup$Mark$Internal$Error$InlineStart = {$: 1};
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$okUnit = $elm$core$Result$Ok(0);
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$chompWhile = function (_while) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($mdgriffith$elm_markup$Mark$Internal$TolerantParser$okUnit),
		$elm$parser$Parser$Advanced$chompWhile(_while));
};
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$FastForwardTo = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$fastForwardTo = $mdgriffith$elm_markup$Mark$Internal$TolerantParser$FastForwardTo;
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$ignore = F2(
	function (ignorePls, keepPls) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (possiblyKeepThisOne) {
				if (possiblyKeepThisOne.$ === 1) {
					var err = possiblyKeepThisOne.a;
					return $elm$parser$Parser$Advanced$succeed(
						$elm$core$Result$Err(err));
				} else {
					var keepThisOne = possiblyKeepThisOne.a;
					return A2(
						$elm$parser$Parser$Advanced$map,
						function (possibly) {
							if (!possibly.$) {
								return $elm$core$Result$Ok(keepThisOne);
							} else {
								var newErr = possibly.a;
								return $elm$core$Result$Err(newErr);
							}
						},
						ignorePls);
				}
			},
			keepPls);
	});
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$keep = F2(
	function (newDataParser, fnParser) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (existing) {
				if (existing.$ === 1) {
					var err = existing.a;
					return $elm$parser$Parser$Advanced$succeed(
						$elm$core$Result$Err(err));
				} else {
					var fn = existing.a;
					return A2(
						$elm$parser$Parser$Advanced$map,
						function (possiblyNew) {
							if (!possiblyNew.$) {
								var _new = possiblyNew.a;
								return $elm$core$Result$Ok(
									fn(_new));
							} else {
								var newErr = possiblyNew.a;
								return $elm$core$Result$Err(newErr);
							}
						},
						newDataParser);
				}
			},
			fnParser);
	});
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$oneOf = F2(
	function (prob, options) {
		return $elm$parser$Parser$Advanced$oneOf(
			_Utils_ap(
				options,
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$succeed(
						$elm$core$Result$Err(
							_List_fromArray(
								[prob])))
					])));
	});
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$StopWith = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$stopWith = function (err) {
	return $mdgriffith$elm_markup$Mark$Internal$TolerantParser$StopWith(err);
};
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$succeed = function (x) {
	return $elm$parser$Parser$Advanced$succeed(
		$elm$core$Result$Ok(x));
};
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$till = F2(
	function (chars, prob) {
		return A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(0),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return !A2($elm$core$List$member, c, chars);
					})),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$map,
						$elm$core$Basics$always(true),
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							function (c) {
								return A2($elm$core$List$member, c, chars);
							},
							prob)),
						$elm$parser$Parser$Advanced$succeed(false)
					])));
	});
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$runToken = F2(
	function (details, tokenParser) {
		var _v0 = details.cB;
		switch (_v0.$) {
			case 0:
				var skipTo = _v0.a;
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2($elm$parser$Parser$Advanced$map, $elm$core$Result$Ok, tokenParser),
							A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(
								$elm$core$Result$Err(
									_List_fromArray(
										[details.cG]))),
							A2($mdgriffith$elm_markup$Mark$Internal$TolerantParser$till, skipTo, details.cG))
						]));
			case 1:
				return A2($elm$parser$Parser$Advanced$map, $elm$core$Result$Ok, tokenParser);
			default:
				var err = _v0.a;
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2($elm$parser$Parser$Advanced$map, $elm$core$Result$Ok, tokenParser),
							$elm$parser$Parser$Advanced$succeed(
							$elm$core$Result$Err(
								_List_fromArray(
									[err])))
						]));
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$token = function (details) {
	return A2(
		$mdgriffith$elm_markup$Mark$Internal$TolerantParser$runToken,
		details,
		$elm$parser$Parser$Advanced$token(
			A2($elm$parser$Parser$Advanced$Token, details.cx, details.cG)));
};
var $mdgriffith$elm_markup$Mark$Internal$TolerantParser$try = $elm$parser$Parser$Advanced$map($elm$core$Result$Ok);
var $mdgriffith$elm_markup$Mark$Internal$Parser$attrContainer = function (recordBlocks) {
	return A2(
		$mdgriffith$elm_markup$Mark$Internal$TolerantParser$ignore,
		$mdgriffith$elm_markup$Mark$Internal$TolerantParser$token(
			{
				cx: '}',
				cB: $mdgriffith$elm_markup$Mark$Internal$TolerantParser$fastForwardTo(
					_List_fromArray(
						['}', '\n'])),
				cG: $mdgriffith$elm_markup$Mark$Internal$Error$InlineEnd
			}),
		A2(
			$mdgriffith$elm_markup$Mark$Internal$TolerantParser$ignore,
			$mdgriffith$elm_markup$Mark$Internal$TolerantParser$chompWhile(
				function (c) {
					return c === ' ';
				}),
			A2(
				$mdgriffith$elm_markup$Mark$Internal$TolerantParser$keep,
				A2(
					$mdgriffith$elm_markup$Mark$Internal$TolerantParser$oneOf,
					$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingInlineName(''),
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $mdgriffith$elm_markup$Mark$Internal$TolerantParser$try, $elm$core$Tuple$second),
							A2($mdgriffith$elm_markup$Mark$Internal$Description$getParser, 1, $mdgriffith$elm_markup$Mark$Internal$Id$initialSeed)),
						recordBlocks)),
				A2(
					$mdgriffith$elm_markup$Mark$Internal$TolerantParser$ignore,
					$mdgriffith$elm_markup$Mark$Internal$TolerantParser$chompWhile(
						function (c) {
							return c === ' ';
						}),
					A2(
						$mdgriffith$elm_markup$Mark$Internal$TolerantParser$ignore,
						$mdgriffith$elm_markup$Mark$Internal$TolerantParser$token(
							{
								cx: '{',
								cB: $mdgriffith$elm_markup$Mark$Internal$TolerantParser$stopWith($mdgriffith$elm_markup$Mark$Internal$Error$InlineStart),
								cG: $mdgriffith$elm_markup$Mark$Internal$Error$InlineStart
							}),
						$mdgriffith$elm_markup$Mark$Internal$TolerantParser$succeed($elm$core$Basics$identity))))));
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$clearText = function (_v0) {
	var styles = _v0.a;
	return A2($mdgriffith$elm_markup$Mark$Internal$Description$Text, styles, '');
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$flipStyle = F2(
	function (newStyle, textStyle) {
		var styles = textStyle.a;
		var str = textStyle.b;
		switch (newStyle) {
			case 0:
				return A2(
					$mdgriffith$elm_markup$Mark$Internal$Description$Text,
					_Utils_update(
						styles,
						{b2: !styles.b2}),
					str);
			case 1:
				return A2(
					$mdgriffith$elm_markup$Mark$Internal$Description$Text,
					_Utils_update(
						styles,
						{ct: !styles.ct}),
					str);
			default:
				return A2(
					$mdgriffith$elm_markup$Mark$Internal$Description$Text,
					_Utils_update(
						styles,
						{cW: !styles.cW}),
					str);
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$measure = F2(
	function (start, textStr) {
		var len = $elm$core$String$length(textStr);
		return _Utils_update(
			start,
			{bw: start.bw + len, b: start.b + len});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$changeStyle = F2(
	function (_v0, styleToken) {
		var cursor = _v0;
		var newText = $mdgriffith$elm_markup$Mark$Internal$Parser$clearText(
			A2($mdgriffith$elm_markup$Mark$Internal$Parser$flipStyle, styleToken, cursor.o));
		var cursorText = function () {
			var _v1 = cursor.o;
			var txt = _v1.b;
			return txt;
		}();
		if (cursorText === '') {
			return {u: cursor.u, o: newText, f: cursor.f, bO: cursor.bO};
		} else {
			var end = A2($mdgriffith$elm_markup$Mark$Internal$Parser$measure, cursor.bO, cursorText);
			return {
				u: cursor.u,
				o: newText,
				f: A2(
					$elm$core$List$cons,
					A2(
						$mdgriffith$elm_markup$Mark$Internal$Description$Styled,
						{cd: end, bO: cursor.bO},
						cursor.o),
					cursor.f),
				bO: end
			};
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$commitText = function (existingTextCursor) {
	var cursor = existingTextCursor;
	var _v0 = cursor.o;
	if (_v0.b === '') {
		return existingTextCursor;
	} else {
		var styles = _v0.a;
		var cursorText = _v0.b;
		var end = A2($mdgriffith$elm_markup$Mark$Internal$Parser$measure, cursor.bO, cursorText);
		return {
			u: cursor.u,
			o: A2($mdgriffith$elm_markup$Mark$Internal$Description$Text, styles, ''),
			f: A2(
				$elm$core$List$cons,
				A2(
					$mdgriffith$elm_markup$Mark$Internal$Description$Styled,
					{cd: end, bO: cursor.bO},
					cursor.o),
				cursor.f),
			bO: end
		};
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$getCurrentStyle = function (_v0) {
	var cursor = _v0;
	var _v1 = cursor.o;
	var s = _v1.a;
	return s;
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$onlyAnnotation = function (thisBlock) {
	var details = thisBlock;
	var _v0 = details.h;
	switch (_v0.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var name = _v0.a;
			return $elm$core$Maybe$Nothing;
		case 2:
			return $elm$core$Maybe$Nothing;
		default:
			return $elm$core$Maybe$Just(thisBlock);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$onlyVerbatim = function (thisBlock) {
	var details = thisBlock;
	var _v0 = details.h;
	switch (_v0.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var name = _v0.a;
			return $elm$core$Maybe$Nothing;
		case 2:
			return $elm$core$Maybe$Just(thisBlock);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $mdgriffith$elm_markup$Mark$Internal$Error$Escape = {$: 8};
var $mdgriffith$elm_markup$Mark$Internal$Parser$addBalance = F2(
	function (id, _v0) {
		var cursor = _v0;
		return _Utils_update(
			cursor,
			{
				u: A2($elm$core$List$cons, id, cursor.u)
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$balanceId = function (balance) {
	var join = function (_v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_ap(x, y);
	};
	return _Utils_ap(
		join(balance.bO),
		join(balance.cd));
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$removeBalance = F2(
	function (id, _v0) {
		var cursor = _v0;
		return _Utils_update(
			cursor,
			{
				u: A2(
					$elm$core$List$filter,
					$elm$core$Basics$neq(id),
					cursor.u)
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$replace = F2(
	function (replacements, existing) {
		var replaceWith = function (repl) {
			if (!repl.$) {
				var x = repl.a;
				var y = repl.b;
				return A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (_v1) {
								return A2($mdgriffith$elm_markup$Mark$Internal$Parser$addText, y, existing);
							}),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								x,
								$mdgriffith$elm_markup$Mark$Internal$Error$Expecting(x)))),
					$elm$parser$Parser$Advanced$succeed(0));
			} else {
				var range = repl.a;
				var id = $mdgriffith$elm_markup$Mark$Internal$Parser$balanceId(range);
				var balanceCache = function () {
					var cursor = existing;
					return cursor.u;
				}();
				if (A2($elm$core$List$member, id, balanceCache)) {
					var _v2 = range.cd;
					var x = _v2.a;
					var y = _v2.b;
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							A2(
								$mdgriffith$elm_markup$Mark$Internal$Parser$removeBalance,
								id,
								A2($mdgriffith$elm_markup$Mark$Internal$Parser$addText, y, existing))),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								x,
								$mdgriffith$elm_markup$Mark$Internal$Error$Expecting(x))));
				} else {
					var _v3 = range.bO;
					var x = _v3.a;
					var y = _v3.b;
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							A2(
								$mdgriffith$elm_markup$Mark$Internal$Parser$addBalance,
								id,
								A2($mdgriffith$elm_markup$Mark$Internal$Parser$addText, y, existing))),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								x,
								$mdgriffith$elm_markup$Mark$Internal$Error$Expecting(x))));
				}
			}
		};
		var escaped = A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					function (esc) {
						return A2($mdgriffith$elm_markup$Mark$Internal$Parser$addText, esc, existing);
					}),
				$elm$parser$Parser$Advanced$token(
					A2($elm$parser$Parser$Advanced$Token, '\\', $mdgriffith$elm_markup$Mark$Internal$Error$Escape))),
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Basics$always(true),
					$mdgriffith$elm_markup$Mark$Internal$Error$EscapedChar)));
		return A2(
			$elm$core$List$cons,
			escaped,
			A2($elm$core$List$map, replaceWith, replacements));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$resetBalancedReplacements = F2(
	function (newBalance, _v0) {
		var cursor = _v0;
		return _Utils_update(
			cursor,
			{u: newBalance});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$resetTextWith = F2(
	function (_v0, _v1) {
		var styles = _v0.a;
		var cursor = _v1;
		return _Utils_update(
			cursor,
			{
				o: A2($mdgriffith$elm_markup$Mark$Internal$Description$Text, styles, '')
			});
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$getStyles = function (_v0) {
	var styles = _v0.a;
	return styles;
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$getCurrentStyles = function (_v0) {
	var cursor = _v0;
	return $mdgriffith$elm_markup$Mark$Internal$Parser$getStyles(cursor.o);
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$stylingChars = _List_fromArray(
	['~', '[', '/', '*', '\n', '{', '`']);
var $mdgriffith$elm_markup$Mark$Internal$Parser$toText = function (textDesc) {
	if (!textDesc.$) {
		var txt = textDesc.b;
		return $elm$core$Maybe$Just(txt);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$simpleStyledTextTill = F3(
	function (until, replacements, cursor) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					$elm$parser$Parser$Advanced$Loop,
					$elm$parser$Parser$Advanced$oneOf(
						A2($mdgriffith$elm_markup$Mark$Internal$Parser$replace, replacements, cursor))),
					A2(
					$elm$parser$Parser$Advanced$map,
					$elm$parser$Parser$Advanced$Loop,
					$elm$parser$Parser$Advanced$oneOf(
						A2($mdgriffith$elm_markup$Mark$Internal$Parser$almostReplacement, replacements, cursor))),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						A2(
							$elm$core$Basics$composeL,
							$elm$parser$Parser$Advanced$Loop,
							$mdgriffith$elm_markup$Mark$Internal$Parser$changeStyle(cursor))),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(1),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'/',
										$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('/')))),
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(2),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'~',
										$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('~')))),
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(0),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'*',
										$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('*'))))
							]))),
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (_new) {
						if ((_new === '') || (_new === '\n')) {
							var _v0 = $mdgriffith$elm_markup$Mark$Internal$Parser$commitText(cursor);
							var txt = _v0;
							var styling = function () {
								var _v1 = txt.o;
								var s = _v1.a;
								return s;
							}();
							return $elm$parser$Parser$Advanced$succeed(
								$elm$parser$Parser$Advanced$Done(
									_Utils_Tuple2(
										$elm$core$List$reverse(
											A2($elm$core$List$filterMap, $mdgriffith$elm_markup$Mark$Internal$Parser$toText, txt.f)),
										txt)));
						} else {
							return $elm$parser$Parser$Advanced$succeed(
								$elm$parser$Parser$Advanced$Loop(
									A2($mdgriffith$elm_markup$Mark$Internal$Parser$addText, _new, cursor)));
						}
					},
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return !A2(
									$elm$core$List$member,
									c,
									A2(
										$elm$core$List$cons,
										'\\',
										A2(
											$elm$core$List$cons,
											'\n',
											_Utils_ap(
												until,
												_Utils_ap(
													$mdgriffith$elm_markup$Mark$Internal$Parser$stylingChars,
													$mdgriffith$elm_markup$Mark$Internal$Parser$replacementStartingChars(replacements))))));
							})))
				]));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$textCursor = F2(
	function (inheritedStyles, startingPos) {
		return {
			u: _List_Nil,
			o: A2($mdgriffith$elm_markup$Mark$Internal$Description$Text, inheritedStyles, ''),
			f: _List_Nil,
			bO: startingPos
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$textSelection = F2(
	function (replacements, found) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (str) {
								return _Utils_Tuple2(
									$elm$core$Maybe$Nothing,
									$mdgriffith$elm_markup$Mark$Internal$Description$SelectString(str));
							}),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'`',
								$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('`')))),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$getChompedString(
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return (c !== '`') && (c !== '\n');
								})),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return c === '`';
							}))),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (_v0) {
								var txts = _v0.a;
								var cursor = _v0.b;
								return _Utils_Tuple2(
									$elm$core$Maybe$Just(cursor),
									$mdgriffith$elm_markup$Mark$Internal$Description$SelectText(txts));
							}),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'[',
								$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('[')))),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$loop,
							A2(
								$mdgriffith$elm_markup$Mark$Internal$Parser$textCursor,
								$mdgriffith$elm_markup$Mark$Internal$Parser$getCurrentStyles(found),
								{bw: 1, a2: 1, b: 0}),
							A2(
								$mdgriffith$elm_markup$Mark$Internal$Parser$simpleStyledTextTill,
								_List_fromArray(
									['\n', ']']),
								replacements)),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								']',
								$mdgriffith$elm_markup$Mark$Internal$Error$Expecting(']')))))
				]));
	});
var $elm$core$String$trimRight = _String_trimRight;
var $mdgriffith$elm_markup$Mark$Internal$Parser$styledTextLoop = F5(
	function (options, context, meaningful, untilStrings, found) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					$elm$parser$Parser$Advanced$Loop,
					$elm$parser$Parser$Advanced$oneOf(
						A2($mdgriffith$elm_markup$Mark$Internal$Parser$replace, options.dJ, found))),
					A2(
					$elm$parser$Parser$Advanced$map,
					$elm$parser$Parser$Advanced$Loop,
					$elm$parser$Parser$Advanced$oneOf(
						A2($mdgriffith$elm_markup$Mark$Internal$Parser$almostReplacement, options.dJ, found))),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						A2(
							$elm$core$Basics$composeL,
							$elm$parser$Parser$Advanced$Loop,
							$mdgriffith$elm_markup$Mark$Internal$Parser$changeStyle(found))),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(1),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'/',
										$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('/')))),
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(2),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'~',
										$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('~')))),
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(0),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'*',
										$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('*'))))
							]))),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed(
								F3(
									function (start, _v0, end) {
										var maybeNewCursor = _v0.a;
										var newInlineBlock = _v0.b;
										var resetCursor = function (curs) {
											if (maybeNewCursor.$ === 1) {
												return curs;
											} else {
												var newCursor = maybeNewCursor.a;
												return A2(
													$mdgriffith$elm_markup$Mark$Internal$Parser$resetTextWith,
													newCursor.o,
													A2($mdgriffith$elm_markup$Mark$Internal$Parser$resetBalancedReplacements, newCursor.u, curs));
											}
										};
										return $elm$parser$Parser$Advanced$Loop(
											A2(
												$mdgriffith$elm_markup$Mark$Internal$Parser$advanceTo,
												end,
												resetCursor(
													A2(
														$mdgriffith$elm_markup$Mark$Internal$Parser$addToTextCursor,
														newInlineBlock(
															{cd: end, bO: start}),
														$mdgriffith$elm_markup$Mark$Internal$Parser$commitText(found)))));
									})),
							$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition),
						A2(
							$elm$parser$Parser$Advanced$andThen,
							function (_v2) {
								var maybeNewCursor = _v2.a;
								var selection = _v2.b;
								return A2(
									$elm$parser$Parser$Advanced$map,
									function (attrResult) {
										return _Utils_Tuple2(
											maybeNewCursor,
											function (range) {
												if (attrResult.$ === 1) {
													if ((attrResult.a.b && (attrResult.a.a.$ === 1)) && (!attrResult.a.b.b)) {
														var _v4 = attrResult.a;
														var _v5 = _v4.a;
														if (selection.$ === 2) {
															var str = selection.a;
															return A2(
																$mdgriffith$elm_markup$Mark$Internal$Description$Styled,
																range,
																A2(
																	$mdgriffith$elm_markup$Mark$Internal$Description$Text,
																	$mdgriffith$elm_markup$Mark$Internal$Parser$getCurrentStyle(found),
																	str));
														} else {
															return $mdgriffith$elm_markup$Mark$Internal$Description$InlineBlock(
																{
																	h: selection,
																	n: range,
																	bL: $mdgriffith$elm_markup$Mark$Internal$Description$DescribeNothing(
																		$mdgriffith$elm_markup$Mark$Internal$Id$step($mdgriffith$elm_markup$Mark$Internal$Id$initialSeed).a)
																});
														}
													} else {
														var errs = attrResult.a;
														return $mdgriffith$elm_markup$Mark$Internal$Description$InlineBlock(
															{
																h: selection,
																n: range,
																bL: $mdgriffith$elm_markup$Mark$Internal$Description$DescribeNothing(
																	$mdgriffith$elm_markup$Mark$Internal$Id$step($mdgriffith$elm_markup$Mark$Internal$Id$initialSeed).a)
															});
													}
												} else {
													var foundFields = attrResult.a;
													return $mdgriffith$elm_markup$Mark$Internal$Description$InlineBlock(
														{h: selection, n: range, bL: foundFields});
												}
											});
									},
									$mdgriffith$elm_markup$Mark$Internal$Parser$attrContainer(
										function () {
											switch (selection.$) {
												case 2:
													return A2($elm$core$List$filterMap, $mdgriffith$elm_markup$Mark$Internal$Parser$onlyVerbatim, options.dt);
												case 1:
													return A2($elm$core$List$filterMap, $mdgriffith$elm_markup$Mark$Internal$Parser$onlyAnnotation, options.dt);
												default:
													return _List_Nil;
											}
										}()));
							},
							A2($mdgriffith$elm_markup$Mark$Internal$Parser$textSelection, options.dJ, found))),
					$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (_v8) {
							var _new = _v8.a;
							var _final = _v8.b;
							if ((_new === '') || _final) {
								var _v9 = $mdgriffith$elm_markup$Mark$Internal$Parser$commitText(
									A2(
										$mdgriffith$elm_markup$Mark$Internal$Parser$addText,
										$elm$core$String$trimRight(_new),
										found));
								var txt = _v9;
								var styling = function () {
									var _v10 = txt.o;
									var s = _v10.a;
									return s;
								}();
								return $elm$parser$Parser$Advanced$Done(
									$elm$core$List$reverse(txt.f));
							} else {
								return $elm$parser$Parser$Advanced$Loop(
									A2($mdgriffith$elm_markup$Mark$Internal$Parser$addText, _new, found));
							}
						}),
					A2(
						$elm$parser$Parser$Advanced$andThen,
						function (str) {
							return $elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed(
											_Utils_Tuple2(str, true)),
										$elm$parser$Parser$Advanced$token(
											A2($elm$parser$Parser$Advanced$Token, '\n\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline))),
										$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
										function (indentation) {
											return A2(
												$elm$parser$Parser$Advanced$keeper,
												A2(
													$elm$parser$Parser$Advanced$ignorer,
													$elm$parser$Parser$Advanced$succeed(
														function (finished) {
															if (!finished.$) {
																var add = finished.a;
																return _Utils_Tuple2(
																	_Utils_ap(str, add),
																	true);
															} else {
																var add = finished.a;
																return _Utils_Tuple2(
																	_Utils_ap(str, add),
																	false);
															}
														}),
													$elm$parser$Parser$Advanced$backtrackable(
														$elm$parser$Parser$Advanced$token(
															A2(
																$elm$parser$Parser$Advanced$Token,
																'\n' + A2($elm$core$String$repeat, indentation, ' '),
																$mdgriffith$elm_markup$Mark$Internal$Error$Newline)))),
												$elm$parser$Parser$Advanced$oneOf(
													_Utils_ap(
														_List_fromArray(
															[
																A2(
																$elm$parser$Parser$Advanced$map,
																$elm$core$Basics$always(
																	$mdgriffith$elm_markup$Mark$Internal$Parser$StopWith('')),
																$elm$parser$Parser$Advanced$end($mdgriffith$elm_markup$Mark$Internal$Error$End)),
																A2(
																$elm$parser$Parser$Advanced$map,
																$elm$core$Basics$always(
																	$mdgriffith$elm_markup$Mark$Internal$Parser$StopWith('')),
																$mdgriffith$elm_markup$Mark$Internal$Parser$newline)
															]),
														function () {
															if (context === 2) {
																return _List_fromArray(
																	[
																		A2(
																		$elm$parser$Parser$Advanced$andThen,
																		$elm$core$Basics$always(
																			$elm$parser$Parser$Advanced$problem(
																				$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('---'))),
																		$elm$parser$Parser$Advanced$backtrackable(
																			$elm$parser$Parser$Advanced$token(
																				A2($elm$parser$Parser$Advanced$Token, '-', $mdgriffith$elm_markup$Mark$Internal$Error$Newline)))),
																		A2(
																		$elm$parser$Parser$Advanced$andThen,
																		$elm$core$Basics$always(
																			$elm$parser$Parser$Advanced$problem(
																				$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('1.'))),
																		$elm$parser$Parser$Advanced$backtrackable(
																			$elm$parser$Parser$Advanced$token(
																				A2($elm$parser$Parser$Advanced$Token, '1.', $mdgriffith$elm_markup$Mark$Internal$Error$Newline)))),
																		A2(
																		$elm$parser$Parser$Advanced$map,
																		function (c) {
																			return $mdgriffith$elm_markup$Mark$Internal$Parser$ContinueWith('\n' + c);
																		},
																		$elm$parser$Parser$Advanced$getChompedString(
																			A2(
																				$elm$parser$Parser$Advanced$chompIf,
																				function (c) {
																					return (c !== '-') && ((c !== '1') && (c !== ' '));
																				},
																				$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('char'))))
																	]);
															} else {
																return _List_fromArray(
																	[
																		$elm$parser$Parser$Advanced$succeed(
																		$mdgriffith$elm_markup$Mark$Internal$Parser$ContinueWith('\n'))
																	]);
															}
														}())));
										}),
										A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed(
											_Utils_Tuple2(str, true)),
										$elm$parser$Parser$Advanced$token(
											A2($elm$parser$Parser$Advanced$Token, '\n', $mdgriffith$elm_markup$Mark$Internal$Error$Newline))),
										A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed(
											_Utils_Tuple2(str, true)),
										$elm$parser$Parser$Advanced$end($mdgriffith$elm_markup$Mark$Internal$Error$End)),
										$elm$parser$Parser$Advanced$succeed(
										_Utils_Tuple2(str, false))
									]));
						},
						$elm$parser$Parser$Advanced$getChompedString(
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return !A2($elm$core$List$member, c, meaningful);
								}))))
				]));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$styledText = F6(
	function (options, context, seed, startingPos, inheritedStyles, until) {
		var vacantText = A2($mdgriffith$elm_markup$Mark$Internal$Parser$textCursor, inheritedStyles, startingPos);
		var untilStrings = A2($elm$core$List$map, $elm$core$String$fromChar, until);
		var meaningful = A2(
			$elm$core$List$cons,
			'1',
			A2(
				$elm$core$List$cons,
				'\\',
				A2(
					$elm$core$List$cons,
					'\n',
					_Utils_ap(
						until,
						_Utils_ap(
							$mdgriffith$elm_markup$Mark$Internal$Parser$stylingChars,
							$mdgriffith$elm_markup$Mark$Internal$Parser$replacementStartingChars(options.dJ))))));
		var _v0 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
		var newId = _v0.a;
		var newSeed = _v0.b;
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v1) {
						var pos = _v1.a;
						var textNodes = _v1.b;
						return $mdgriffith$elm_markup$Mark$Internal$Description$DescribeText(
							{L: newId, n: pos, dS: textNodes});
					},
					$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
						A2(
							$elm$parser$Parser$Advanced$loop,
							vacantText,
							A4($mdgriffith$elm_markup$Mark$Internal$Parser$styledTextLoop, options, context, meaningful, untilStrings))))
				]));
	});
var $mdgriffith$elm_markup$Mark$textWith = function (options) {
	var inlineRecords = A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$recordToInlineBlock, options.dt);
	var inlineExpectations = A2(
		$elm$core$List$map,
		function (_v2) {
			var rec = _v2;
			return $mdgriffith$elm_markup$Mark$Internal$Description$ExpectInlineBlock(
				{
					Z: rec.Y,
					h: $mdgriffith$elm_markup$Mark$Internal$Description$blockKindToSelection(rec.X),
					dA: rec.dA
				});
		},
		options.dt);
	return {
		k: $mdgriffith$elm_markup$Mark$renderText(
			{
				dt: inlineRecords,
				dV: $elm$core$Basics$always(options.dV)
			}),
		l: $mdgriffith$elm_markup$Mark$Internal$Description$ExpectTextBlock(inlineExpectations),
		h: $mdgriffith$elm_markup$Mark$Internal$Description$Value,
		m: F2(
			function (context, seed) {
				var _v0 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
				var newSeed = _v0.b;
				var _v1 = $mdgriffith$elm_markup$Mark$Internal$Id$step(newSeed);
				var returnSeed = _v1.b;
				return _Utils_Tuple2(
					returnSeed,
					A2(
						$elm$parser$Parser$Advanced$andThen,
						function (pos) {
							return A6(
								$mdgriffith$elm_markup$Mark$Internal$Parser$styledText,
								{
									dt: A2(
										$elm$core$List$map,
										function (x) {
											return x($mdgriffith$elm_markup$Mark$Internal$Description$EmptyAnnotation);
										},
										inlineRecords),
									dJ: options.dJ
								},
								context,
								newSeed,
								pos,
								$mdgriffith$elm_markup$Mark$Internal$Description$emptyStyles,
								_List_Nil);
						},
						$mdgriffith$elm_markup$Mark$Internal$Parser$getPosition));
			})
	};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$VerbatimNamed = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_markup$Mark$selectedString = function (sel) {
	switch (sel.$) {
		case 0:
			return '';
		case 1:
			var txts = sel.a;
			return '';
		default:
			var str = sel.a;
			return str;
	}
};
var $mdgriffith$elm_markup$Mark$verbatim = F2(
	function (name, view) {
		return {
			X: $mdgriffith$elm_markup$Mark$Internal$Description$VerbatimNamed(name),
			Y: _List_Nil,
			ao: F2(
				function (desc, selected) {
					if (desc.$ === 1) {
						var details = desc.a;
						if (_Utils_eq(details.dA, name)) {
							var _v1 = details.f;
							if (!_v1.$) {
								var pos = _v1.a;
								var fieldDescriptions = _v1.b;
								return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
									_Utils_Tuple3(
										pos,
										fieldDescriptions,
										view(
											$mdgriffith$elm_markup$Mark$selectedString(selected))));
							} else {
								var unexpected = _v1.a;
								return $mdgriffith$elm_markup$Mark$Internal$Description$uncertain(unexpected);
							}
						} else {
							return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
						}
					} else {
						return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
					}
				}),
			Z: _List_Nil,
			dA: name
		};
	});
var $author$project$ElmMarkup$text = $mdgriffith$elm_markup$Mark$textWith(
	{
		dt: _List_fromArray(
			[
				A3(
				$mdgriffith$elm_markup$Mark$field,
				'url',
				$mdgriffith$elm_markup$Mark$string,
				A2(
					$mdgriffith$elm_markup$Mark$annotation,
					'link',
					F2(
						function (texts, url) {
							return A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href(url)
									]),
								A2(
									$elm$core$List$map,
									function (_v0) {
										var styles = _v0.a;
										var str = _v0.b;
										return A2($author$project$ElmMarkup$styledText, styles, str);
									},
									texts));
						}))),
				A2(
				$mdgriffith$elm_markup$Mark$verbatim,
				'name',
				function (str) {
					return A2(
						$elm$html$Html$code,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]));
				})
			]),
		dJ: $mdgriffith$elm_markup$Mark$commonReplacements,
		dV: F2(
			function (styles, string) {
				return A2($author$project$ElmMarkup$styledText, styles, string);
			})
	});
var $author$project$ElmMarkup$header1 = A3(
	$mdgriffith$elm_markup$Mark$block,
	'H1',
	function (children) {
		return A2($elm$html$Html$h1, _List_Nil, children);
	},
	$author$project$ElmMarkup$text);
var $author$project$ElmMarkup$header2 = A3(
	$mdgriffith$elm_markup$Mark$block,
	'H2',
	function (children) {
		return A2($elm$html$Html$h2, _List_Nil, children);
	},
	$author$project$ElmMarkup$text);
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $author$project$ElmMarkup$header3 = A3(
	$mdgriffith$elm_markup$Mark$block,
	'H3',
	function (children) {
		return A2($elm$html$Html$h3, _List_Nil, children);
	},
	$author$project$ElmMarkup$text);
var $author$project$ElmMarkup$image = $mdgriffith$elm_markup$Mark$toBlock(
	A3(
		$mdgriffith$elm_markup$Mark$field,
		'description',
		$mdgriffith$elm_markup$Mark$string,
		A3(
			$mdgriffith$elm_markup$Mark$field,
			'src',
			$mdgriffith$elm_markup$Mark$string,
			A2(
				$mdgriffith$elm_markup$Mark$record,
				'Image',
				F2(
					function (src, description) {
						return A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$src(src),
									$elm$html$Html$Attributes$alt(description)
								]),
							_List_Nil);
					})))));
var $mdgriffith$elm_markup$Mark$map = F2(
	function (fn, _v0) {
		var details = _v0;
		return {
			k: A2(
				$elm$core$Basics$composeL,
				$mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered(fn),
				details.k),
			l: details.l,
			h: details.h,
			m: details.m
		};
	});
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $author$project$ElmMarkup$renderItem = function (_v2) {
	var item = _v2;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				A2($elm$html$Html$div, _List_Nil, item.de),
				$author$project$ElmMarkup$renderList(item.dd)
			]));
};
var $author$project$ElmMarkup$renderList = function (_v0) {
	var _enum = _v0;
	var group = function () {
		var _v1 = _enum.dp;
		if (!_v1) {
			return $elm$html$Html$ul;
		} else {
			return $elm$html$Html$ol;
		}
	}();
	return A2(
		group,
		_List_Nil,
		A2($elm$core$List$map, $author$project$ElmMarkup$renderItem, _enum.dv));
};
var $mdgriffith$elm_markup$Mark$Bullet = 0;
var $mdgriffith$elm_markup$Mark$Internal$Description$Bullet = {$: 0};
var $mdgriffith$elm_markup$Mark$Internal$Description$DescribeTree = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_markup$Mark$Enumerated = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectTree = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Number = 1;
var $mdgriffith$elm_markup$Mark$Internal$Description$ParseInTree = 2;
var $mdgriffith$elm_markup$Mark$Internal$Description$TreeExpectation = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Description$Nested = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Parser$TreeBuilder = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Parser$addToLevel = F3(
	function (index, brandNewItem, _v0) {
		var parent = _v0;
		if (index <= 0) {
			return _Utils_update(
				parent,
				{
					dd: A2($elm$core$List$cons, brandNewItem, parent.dd)
				});
		} else {
			var _v1 = parent.dd;
			if (!_v1.b) {
				return parent;
			} else {
				var top = _v1.a;
				var remain = _v1.b;
				return _Utils_update(
					parent,
					{
						dd: A2(
							$elm$core$List$cons,
							A3($mdgriffith$elm_markup$Mark$Internal$Parser$addToLevel, index - 1, brandNewItem, top),
							remain)
					});
			}
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$addItem = F4(
	function (indentation, icon, content, _v0) {
		var builder = _v0;
		var newItem = {dd: _List_Nil, de: content, dp: icon};
		var _v1 = builder.aL;
		if (!_v1.b) {
			return {
				aL: _List_fromArray(
					[newItem]),
				bm: indentation
			};
		} else {
			var lvl = _v1.a;
			var remaining = _v1.b;
			return (!indentation) ? {
				aL: A2(
					$elm$core$List$cons,
					newItem,
					A2($elm$core$List$cons, lvl, remaining)),
				bm: indentation
			} : {
				aL: A2(
					$elm$core$List$cons,
					A3(
						$mdgriffith$elm_markup$Mark$Internal$Parser$addToLevel,
						(($elm$core$Basics$abs(indentation) / 4) | 0) - 1,
						newItem,
						lvl),
					remaining),
				bm: indentation
			};
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$emptyTreeBuilder = {aL: _List_Nil, bm: 0};
var $mdgriffith$elm_markup$Mark$Internal$Parser$dive = function (cursor) {
	return _Utils_update(
		cursor,
		{
			dr: 0,
			bg: A2($elm$core$List$cons, cursor.dr, cursor.bg)
		});
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$next = function (cursor) {
	return _Utils_update(
		cursor,
		{dr: cursor.dr + 1});
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$rev = F2(
	function (nest, _v1) {
		var cursor = _v1.a;
		var found = _v1.b;
		return _Utils_Tuple2(
			$mdgriffith$elm_markup$Mark$Internal$Parser$next(cursor),
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_markup$Mark$Internal$Parser$reverseTree, cursor, nest),
				found));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$reverseTree = F2(
	function (cursor, _v0) {
		var nest = _v0;
		return {
			dd: A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_markup$Mark$Internal$Parser$rev,
				_Utils_Tuple2(
					$mdgriffith$elm_markup$Mark$Internal$Parser$dive(cursor),
					_List_Nil),
				nest.dd).b,
			de: $elm$core$List$reverse(nest.de),
			dp: nest.dp
		};
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$renderLevels = function (levels) {
	if (!levels.b) {
		return _List_Nil;
	} else {
		return A2(
			$elm$core$List$indexedMap,
			F2(
				function (index, level) {
					return A2(
						$mdgriffith$elm_markup$Mark$Internal$Parser$reverseTree,
						{dr: index, bg: _List_Nil},
						level);
				}),
			levels);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$buildTree = F2(
	function (baseIndent, items) {
		var groupByIcon = F2(
			function (item, maybeCursor) {
				if (maybeCursor.$ === 1) {
					var _v4 = item.dp;
					if (!_v4.$) {
						var icon = _v4.a;
						return $elm$core$Maybe$Just(
							{
								al: _List_Nil,
								dp: icon,
								g: item.g,
								dv: _List_fromArray(
									[item.de])
							});
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					var cursor = maybeCursor.a;
					return $elm$core$Maybe$Just(
						function () {
							var _v5 = item.dp;
							if (_v5.$ === 1) {
								return {
									al: cursor.al,
									dp: cursor.dp,
									g: cursor.g,
									dv: A2($elm$core$List$cons, item.de, cursor.dv)
								};
							} else {
								var icon = _v5.a;
								return {
									al: A2(
										$elm$core$List$cons,
										{de: cursor.dv, dp: cursor.dp, g: cursor.g},
										cursor.al),
									dp: icon,
									g: item.g,
									dv: _List_fromArray(
										[item.de])
								};
							}
						}());
				}
			});
		var gather = F2(
			function (item, builder) {
				return A4($mdgriffith$elm_markup$Mark$Internal$Parser$addItem, item.g - baseIndent, item.dp, item.de, builder);
			});
		var finalizeGrouping = function (maybeCursor) {
			if (maybeCursor.$ === 1) {
				return _List_Nil;
			} else {
				var cursor = maybeCursor.a;
				var _v2 = cursor.dv;
				if (!_v2.b) {
					return cursor.al;
				} else {
					return A2(
						$elm$core$List$cons,
						{de: cursor.dv, dp: cursor.dp, g: cursor.g},
						cursor.al);
				}
			}
		};
		var newTree = A3(
			$elm$core$List$foldl,
			gather,
			$mdgriffith$elm_markup$Mark$Internal$Parser$emptyTreeBuilder,
			$elm$core$List$reverse(
				finalizeGrouping(
					A3($elm$core$List$foldl, groupByIcon, $elm$core$Maybe$Nothing, items))));
		var builder = newTree;
		return $elm$core$List$reverse(
			$mdgriffith$elm_markup$Mark$Internal$Parser$renderLevels(builder.aL));
	});
var $mdgriffith$elm_markup$Mark$getNestedIcon = function (_v0) {
	var cursor = _v0;
	return cursor.dp;
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$descending = F2(
	function (base, prev) {
		return (_Utils_cmp(prev, base) < 1) ? _List_Nil : $elm$core$List$reverse(
			A2(
				$elm$core$List$map,
				function (x) {
					var level = base + (x * 4);
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(level),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								A2($elm$core$String$repeat, level, ' '),
								$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(level))));
				},
				A2($elm$core$List$range, 0, (((prev - 4) - base) / 4) | 0)));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$expectIndentation = F2(
	function (base, previous) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (_v0) {
				var indentLevel = _v0.a;
				var extraSpaces = _v0.b;
				return (extraSpaces === '') ? $elm$parser$Parser$Advanced$succeed(indentLevel) : $elm$parser$Parser$Advanced$problem(
					$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(base + indentLevel));
			},
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
					$elm$parser$Parser$Advanced$oneOf(
						_Utils_ap(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(previous + 4),
									$elm$parser$Parser$Advanced$token(
										A2(
											$elm$parser$Parser$Advanced$Token,
											A2($elm$core$String$repeat, previous + 4, ' '),
											$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(previous + 4)))),
									A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(previous),
									$elm$parser$Parser$Advanced$token(
										A2(
											$elm$parser$Parser$Advanced$Token,
											A2($elm$core$String$repeat, previous, ' '),
											$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(previous))))
								]),
							A2($mdgriffith$elm_markup$Mark$Internal$Parser$descending, base, previous)))),
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return c === ' ';
						}))));
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$AutoNumber = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Parser$iconParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($mdgriffith$elm_markup$Mark$Internal$Description$Bullet),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					function (c) {
						return c === '-';
					},
					$mdgriffith$elm_markup$Mark$Internal$Error$Expecting('-'))),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return (c === '-') || (c === ' ');
				})),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$mdgriffith$elm_markup$Mark$Internal$Description$AutoNumber(1)),
				$elm$parser$Parser$Advanced$token(
					A2($elm$parser$Parser$Advanced$Token, '1', $mdgriffith$elm_markup$Mark$Internal$Error$Newline))),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return (c === '.') || (c === ' ');
				}))
		]));
var $mdgriffith$elm_markup$Mark$Internal$Parser$indentedBlocksOrNewlines = F4(
	function (context, seed, item, _v0) {
		var indentation = _v0.a;
		var existing = _v0.b;
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v1) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(existing));
					},
					$elm$parser$Parser$Advanced$end($mdgriffith$elm_markup$Mark$Internal$Error$End)),
					$mdgriffith$elm_markup$Mark$Internal$Parser$skipBlankLineWith(
					$elm$parser$Parser$Advanced$Loop(
						_Utils_Tuple2(indentation, existing))),
					$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$andThen,
							function (newIndent) {
								var _v2 = A3($mdgriffith$elm_markup$Mark$Internal$Description$getParser, context, seed, item);
								var itemSeed = _v2.a;
								var itemParser = _v2.b;
								return A2(
									$elm$parser$Parser$Advanced$withIndent,
									newIndent,
									$elm$parser$Parser$Advanced$oneOf(
										A2(
											$elm$core$List$cons,
											A2(
												$elm$parser$Parser$Advanced$keeper,
												A2(
													$elm$parser$Parser$Advanced$keeper,
													$elm$parser$Parser$Advanced$succeed(
														F2(
															function (iconResult, itemResult) {
																var newIndex = {da: indentation.da, dH: newIndent};
																return $elm$parser$Parser$Advanced$Loop(
																	_Utils_Tuple2(
																		newIndex,
																		A2(
																			$elm$core$List$cons,
																			{
																				de: itemResult,
																				dp: $elm$core$Maybe$Just(iconResult),
																				g: newIndent
																			},
																			existing)));
															})),
													$mdgriffith$elm_markup$Mark$Internal$Parser$iconParser),
												A2($elm$parser$Parser$Advanced$withIndent, newIndent + 4, itemParser)),
											_Utils_eq(newIndent - 4, indentation.dH) ? _List_fromArray(
												[
													A2(
													$elm$parser$Parser$Advanced$map,
													function (foundBlock) {
														var newIndex = {da: indentation.da, dH: indentation.dH};
														return $elm$parser$Parser$Advanced$Loop(
															_Utils_Tuple2(
																newIndex,
																A2(
																	$elm$core$List$cons,
																	{de: foundBlock, dp: $elm$core$Maybe$Nothing, g: indentation.dH},
																	existing)));
													},
													itemParser)
												]) : _List_Nil)));
							},
							A2($mdgriffith$elm_markup$Mark$Internal$Parser$expectIndentation, indentation.da, indentation.dH)),
							$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(existing)))
						]))
				]));
	});
var $mdgriffith$elm_markup$Mark$Internal$Index$Index = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_markup$Mark$Internal$Index$increment = function (_v0) {
	var i = _v0.a;
	var base = _v0.b;
	return A2($mdgriffith$elm_markup$Mark$Internal$Index$Index, i + 1, base);
};
var $mdgriffith$elm_markup$Mark$Internal$Outcome$mapSuccess = F2(
	function (fn, outcome) {
		switch (outcome.$) {
			case 0:
				var s = outcome.a;
				return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
					fn(s));
			case 1:
				var a = outcome.a;
				return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(a);
			default:
				var f = outcome.a;
				return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(f);
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Index$top = function (_v0) {
	var i = _v0.a;
	return i;
};
var $mdgriffith$elm_markup$Mark$reduceRender = F4(
	function (index, getIcon, fn, list) {
		return function (_v4) {
			var i = _v4.a;
			var ic = _v4.b;
			var outcome = _v4.c;
			return _Utils_Tuple3(
				i,
				ic,
				A2($mdgriffith$elm_markup$Mark$Internal$Outcome$mapSuccess, $elm$core$List$reverse, outcome));
		}(
			A3(
				$elm$core$List$foldl,
				F2(
					function (item, _v0) {
						var i = _v0.a;
						var existingIcon = _v0.b;
						var gathered = _v0.c;
						var icon = (!$mdgriffith$elm_markup$Mark$Internal$Index$top(i)) ? getIcon(item) : existingIcon;
						var newItem = function () {
							if (!gathered.$) {
								var remain = gathered.a;
								var _v2 = A3(fn, icon, i, item);
								switch (_v2.$) {
									case 0:
										var newThing = _v2.a;
										return $mdgriffith$elm_markup$Mark$Internal$Outcome$Success(
											A2($elm$core$List$cons, newThing, remain));
									case 1:
										if (!_v2.a.$) {
											var err = _v2.a.a;
											return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
												$mdgriffith$elm_markup$Mark$Internal$Description$Uncertain(err));
										} else {
											var _v3 = _v2.a;
											var err = _v3.a;
											var data = _v3.b;
											return $mdgriffith$elm_markup$Mark$Internal$Outcome$Almost(
												A2(
													$mdgriffith$elm_markup$Mark$Internal$Description$Recovered,
													err,
													A2($elm$core$List$cons, data, remain)));
										}
									default:
										var f = _v2.a;
										return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(f);
								}
							} else {
								var almostOrfailure = gathered;
								return almostOrfailure;
							}
						}();
						return _Utils_Tuple3(
							$mdgriffith$elm_markup$Mark$Internal$Index$increment(i),
							icon,
							newItem);
					}),
				_Utils_Tuple3(
					index,
					$mdgriffith$elm_markup$Mark$Internal$Description$Bullet,
					$mdgriffith$elm_markup$Mark$Internal$Outcome$Success(_List_Nil)),
				list));
	});
var $mdgriffith$elm_markup$Mark$Item = $elm$core$Basics$identity;
var $mdgriffith$elm_markup$Mark$Internal$Index$zero = A2($mdgriffith$elm_markup$Mark$Internal$Index$Index, 0, _List_Nil);
var $mdgriffith$elm_markup$Mark$Internal$Index$dedent = function (_v0) {
	var i = _v0.a;
	var base = _v0.b;
	if (!base.b) {
		return $mdgriffith$elm_markup$Mark$Internal$Index$zero;
	} else {
		var topI = base.a;
		var newBase = base.b;
		return A2($mdgriffith$elm_markup$Mark$Internal$Index$Index, topI, newBase);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Index$indent = function (_v0) {
	var i = _v0.a;
	var base = _v0.b;
	return A2(
		$mdgriffith$elm_markup$Mark$Internal$Index$Index,
		0,
		A2($elm$core$List$cons, i, base));
};
var $mdgriffith$elm_markup$Mark$Internal$Index$toList = function (_v0) {
	var i = _v0.a;
	var base = _v0.b;
	return _Utils_Tuple2(i, base);
};
var $mdgriffith$elm_markup$Mark$renderTreeNodeSmall = F4(
	function (contentBlock, icon, index, _v0) {
		var cursor = _v0;
		var _v1 = A4(
			$mdgriffith$elm_markup$Mark$reduceRender,
			$mdgriffith$elm_markup$Mark$Internal$Index$indent(index),
			$mdgriffith$elm_markup$Mark$getNestedIcon,
			$mdgriffith$elm_markup$Mark$renderTreeNodeSmall(contentBlock),
			cursor.dd);
		var newIndex = _v1.a;
		var childrenIcon = _v1.b;
		var renderedChildren = _v1.c;
		var _v2 = A4(
			$mdgriffith$elm_markup$Mark$reduceRender,
			$mdgriffith$elm_markup$Mark$Internal$Index$dedent(newIndex),
			$elm$core$Basics$always($mdgriffith$elm_markup$Mark$Internal$Description$Bullet),
			F3(
				function (icon_, i, content) {
					return A2($mdgriffith$elm_markup$Mark$Internal$Description$renderBlock, contentBlock, content);
				}),
			cursor.de);
		var renderedContent = _v2.c;
		return A3(
			$mdgriffith$elm_markup$Mark$Internal$Description$mergeWith,
			F2(
				function (content, children) {
					return {
						dd: {
							dp: function () {
								if (!childrenIcon.$) {
									return 0;
								} else {
									return 1;
								}
							}(),
							dv: children
						},
						de: content,
						dr: $mdgriffith$elm_markup$Mark$Internal$Index$toList(index)
					};
				}),
			renderedContent,
			renderedChildren);
	});
var $mdgriffith$elm_markup$Mark$Internal$Id$reseed = function (_v0) {
	var seed = _v0;
	return A2($elm$core$List$cons, 0, seed);
};
var $mdgriffith$elm_markup$Mark$tree = F3(
	function (name, view, contentBlock) {
		var blockExpectation = $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(contentBlock);
		var expectation = A2(
			$mdgriffith$elm_markup$Mark$Internal$Description$ExpectTree,
			$mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation(contentBlock),
			_List_fromArray(
				[
					{
					dd: _List_Nil,
					de: _List_fromArray(
						[blockExpectation]),
					dp: $mdgriffith$elm_markup$Mark$Internal$Description$Bullet
				}
				]));
		return {
			k: function (description) {
				if (description.$ === 5) {
					var details = description.a;
					return function (_v1) {
						var icon = _v1.b;
						var outcome = _v1.c;
						return A2(
							$mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered,
							function (nodes) {
								return view(
									{
										dp: function () {
											if (!icon.$) {
												return 0;
											} else {
												return 1;
											}
										}(),
										dv: nodes
									});
							},
							outcome);
					}(
						A4(
							$mdgriffith$elm_markup$Mark$reduceRender,
							$mdgriffith$elm_markup$Mark$Internal$Index$zero,
							$mdgriffith$elm_markup$Mark$getNestedIcon,
							$mdgriffith$elm_markup$Mark$renderTreeNodeSmall(contentBlock),
							details.dd));
				} else {
					return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
				}
			},
			l: expectation,
			h: $mdgriffith$elm_markup$Mark$Internal$Description$Named(name),
			m: F2(
				function (context, seed) {
					var _v3 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
					var newId = _v3.a;
					var newSeed = _v3.b;
					var reseeded = $mdgriffith$elm_markup$Mark$Internal$Id$reseed(newSeed);
					return _Utils_Tuple2(
						reseeded,
						$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
							function (baseIndent) {
								return A2(
									$elm$parser$Parser$Advanced$keeper,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										A2(
											$elm$parser$Parser$Advanced$ignorer,
											A2(
												$elm$parser$Parser$Advanced$ignorer,
												$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
												$elm$parser$Parser$Advanced$keyword(
													A2(
														$elm$parser$Parser$Advanced$Token,
														name,
														$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingBlockName(name)))),
											$elm$parser$Parser$Advanced$chompWhile(
												function (c) {
													return c === ' ';
												})),
										$mdgriffith$elm_markup$Mark$Internal$Parser$skipBlankLineWith(0)),
									A2(
										$elm$parser$Parser$Advanced$map,
										function (_v4) {
											var pos = _v4.a;
											var result = _v4.b;
											return $mdgriffith$elm_markup$Mark$Internal$Description$DescribeTree(
												{
													dd: A2($mdgriffith$elm_markup$Mark$Internal$Parser$buildTree, baseIndent + 4, result),
													an: expectation,
													L: newId,
													n: pos
												});
										},
										$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
											A2(
												$elm$parser$Parser$Advanced$loop,
												_Utils_Tuple2(
													{da: baseIndent + 4, dH: baseIndent + 4},
													_List_Nil),
												A3($mdgriffith$elm_markup$Mark$Internal$Parser$indentedBlocksOrNewlines, 2, seed, contentBlock)))));
							}));
				})
		};
	});
var $author$project$ElmMarkup$list = A3(
	$mdgriffith$elm_markup$Mark$tree,
	'List',
	$author$project$ElmMarkup$renderList,
	A2(
		$mdgriffith$elm_markup$Mark$map,
		$elm$html$Html$div(_List_Nil),
		$author$project$ElmMarkup$text));
var $mdgriffith$elm_markup$Mark$Internal$Description$ExpectManyOf = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$ManyOf = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_markup$Mark$Internal$Description$blockName = function (_v0) {
	var details = _v0;
	var _v1 = details.h;
	switch (_v1.$) {
		case 1:
			var name = _v1.a;
			return $elm$core$Maybe$Just(name);
		case 0:
			return $elm$core$Maybe$Nothing;
		case 2:
			var name = _v1.a;
			return $elm$core$Maybe$Just(name);
		default:
			var name = _v1.a;
			return $elm$core$Maybe$Just(name);
	}
};
var $mdgriffith$elm_markup$Mark$Internal$Description$getParserNoBar = F3(
	function (context, seed, _v0) {
		var details = _v0;
		var _v1 = details.h;
		switch (_v1.$) {
			case 1:
				var name = _v1.a;
				return A2(details.m, context, seed);
			case 0:
				return A2(details.m, context, seed);
			case 2:
				var name = _v1.a;
				return A2(details.m, context, seed);
			default:
				var name = _v1.a;
				return A2(details.m, context, seed);
		}
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$makeBlocksParser = F2(
	function (blocks, seed) {
		var gatherParsers = F2(
			function (myBlock, details) {
				var _v2 = A3($mdgriffith$elm_markup$Mark$Internal$Description$getParserNoBar, 0, seed, myBlock);
				var parser = _v2.b;
				var _v3 = $mdgriffith$elm_markup$Mark$Internal$Description$blockName(myBlock);
				if (!_v3.$) {
					var name = _v3.a;
					return {
						C: A2($elm$core$List$cons, name, details.C),
						E: A2(
							$elm$core$List$cons,
							A2($elm$parser$Parser$Advanced$map, $elm$core$Result$Ok, parser),
							details.E),
						F: details.F
					};
				} else {
					return {
						C: details.C,
						E: details.E,
						F: A2(
							$elm$core$List$cons,
							A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Result$Ok,
								$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(parser)),
							details.F)
					};
				}
			});
		var children = A3(
			$elm$core$List$foldl,
			gatherParsers,
			{C: _List_Nil, E: _List_Nil, F: _List_Nil},
			blocks);
		var blockParser = A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				var pos = _v0.a;
				var result = _v0.b;
				return A2(
					$elm$core$Result$map,
					function (desc) {
						return _Utils_Tuple2(pos, desc);
					},
					result);
			},
			$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$Advanced$token(
								A2($elm$parser$Parser$Advanced$Token, '|>', $mdgriffith$elm_markup$Mark$Internal$Error$BlockStart))),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return c === ' ';
							})),
					$elm$parser$Parser$Advanced$oneOf(
						_Utils_ap(
							$elm$core$List$reverse(children.E),
							_List_fromArray(
								[
									$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
									function (indentation) {
										return A2(
											$elm$parser$Parser$Advanced$keeper,
											$elm$parser$Parser$Advanced$succeed(
												function (_v1) {
													var pos = _v1.a;
													var foundWord = _v1.b;
													return $elm$core$Result$Err(
														_Utils_Tuple2(
															pos,
															$mdgriffith$elm_markup$Mark$Internal$Error$UnknownBlock(children.C)));
												}),
											A2(
												$elm$parser$Parser$Advanced$ignorer,
												A2(
													$elm$parser$Parser$Advanced$ignorer,
													$mdgriffith$elm_markup$Mark$Internal$Parser$withRange($mdgriffith$elm_markup$Mark$Internal$Parser$word),
													$mdgriffith$elm_markup$Mark$Internal$Parser$newline),
												A2(
													$elm$parser$Parser$Advanced$loop,
													'',
													$mdgriffith$elm_markup$Mark$Internal$Parser$raggedIndentedStringAbove(indentation))));
									})
								]))))));
		return $elm$parser$Parser$Advanced$oneOf(
			A2(
				$elm$core$List$cons,
				blockParser,
				$elm$core$List$reverse(children.F)));
	});
var $mdgriffith$elm_markup$Mark$Internal$Parser$blocksOrNewlines = F3(
	function (indentation, blocks, cursor) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(cursor.f));
					},
					$elm$parser$Parser$Advanced$end($mdgriffith$elm_markup$Mark$Internal$Error$End)),
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Loop(
							{f: cursor.f, cC: true, cS: cursor.cS})),
					$mdgriffith$elm_markup$Mark$Internal$Parser$newlineWith('empty newline')),
					(!cursor.cC) ? A2(
					$elm$parser$Parser$Advanced$map,
					function (foundBlock) {
						var _v1 = $mdgriffith$elm_markup$Mark$Internal$Id$step(cursor.cS);
						var newSeed = _v1.b;
						return $elm$parser$Parser$Advanced$Loop(
							{
								f: A2($elm$core$List$cons, foundBlock, cursor.f),
								cC: true,
								cS: newSeed
							});
					},
					A2($mdgriffith$elm_markup$Mark$Internal$Parser$makeBlocksParser, blocks, cursor.cS)) : $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(
									function (foundBlock) {
										var _v2 = $mdgriffith$elm_markup$Mark$Internal$Id$step(cursor.cS);
										var newSeed = _v2.b;
										return $elm$parser$Parser$Advanced$Loop(
											{
												f: A2($elm$core$List$cons, foundBlock, cursor.f),
												cC: true,
												cS: newSeed
											});
									}),
								$elm$parser$Parser$Advanced$token(
									A2(
										$elm$parser$Parser$Advanced$Token,
										A2($elm$core$String$repeat, indentation, ' '),
										$mdgriffith$elm_markup$Mark$Internal$Error$ExpectingIndentation(indentation)))),
							A2($mdgriffith$elm_markup$Mark$Internal$Parser$makeBlocksParser, blocks, cursor.cS)),
							A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Loop(
										{f: cursor.f, cC: true, cS: cursor.cS})),
								$elm$parser$Parser$Advanced$backtrackable(
									$elm$parser$Parser$Advanced$chompWhile(
										function (c) {
											return c === ' ';
										}))),
							$elm$parser$Parser$Advanced$backtrackable($mdgriffith$elm_markup$Mark$Internal$Parser$newline)),
							$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(cursor.f)))
						])),
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Loop(
								{f: cursor.f, cC: true, cS: cursor.cS})),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return c === ' ';
							})),
					$mdgriffith$elm_markup$Mark$Internal$Parser$newlineWith('ws-line'))
				]));
	});
var $mdgriffith$elm_markup$Mark$Internal$Description$resultToFound = function (result) {
	if (!result.$) {
		var _v1 = result.a;
		var range = _v1.a;
		var desc = _v1.b;
		return A2($mdgriffith$elm_markup$Mark$Internal$Description$Found, range, desc);
	} else {
		var _v2 = result.a;
		var range = _v2.a;
		var prob = _v2.b;
		return $mdgriffith$elm_markup$Mark$Internal$Description$Unexpected(
			{cG: prob, n: range});
	}
};
var $mdgriffith$elm_markup$Mark$manyOf = function (blocks) {
	var expectations = A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$Internal$Description$getBlockExpectation, blocks);
	return {
		k: function (desc) {
			var matchBlock = F3(
				function (description, blck, found) {
					if (found.$ === 2) {
						var _v4 = A2($mdgriffith$elm_markup$Mark$Internal$Description$renderBlock, blck, description);
						if (_v4.$ === 2) {
							return found;
						} else {
							var otherwise = _v4;
							return otherwise;
						}
					} else {
						return found;
					}
				});
			var getRendered = F4(
				function (id, choices, found, _v2) {
					var existingResult = _v2.a;
					var index = _v2.b;
					if (found.$ === 1) {
						var unexpected = found.a;
						return _Utils_Tuple2(
							$mdgriffith$elm_markup$Mark$Internal$Description$uncertain(unexpected),
							index + 1);
					} else {
						var range = found.a;
						var child = found.b;
						return _Utils_Tuple2(
							A3(
								$mdgriffith$elm_markup$Mark$Internal$Description$mergeWith,
								$elm$core$List$cons,
								A3(
									$elm$core$List$foldl,
									matchBlock(child),
									$mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0),
									blocks),
								existingResult),
							index + 1);
					}
				});
			if (desc.$ === 3) {
				var many = desc.a;
				return A2(
					$mdgriffith$elm_markup$Mark$Internal$Description$mapSuccessAndRecovered,
					$elm$core$List$reverse,
					A3(
						$elm$core$List$foldl,
						A2(getRendered, many.L, many.b8),
						_Utils_Tuple2(
							$mdgriffith$elm_markup$Mark$Internal$Outcome$Success(_List_Nil),
							0),
						many.dd).a);
			} else {
				return $mdgriffith$elm_markup$Mark$Internal$Outcome$Failure(0);
			}
		},
		l: $mdgriffith$elm_markup$Mark$Internal$Description$ExpectManyOf(expectations),
		h: $mdgriffith$elm_markup$Mark$Internal$Description$Value,
		m: F2(
			function (context, seed) {
				var _v5 = $mdgriffith$elm_markup$Mark$Internal$Id$step(seed);
				var parentId = _v5.a;
				var newSeed = _v5.b;
				var _v6 = $mdgriffith$elm_markup$Mark$Internal$Id$step(newSeed);
				var childStart = _v6.b;
				var reseeded = $mdgriffith$elm_markup$Mark$Internal$Id$reseed(childStart);
				return _Utils_Tuple2(
					reseeded,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							function (_v7) {
								var range = _v7.a;
								var results = _v7.b;
								return $mdgriffith$elm_markup$Mark$Internal$Description$ManyOf(
									{
										dd: A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$Internal$Description$resultToFound, results),
										b8: expectations,
										L: parentId,
										n: range
									});
							}),
						$mdgriffith$elm_markup$Mark$Internal$Parser$withRange(
							$mdgriffith$elm_markup$Mark$Internal$Parser$withIndent(
								function (indentation) {
									return A2(
										$elm$parser$Parser$Advanced$loop,
										{f: _List_Nil, cC: false, cS: childStart},
										A2($mdgriffith$elm_markup$Mark$Internal$Parser$blocksOrNewlines, indentation, blocks));
								}))));
			})
	};
};
var $author$project$ElmMarkup$metadataBlock = A3(
	$mdgriffith$elm_markup$Mark$block,
	'Metadata',
	function (str) {
		return str;
	},
	$mdgriffith$elm_markup$Mark$string);
var $elm$html$Html$p = _VirtualDom_node('p');
var $author$project$ElmMarkup$document = A2(
	$mdgriffith$elm_markup$Mark$documentWith,
	F2(
		function (metadata, body) {
			return A2($elm$html$Html$article, _List_Nil, body);
		}),
	{
		db: $mdgriffith$elm_markup$Mark$manyOf(
			_List_fromArray(
				[
					$author$project$ElmMarkup$header1,
					$author$project$ElmMarkup$header2,
					$author$project$ElmMarkup$header3,
					$author$project$ElmMarkup$image,
					$author$project$ElmMarkup$list,
					$author$project$ElmMarkup$code,
					A2(
					$mdgriffith$elm_markup$Mark$map,
					$elm$html$Html$p(_List_Nil),
					$author$project$ElmMarkup$text)
				])),
		dy: $author$project$ElmMarkup$metadataBlock
	});
var $mdgriffith$elm_markup$Mark$Error$formatErrorString = function (error) {
	return $elm$core$String$toUpper(error.aT) + ('\n\n' + A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$map,
			function ($) {
				return $.dS;
			},
			error.ae)));
};
var $mdgriffith$elm_markup$Mark$Error$toString = function (error) {
	if (!error.$) {
		var details = error.a;
		return $mdgriffith$elm_markup$Mark$Error$formatErrorString(
			{ae: details.ae, aT: details.aT});
	} else {
		var global = error.a;
		return $mdgriffith$elm_markup$Mark$Error$formatErrorString(
			{ae: global.ae, aT: global.aT});
	}
};
var $author$project$ElmMarkup$markupToHtml = function (markup) {
	var _v0 = A2($mdgriffith$elm_markup$Mark$compile, $author$project$ElmMarkup$document, markup);
	switch (_v0.$) {
		case 0:
			var html = _v0.a;
			return $elm$core$Result$Ok(
				_List_fromArray(
					[html]));
		case 1:
			var result = _v0.a.dK;
			var errors = _v0.a.dl;
			return $elm$core$Result$Err(
				A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$Error$toString, errors)));
		default:
			var errors = _v0.a;
			return $elm$core$Result$Err(
				A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $mdgriffith$elm_markup$Mark$Error$toString, errors)));
	}
};
var $author$project$Post$main = A2(
	$author$project$Elmstatic$layout,
	$author$project$Elmstatic$decodePost,
	function (content) {
		var _v0 = $author$project$ElmMarkup$markupToHtml(content.de);
		if (!_v0.$) {
			var html = _v0.a;
			return A2(
				$author$project$Page$layout,
				content.aT,
				$elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$author$project$Post$metadataHtml(content),
						html)));
		} else {
			var error = _v0.a;
			return $elm$core$Result$Err(error);
		}
	});
var $author$project$Elmstatic$Page = F4(
	function (content, format, siteTitle, title) {
		return {de: content, cj: format, bs: siteTitle, aT: title};
	});
var $author$project$Elmstatic$decodePage = A5(
	$elm$json$Json$Decode$map4,
	$author$project$Elmstatic$Page,
	$author$project$Elmstatic$decodeContent,
	$author$project$Elmstatic$decodeFormat,
	A2($elm$json$Json$Decode$field, 'siteTitle', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
var $author$project$Page$main = A2(
	$author$project$Elmstatic$layout,
	$author$project$Elmstatic$decodePage,
	function (content) {
		return A2(
			$author$project$Page$layout,
			content.aT,
			$author$project$ElmMarkup$markupToHtml(content.de));
	});
_Platform_export({'Page':{'init':$author$project$Page$main($elm$json$Json$Decode$value)(0)},'Tag':{'init':$author$project$Tag$main($elm$json$Json$Decode$value)(0)},'Posts':{'init':$author$project$Posts$main($elm$json$Json$Decode$value)(0)},'Post':{'init':$author$project$Post$main($elm$json$Json$Decode$value)(0)}});}(this));
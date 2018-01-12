@title[Introduction]

# JavaScript

#### Programming the web

---

@title[Why JavaScript?]

#### Why use JavaScript?

- HTML and CSS are fine for making web pages that sit quiet and look pretty
- JavaScript is the magic behind any interactive web page
- Respond to user actions
- Load additional data and render it

---

@title[Expressions Intro]

# Expressions
## The life blood of JavaScript

+++

## Expressions

- Any valid unit of code that resolves to a single value
- That is to say... anything! (as long as it is just one thing)

+++

## Expression Types

- Number
- String
- Boolean
- Array\*
- Object
- Function

---

@title[Numbers]

## Numbers

- Any numeric value
- Can be an integer or floating point
- Can be very large (1.8e+308)
- Or very small (2.2e-308)
- Used for indexing and math

+++

## Numbers

Examples:

```javascript
0
1.3
-100
99999999999999999
```
---

@title[Strings]

## Strings

- A string of text
- Can be empty `''` or an encyclopedia
- Used to store and display text
- Must be delimited by quotation marks

+++

## String Syntax

Can use single or double quotes

```javascript
'Hello'

"This is ok too"
```

+++

## Escaping

If you need to put a quote inside your string, escape it with
`\'` or `\"`

```javascript
'I\'m gung ho about escaping'
```

+++

## Escaping

You can use `\n` to add line breaks to your strings.

```javascript
'... a short skirt and a loooooong\n\n\n\n\n...jacket!'
```

---

@title[The console]

## The console

JavaScript comes with something called a REPL or

Read Eval Print Loop

Lets us write in one line of a program at a time

Evaluates and prints any expression you type in

+++

## Opening the console

- Open Chrome
- On windows: ctrl + shift + j
- On mac: cmd + opt + j

---

@title[Activity: Escaping Strings]

## Activity

`\'` `\"` `\n`

Make the console log out the following strings (you'll need to escape some characters)

- I'm a teapot
- "Short and stout", don't you know?

Do the following poem in one string (with newlines)

twas the night before hackmas<br>
and all through the halls<br>
sat coders and hackers<br>
drinking red bull and bawls<br>

---

@title[More Complex Expressions]

### Slightly More Complex Expressions

We can combine two expressions together with operators

Let's look at the `+` operator

+++

## Some More Operators

- + Adds two numbers together
- + Concatenates two strings together
- - Subtracts two numbers
- * Multiplies two numbers
- / Divides two numbers
- % Remainder after dividing two numbers

---

@title[Statements]

# Statements

+++

## Statements

If expressions are the blood of JavaScript, statements are the heart beat

Values are nice to have, but they don't do anything by themselves

A piece of code that performs an action is called a statement. We usually put one statement per line.

---

@title[Variables: Intro]

## Variables

- Store the value of an expression
- It's a container, not the value itself
- Can have any type, and can change types

+++

## Declaring Variables

```javascript
var myNiceVariable;
```
- `var` keyword
- name
- semicolon: optional

#### What does this do?

+++

## Defining Variables

```javascript
myNiceVariable = 'a nice expression';
```

What does = do?
- evaluates expression on right hand side
- copies the resulting value into the left hand side

+++

## Both at once

```javascript
var otherVar = 42;
```

We most commonly declare and define variables at the same time.

---

@title[Variable Names]

## Variable Names

Variables and functions should have short, descriptive names. It's more important that they're descriptive than that they're short. Typically, we spell out a multiword name using camelCase, or capitalizing each word following the first.

<div class="left">
#### Good Variable Names
- input
- message
- accountNumber
- finalOutput
</div>

<div class="right">
#### Not So Good Names
- variable
- a123
- thing
- hardtoreadvariable
</div>

+++

## One letter variable names

These are ok sometimes, when the variable actually refers to something like an algebraic variable, or is a counter for a loop. That is to say there is no actual word that would better describe it.

```javascript
function sum (a, b) {
	return a + b;
}
```

---

@title[Using Variables]

## Using Variables

- once defined a variable can be used in expressions
- the value stored in the variable is substituted in when the expression is evaluated

Example:
```javascript
var apples = 10;
var bananas = 15;
var cherries = 3;

var total = apples + bananas + cherries;
```

+++

You can even use the same variable on the left hand and right hand sides of the = operator

```javascript
var x = 0;
x = x + 1;
```

---

@title[Expressions vs. Statements]

## Expressions vs. Statements

#### Expressions

- produce a value
- can be combined with other expressions
- cannot be a statement

#### Statements

- Perform an action
- Do not produce a value
- Can be an expression
- Cannot be used as part of an expression

+++

## So you can't do stuff like this

```javascript
var x = var y + 5;
```

---

@title[console.log]

## console.log

console.log is a function we can call to print something to the console. It can print any kind of expression

```javascript
console.log('anything can go in here');
```

+++

## Function call syntax
Parentheses immediately following an expression invokes the expression as a function

We call this "calling" the function, passing whatever we want to print as an "argument" inside the parentheses

```javascript
functionName('argument');
```

+++

## Activity

Print some variables or expressions using console.log

---

@title[Functions]

# Functions

+++

## Functions

- Named block of code that can be called many times
- Code in function body doesn't execute right away
- Actually, it doesn't execute at all unless the function is called

+++

## Function Syntax

<div class="left">
```javascript
function name () {
	// code to execute
}
```
</div>

<div class="right">
- `function` keyword
- name
- () signature
- {...} function body
</div>

Function name must be a valid identifier (same rules as variable names)

+++

## Parameters

```javascript
function printMe (param1, param2, param3) {
	console.log(param1, param2, param3)
}
```

Parameters must also be valid identifiers

Parameters are the names by which we will refer to the arguments the caller passed to the function, inside the function body itself

We call the parentheses part the signature because it tells us what the function is expecting to come in

+++

## return

Functions can also return something, meaning when someone calls the function, the function expression will evaluate to whatever the function returns.

```javascript
function add (a, b) {
	return a + b;
}

add(2, 3);
```

+++

## return

Return also has the effect of immediately halting execution of the function body

```javascript
function hello () {
	return;
	console.log('hello!'); // this won't execute
}
```

---

@title[Parameters vs. Arguments]

## Parameters vs. Arguments

The names we refer to what comes in by are parameters
The stuff that goes in when we call it are arguments

#### Is this pedantic?

No! Arguments and parameters exist in fundamentally separate universes

+++

#### Consider

```javascript
function a () {
	var secretName = 'shhh';
	b(secretName);
}

function b (paramName) {
	console.log(secretName);
	//console.log(paramName);
}
```



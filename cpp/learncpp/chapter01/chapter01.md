# C++ Basics

## Comments

- At the library, program, or function level, use comments to describe what.
- Inside the library, program, or function, use comments to describe how.
- At the statement level, use comments to describe why.

## Initialization

Initialize your objects upon creation

### Copy Initialization

Assigning values using `=` operator.

### Direct Initialization

Using parenthesis, should initialize single data types.

### Value Initialization

Just using empty braces.

### List Initialization

> Preferred way of initializing variables

Using curly braces, called uniform/list/brace initialization.

```cpp
int width {5};
```

This is a more consistent way of initialization. It also narrows conversions, so `int width {2.3}` will throw an error.

## Initialized unused Variables

This is usually not intended, but when it is, you can specify to the compiler about this using `[[maybe_unused]]` attribute from C++17 and furthur.

```cpp
[[maybe unused]] double pi = 3.141597;
```

## Whitespace

Quoted text separated by nothing but whitespace (spaces, tabs, or newlines) will be concatenated

```cpp
std::cout << "Hello "
     "world!"; // prints "Hello world!"
```

## Operators

Both `operator=` and `operator<<` (when used to output values to the console) return their left operand. Thus, `x = 5` returns x, and `std::cout << 5` returns `std::cout`. This is done so that these operators can be chained.

## Developing Approach

New programmers often try to write an entire program all at once, and then get overwhelmed when it produces a lot of errors. A better strategy is to add one piece at a time, make sure it compiles, and test it. Then when you’re sure it’s working, move on to the next piece.

The end result is that our initial solutions often aren’t well structured, robust (error-proof), readable, or concise. So once your program is working, your job really isn’t done (unless the program is a one-off/throwaway). The next step is to cleanup your code. This involves things like: removing (or commenting out) temporary/debugging code, adding comments, handling error cases, formatting your code, and ensuring best practices are followed. And even then, your program may not be as simple as it could be -- perhaps there is redundant logic that can be consolidated, or multiple statements that can be combined, or variables that aren’t needed, or a thousand other little things that could be simplified. Too often new programmers focus on optimizing for performance when they should be optimizing for maintainability.

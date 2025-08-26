# C++ as federation of languages

- C
- Object Oriented
- Template
- STL

## Prefer compiler to preprocessor

- Use `const`, `enum` and `inline` instead of `#define`
- Use of const pointers and const what the pointer is pointing to.

## Declaration of constants within a class

Usually, C++ requires that you provide a definition for anything you use, but class-specific constants that are static and of integral type (e.g., integers, chars, bools) are an exception.

Basically

```cpp
class A {
static const int a = 12;
};
```

If its address isn't used/required, then it remains not an ODR value, and this remains a declaration.

## Enum hack

Many a times, the above declaration won't allow initialization as well, which would make initialization in a seperate definition file necessary. But also we might want to have a fixed const during compilation, for instance to be used in the size of an array.

```cpp
class Game {
  enum {NumTurns = 5}; // ~ static const int NumTurns
  int scores[NumTurns];
}
```

Declaring a const value (int) as enum makes it not addressable as well (no memory allocation).


## inline instead of #define macros

Macros have the efficiency of skipping extra function calls, but that can be done using inline:

```cpp
#define CALL_WITH_MAX(a, b) f((a) > (b) ? (a) : (b))

// replaced by

template<typename T>
inline void callWithMax(const T& a, const T& b) {
  f(a > b ? a : b);
}
```

Because of this, `callWithMax` is just a function, and follow scopes. Macros/`#define` don't follow scopes.

## const

A very versatile and use whenever you can constraint.

```cpp
// this has the data as constant
const char* p = "dataConstant";
// this has the pointer as constant
char* const p = "pointerConstant";
// this has the pointer AND its data as constants
const char* const p = "bothConstants";
char const* const p = "bothConstants";
```

Read it left to right `p is a const pointer to a const chars`.

One of the fundamental ways to improve a C++ program’s performance is to pass objects by reference-to-const.

## Method constness

Compilers look for bitwise constness, aka a method shouldn't modify any of the class's variables to be a valid const.
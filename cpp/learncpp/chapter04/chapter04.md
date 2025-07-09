# Fundamental Types

Many of the types defined in newer versions of C++ (e.g. std::nullptr_t) use a _t suffix. This suffix means “type”, and it’s a common nomenclature applied to modern types. But this is not consistent.

## void as incomplete type

An incomplete type is a type that has been declared but not yet defined. The compiler doesn't have enough clue about how much memory to allocate for this type of objects.

## Type sizes

The C++ standard does not define the exact size (in bits) for any of the fundamental types. char must be 1 byte, but no assumption is made that a byte is 8 bits. Integral types have a minimum size (in bits), but could be larger.

If you want to assume that a type has a certain size (e.g. that an int is at least 4 bytes), you can use static_assert to have the compiler fail a build if it is compiled on an architecture where this assumption is not true.

When no negative numbers are required, unsigned integers are well-suited for networking and systems with little memory, because unsigned integers can store more positive numbers without taking up extra memory.

## Why not use unsigned

First, with signed values, it takes a little work to accidentally overflow the top or bottom of the range because those values are far from 0. With unsigned numbers, it is much easier to overflow the bottom of the range, because the bottom of the range is 0, which is close to where the majority of our values are.

Another common unwanted wrap-around happens when an unsigned integer is repeatedly decremented by 1, until it tries to decrement to a negative number.

```cpp
signed int s { -1 };
unsigned int u { 1 };
if (s < u); // -1 is implicitly converted to 4294967295, and 4294967295 < 1 is false
```

> Favor signed numbers over unsigned numbers for holding quantities (even quantities that should be non-negative) and mathematical operations. Avoid mixing signed and unsigned numbers.

> Unsigned numbers are preferred when dealing with bit manipulation. They are also useful when well-defined wrap-around behavior is required (useful in some algorithms like encryption and random number generation).

## C++ featured integers

To address the issue of variable sizes, C99 defined a set of fixed-width integers (in the stdint.h header) that are guaranteed to be the same size on any architecture, of the format `std::int8_t`, `std::uint8_t`, `std::int16_t` and so on.

`std:int_fast#_t` for the fastest (most compatible) type that are at least of width `#` bits and `std::int_least#_t` would give the smallest integer type with width at least `#` bits.

> The 8-bit fixed-width integer types are often treated like chars instead of integer values (and this may vary per system). Prefer the 16-bit fixed integral types for most cases.

The return value of `sizeof` is `std::size_t`, used to represent byte size or lengths of objects.
This is defined under `#include <cstddef>`. This is compiler dependant, but is guaranteed to be unsigned and at least 16b.
Any object whose size doesn't come under the limit set by the range of `size_t` is not a valid object.

## Precision and Approximations

Floating point numbers often have small rounding errors, even when the number has fewer significant digits than the precision.
This mainly happens due to the conversion between binary and decimal values, which leads to truncation error.

Using `#include<iomanip>`, we get

```cpp
std::cout << std::setprecision(17);
std::cout << 3.33333333333333333333333333333333333333f <<'\n'; // f suffix means float -> 3.3333332538604736
std::cout << 3.33333333333333333333333333333333333333 << '\n'; // no suffix means double -> 3.3333333333333335
```

> Favor double over float unless space is at a premium, as the lack of precision in a float will often lead to inaccuracies.

## Booleans

`std::cin >> std::boolalpha` accepts `true` and `false` as strings, case sensitive.

> Whenever you see C++ syntax (excluding the preprocessor) that makes use of angled brackets (<>), the thing between the angled brackets will most likely be a type. This is typically how C++ deals with code that need a parameterized type.

> Don’t use const when returning by value.

## Macros

Don't use preprocessor substitution text instead of named constants.
- Macros don't follow scoping rules
- Harder to debug using macros
- Macro substitution behaves differently than other C++ capabilities

> Prefer constant variables over object-like macros with substitution text

## Type Qualifiers

Qualifiers are keywords that change how a type behaves, and include only `const` and `volatile`. They are referrred to as cv-qualifiers.

`volatile` is used to tell the compiler that the object can change it's value at anytime, disabling certain optimizations.

## Type suffixes

Added to the end of constants like `5UL` or `"Hi"s`. In most cases suffixes are not needed to be specified explicitly, except in the case of `f`. `5.0` is by default type double, `5.0f` explicitly defines it as a float.

## Number systems

To use an octal literal, prefix with `0`, e.g. `012` is actually `10`

> Consider a 32-bit integer with binary value 0011 1010 0111 1111 1001 1000 0010 0110. Because of the length and repetition of digits, that’s not easy to read. In hexadecimal, this same value would be: 3A7F 9826, which is much more concise. For this reason, hexadecimal values are often used to represent memory addresses or raw data in memory (whose type isn’t known).

Quotation marks can be used as digits seperator for ease of viewing.

Can output numbers in dec, oct or hex using `std::hex`, `std::oct`, `std::dec` as i/o manipulators.

`std::bitset` can be initialized with an integral value, and the number of bits must be a compile time constant.

# Optimizations

Modern C++ compilers are able to evaluate some expressions at compile-time. When this occurs, the compiler can replace the expression with the result of the expression.

> The ability for C++ to perform compile-time evaluation is one of the most important and evolving areas of modern C++.


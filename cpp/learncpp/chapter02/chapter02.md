# Functions

[CPPReference of Preprocessing steps]: https://en.cppreference.com/w/cpp/language/translation_phases

A function with non-void return type must return something,
only `main` returns 0 implicitly.

In modern C++, the best practice is that local variables inside the function body should be defined as close to their first use as reasonable.

Temporary objects have no scope at all (this makes sense, since scope is a property of an identifier, and temporary objects have no identifier).
```cpp
	std::cout << getValueFromUser() << '\n'; // where does the returned value get stored?
```

But where is the value that is copied back to the caller stored? We haven’t defined any variables in main(). The answer is that the return value is stored in a temporary object. This temporary object is then passed to std::cout to be printed.
Modern C++ (since C++17), this creation of temporary variable is skipped in this case and the return value of the function is directly used.

## When to make a function

- Groups of statements that appear more than once in a program should generally be made into a function.
- Code that has a well-defined set of inputs and outputs is a good candidate for a function, (particularly if it is complicated). For example, if we have a list of items that we want to sort, the code to do the sorting would make a great function, even if it’s only done once.
- A function should generally perform one (and only one) task.
- When a function becomes too long, too complicated, or hard to understand, it can be split into multiple sub-functions. This is called refactoring.
- New programmers often combine calculating a value and printing the calculated value into a single function. However, this violates the “one task” rule of thumb for functions. A function that calculates a value should return the value to the caller and let the caller decide what to do with the calculated value (such as call another function to print the value).

## Forward Declarations

- Forward declarations can also be used to define our functions in an order-agnostic manner. This allows us to define functions in whatever order maximizes organization (e.g. by clustering related functions together) or reader understanding.
- Forward declarations are used to tell the compiler about the existence of some function that has been defined in a different code file.
- Less often, there are times when we have two functions that call each other. Reordering isn’t possible in this case either.

> Forward declarations can also be used with other identifiers in C++, such as variables and types.

## Multifile builds

Compiler compiles each source code file individually and forgets what it has seen. The linker can link the functions across different file objects.

C++ is designed so that each source file can be compiled independently, with no knowledge of what is in other files. Therefore, the order in which files are actually compiled should not be relevant.

# Preprocessing

[CPPReference of Preprocessing steps]

Object-like macros with substitution text are now typically only seen in legacy code, and we recommend avoiding them.

```cpp
#define USE_YEN
```
Macros like the above is acceptable use of object-like macros without substitution text.
This is typically used with `#ifdef`, which checks if the above `#define USE_YEN` has been used.

```cpp
void foo() {
	#define MY_NAME "is abd"
}
```

Scope of preprocessing directives are not defined by C++ scopes,
Even though it looks like #define MY_NAME “Alex” is defined inside function foo, the preprocessor doesn’t understand C++ concepts like functions. Therefore, this program behaves identically to one where #define MY_NAME “Alex” was defined either before or immediately after function foo. To avoid confusion, you’ll generally want to #define identifiers outside of functions.

Directives are only valid from the point of definition to the end of the file in which they are defined. Directives defined in one file do not have any impact on other files (unless they are #included into another file).

# Header files

Do not put function and variable definitions in your header files (for now).
Defining either of these in a header file will likely result in a violation of the one-definition rule (ODR) if that header is then #included into more than one source (.cpp) file.

In C++, it is a best practice for code files to #include their paired header file (if one exists). In the example above, add.cpp includes add.h.

If your project doesn’t compile unless you #include .cpp files, that means those .cpp files are not being compiled as part of your project. Add them to your project or command line so they get compiled.

Each file should explicitly #include all of the header files it needs to compile. Do not rely on headers included transitively from other headers.

A header file should #include any other headers containing functionality it needs. Such a header should compile successfully when #included into a .cpp file by itself.

Prefer putting documentation on what something does or how to use it in the header. It’s more likely to be seen there. Documentation describing how something works should remain in the source files.

---

You have faced the following issue before:

```cpp
// square.h
#ifndef SQUARE_H
#define SQUARE_H

int getSquareSides() {
    return 4;
}
int getSquarePerimeter(int sideLength); // forward declaration for getSquarePerimeter

#endif
```

```cpp
// square.cpp
#include "square.h"  // square.h is included once here

int getSquarePerimeter(int sideLength) {
    return sideLength * getSquareSides();
}
```

```cpp
// main.cpp
#include "square.h" // square.h is also included once here
#include <iostream>

int main() {
    std::cout << "a square has " << getSquareSides() << " sides\n";
    std::cout << "a square of length 5 has perimeter length " << getSquarePerimeter(5) << '\n';
    return 0;
}
```

Compiling this using `g++ main.cpp square.cpp` will yield a linker multiple definitions error because after compilation, both square.cpp and main.cpp would have the .h files definitions of getSquareSides, which the linker will consider together and as multiple definitions! Best way to avoid this is to remove definitions from the header file which is included in multiple files in the first place, because forward declarations are only used by the compiler, and won't be copied in the presence of the linker.

---

You can use `#pragma once` directive (ubiquitous to all compilers pragmas) instead of header guards using `#ifndef`

Duplicate declarations are fine -- but even if your header file is composed of all declarations (no definitions) it’s still a best practice to include header guards.

# How to write a program

## Planning out

### Define your goal

The program's purpose should be stateable in a sentence or two, like:
- Allow the user to organize a list of names and associated phone numbers.
- Generate randomized dungeons that will produce interesting looking caverns.
- Generate a list of stock recommendations for stocks that have high dividends.
- Model how long it takes for a ball dropped off a tower to hit the ground.

### Define requirements

Answer the "what" of your program, from how your solution needs to abide by (timeline, space, budget, memory...) to capabilities your program must have to meet the needs like:

- Phone numbers should be saved, so they can be recalled later.
- The randomized dungeon should always contain a way to get from the entrance to an exit.
- The stock recommendations should leverage historical pricing data.
- The user should be able to enter the height of the tower.
- We need a testable version within 7 days.
- The program should produce results within 10 seconds of the user submitting their request.
- The program should crash in less than 0.1% of user sessions.

### Define tools, targets and backup

You are writing a program for your own use, alone, on your own system, using an IDE you downloaded, and your code is probably not used by anybody but you. This makes things easy.

More formal questions would be:

- Defining what target architecture and/or OS your program will run on.
- Determining what set of tools you will be using.
- Determining whether you will write your program alone or as part of a team.
- Defining your testing/feedback/release strategy.
- Determining how you will back up your code.

### Break hard problems into chunks

By continuously splitting complex tasks into simpler ones, you can eventually get to a point where each individual task is manageable, if not trivial.
The task hierarchies are extremely useful in programming, because once you have a task hierarchy, you have essentially defined the structure of your overall program.

Clean the house

    Vacuum the carpets
    Clean the bathrooms
        Scrub the toilet (yuck!)
        Wash the sink
    Clean the kitchen
        Clear the countertops
        Clean the countertops
        Scrub the sink
        Take out the trash

### Figure out sequence of events

Now that your program has a structure, it’s time to determine how to link all the tasks together. The first step is to determine the sequence of events that will be performed.

- Bedroom things
- Bathroom things
- Breakfast things
- Transportation things

## Implementation

## Outline main function

```cpp
int main()
{
//    doBedroomThings();
//    doBathroomThings();
//    doBreakfastThings();
//    doTransportationThings();
    return 0;
}
```

Commenting out the function calls until you’re ready to implement the function definitions is one way to address this (and the way we’ll show here). Alternatively, you can stub out your functions (create placeholder functions with empty bodies) so your program will compile.

### Implement each function

- Define the function prototype (inputs and outputs)
- Write the function
- Test the function

If your functions are granular enough, each function should be fairly simple and straightforward. If a given function still seems overly-complex to implement, perhaps it needs to be broken down into subfunctions that can be more easily implemented or it’s possible you did something in the wrong order, and need to revisit your sequencing of events

## Word of Advice

- Keeping programs simple to start
- Adding features overtime
- Focussing on one area at a time
- Test each code as you go
- Don't invest in perfecting early code
- Optimize for maintainability not for performance

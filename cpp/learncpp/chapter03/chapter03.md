# Strategy for debugging

- Reproducing steps of issue
- Homing in

To Home in, we can use the following:

- Commenting out code
  When you want to revert back, compare with diff of previous version of code

- Validating code flow
  Can utilise cerr printing out function names at the start of each call

> std::cerr is unbuffered, which means anything you send to it will output immediately, ensuring all debug outputs to appear asap

- Printing values
  rudimentary, functional and requires a lot of wasteful code change
  C++ defines `std::clog` but it writes to `cerr` by default.

## Debugger

### Integrated Debugger

Much easier to use than it's terminal version.
- Run to Cursor
  If you run to cursor to a location that doesn’t execute, run to cursor will simply run your program until termination.
- Jump to Cursor
  To skip running the intermediate steps and directly jump to the cursor location, essentially setting the next statement. For VSCode, use this functionality by putting a breakpoint at line number `l` and executing `-exec jump <l>` in the debug console.
- Watch
  Using watches is the best way to watch the value of a variable change over time as you step through your program.
- Variables
  To see the current stack's local variables
- Call Stack

> Ideally, a function should be less than ten lines. Functions that are less than five lines are even better.

> When making changes to your code, make behavioral changes OR structural changes, and then retest for correctness. Making behavioral and structural changes at the same time tends to lead to more errors as well as errors that are harder to find.

## Defensive Programming

The best way to do this is to program a little bit at a time, and then test your code and make sure it works.

### Constraints

Constraints-based techniques involve the addition of some extra code (that can be compiled out in a non-debug build, if desired) to check that some set of assumptions or expectations are not violated.

## Shotgunning by Static Analysis

Using linters would point out common issues.

- clang-tidy
- cpplint
- cppcheck (already integrated into Code::Blocks)
- SonarLint

I have installed clang-tidy cause well, clang tools; and it's integrated by default with VSCode. Just Run `Run Code Analysis on Active File`. You can create a `.clang-tidy` configuration file as well to specify the specifications for the linting.

# Setting up a Project

## Creation of configuration files for VSCode

- `tasks.json`: Build configurations for VSCode, which you can add using _Tasks: Configure Tasks`
- `launch.json`: For debugging information
- `c_cpp_properties.json`: For giving details regarding Intellisense

## Tasks

Include at least two configurations, `debug` and `release`.
Check out the configurations itself. `clang` as the compiler can also be used.

- Deactivate compiler extensions using `-pendantic-errors` in gcc or `-pedantic` in clang.
> Activate the VSCode option to include final line in settings
- Include debugging options by activating all sort of warnings, as well as `-ggdb`
- Specify the C++ standard to be used during compilation
> Specify for intellisense in settings cppStandard, also within c_cpp_properties.json
- I prefer to add "PRESENT" at the end of detail attribute of a task, which shows in the VSCode command palette during task selection whether the option is already present in the tasks.json

> You can find language standard documents at [open-std.org](https://www.open-std.org/jtc1/sc22/wg21/docs/standards)
> CPPReference site tracks compiler support for each feature per language standard

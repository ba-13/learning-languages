#include <iostream>
#include <plog/Initializers/RollingFileInitializer.h>
#include <plog/Log.h>
#include <string>

const int VALUE = 4;

int getValue() {
  // clang-format off
std::cerr << "getValue()\n";
  // clang-format on
  return VALUE;
}

int getUserInput() {
  PLOGD << "getUserInut() called";
  std::cout << "Enter a number: ";
  int x{};
  std::cin >> x;
  return x;
}

int main(int, char** argv) {
  // clang-format off
std::cerr << "main()\n";
  // clang-format on

  for (int i = 0; i < 10; i++)
    ;

  std::string logFileName{argv[0]};
  logFileName += ".log";
  plog::init(plog::debug, logFileName.c_str());
  PLOGD << "main() called";

  std::cout << getValue() << "\n";
  int x{getUserInput()};
  std::cout << "You entered " << x << "\n";
  return 0;
}

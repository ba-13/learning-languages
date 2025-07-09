#include "add.h"
#include <cstdlib>
#include <iostream>

#define PRINT_JOE

int main() {
  std::cout << "Sum of 3 and 4 is " << add(3, 4) << "\n";

#ifdef PRINT_JOE
  std::cout << "Joe\n";  // will be compiled since PRINT_JOE is defined
#endif

#ifndef PRINT_BOB
  std::cout << "Bob\n";  // will be included since PRINT_BOB is not defined
#endif

  return EXIT_SUCCESS;
  // return EXIT_FAILURE;
}

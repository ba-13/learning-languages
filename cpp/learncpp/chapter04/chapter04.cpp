#include <iostream>

const int limit      = 1 << 16;
const int underLimit = limit - 1;

int overflow() {
  unsigned short x{underLimit};  // largest 16-bit unsigned value possible
  std::cout << "x was: " << x << '\n';

  x = (unsigned short)
      limit;  // 65536 is out of our range, so we get modulo wrap-around
  std::cout << "x is now: " << x << '\n';

  x = (unsigned short)(limit +
                       1);  // 65537 is out of our range, so we get modulo wrap-around
  std::cout << "x is now: " << x << '\n';

  return 0;
}

// assume int is 4 bytes
void doSomething(unsigned int x) {
  // Run some code x times
  std::cout << "x is " << x << '\n';
}

void print(int x) {
  std::cout << "Number is " << x << "\n";
}

int main() {
  int val{};
  val++;
  doSomething((unsigned)val);

  double zero{0.0};
  double posinf{1.0 / zero};  // positive infinity
  std::cout << posinf << '\n';

  double neginf{-1.0 / zero};  // negative infinity
  std::cout << neginf << '\n';

  double nan{zero / zero};  // not a number (mathematically invalid)
  std::cout << nan << '\n';

  print(static_cast<int>(nan));
  print(static_cast<int>(posinf));
  print(static_cast<int>(5.5));

  return 0;
}

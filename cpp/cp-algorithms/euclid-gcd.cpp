#include <assert.h>
#include <iostream>
#include <math.h>
#include <tuple>
#include <utility>

template <typename t> void swap(t &a, t &b) {
  a = a + b;
  b = a - b;
  a = a - b;
}

uint euclid_gcd(uint a, uint b) {
  if (b > a)
    swap(a, b);
  while (b) {
    a %= b;
    swap(a, b);
  }
  return a;
}

void test_euclid_gcd() {
  uint val = euclid_gcd(13 * 139879, 13 * 2238983);
  assert(val == 13 && "Handcrafted gcd should match");
  std::cout << val << std::endl;
}

int main() {
  test_euclid_gcd();
  std::cout << "Passed all" << std::endl;
}
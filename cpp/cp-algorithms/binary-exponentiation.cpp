#include <assert.h>
#include <eigen-5.0.0/Eigen/Dense>
#include <iostream>
#include <math.h>

// to calculate a^n
template <typename generic>
generic binary_exponentiation(generic a, int n, const generic eye) {
  generic tmp = eye;
  while (n > 0) {
    if (n & 1)
      tmp = tmp * a;
    a = a * a;
    n >>= 1;
  }
  return tmp;
}

void test_binary_exponentiation() {
  // test 1
  long a = 11;
  int n = 13;
  long int tmp = binary_exponentiation(a, n, (long)1);
  long long tmp2 = pow(a, n);
  assert(tmp == tmp2 && "exponentiation didn't match");
}

/**
 * to calculate fibonacci sequence using
 * [f_{i+1}, f_{i}] = [1, 1; 1, 0] * [f_{i}, f_{i-1}]
 */
long binary_fibonacci(int n) {
  static Eigen::Matrix2d m;
  m << 1, 1, 1, 0;
  static Eigen::Matrix2d eye;
  eye << 1, 0, 0, 1;
  Eigen::Matrix2d mn = binary_exponentiation(m, n, eye);
  static Eigen::Vector2d init;
  init << 1, 0;
  Eigen::Vector2d res = mn * init;
  return res(0);
}

void test_fibonacci() {
  int fib[] = {1, 1, 2, 3, 5, 8, 13};
  int res = binary_fibonacci(4);
  assert(res == fib[4] && "fib didn't match");
}

int main(int argc, char **argv) {
  test_binary_exponentiation();
  test_fibonacci();
  std::cout << "Passed all" << std::endl;
}
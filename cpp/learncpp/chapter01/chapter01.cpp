#include <iostream>
using namespace std;

int main() {
  [[maybe_unused]] int x{5};
  [[maybe_unused]] int cost                = {57};
  [[maybe_unused]] int pricePerItem        = {24};
  [[maybe_unused]] int severalTimesTheCost = {14};

  cout << "You entered a very well known paragraph and a character out of it "
          "is: "
       << x << "\n";

  cout << "Some output check\n";
  return 0;
}

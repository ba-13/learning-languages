#include <iostream>
#include <string>

class TextBlock {
  std::string text;

public:
  TextBlock(std::string text) { this->text.assign(text); }
  const char &operator[](std::size_t const position) const {
    return text[position];
  }
  char &operator[](std::size_t position) { return text[position]; }
};

int main() {
  TextBlock tb("Mutable");
  const TextBlock ctb("Const");

  tb[1] = 'a'; // tb[1] is the reference to the char
  return 0;
}
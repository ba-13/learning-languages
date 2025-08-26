#include <iostream>

class CTextBlock {
 private:
  char* pText;

 public:
  char& operator[](std::size_t pos) const { return pText[pos]; }
};

int main() {
  return 0;
}
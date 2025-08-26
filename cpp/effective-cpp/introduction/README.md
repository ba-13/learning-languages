# Notes

## Explicit constructor declaration

Use `explicit ConstructorName();` in order to declare a constructor, this disallows type conversions between another type and the class.

## Copy constructor

Either during initialization or using an operator

```
Widget(const Widget &rhs);
Widget& operator=(const Widget& rhs);
```

Copy constructor also defines how an object should be passed by value to any function. Pass-by-value means "call the copy constructor"

## Interface

Just a concept, front-end part of any code that you write and is visible to other code that might use it. Like function signature, or public methods of a class

## Clients

Take care of your clients, by simplifying your interfaces.

## Naming convention

- lhs, rhs
- Widget
- Pointer of AlsdghDlsdgh - pad
- Reference of UlsdngaNsldkjga - run

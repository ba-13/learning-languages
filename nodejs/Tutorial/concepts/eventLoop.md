# Event Loop

- EventLoop - allows Node.js to perform non-blocking I/O operations, i.e. async or promises, despite the fact that Js is single threaded, by offloading operations to the system kernel whenever possible.

- Most modern kernels are multi-threaded, they can handle multi-operations executing in the background.

- When a particular operations completes, the kernel tells Node.js so that apt callback may be added to the poll queue to eventually be executed.

- We run our immediate code, immediately...and run the other parts as we have time, which is performed by the system kernel, or browser apis.

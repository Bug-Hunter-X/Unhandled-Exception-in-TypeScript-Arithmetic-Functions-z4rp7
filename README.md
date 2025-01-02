# Unhandled Exception in TypeScript Arithmetic Functions

This repository demonstrates a common error in TypeScript: neglecting to handle potential exceptions.  The provided code includes basic arithmetic functions (addition, subtraction, multiplication, and division). However, the division function lacks proper error handling, leading to a runtime error if the denominator is zero. The solution demonstrates how to gracefully handle such exceptions using try-catch blocks.

## Bug

The `divide` function throws an error if the divisor is zero, but the calling code doesn't handle this exception causing a crash.
# Design Pattern 
### *Capture Actions*
___

## Behavioral Design Pattern

## ⚡️Recognize 
- We want to implement a set of operation, with an undo function
___

## 💡Intent
- Encapsulate operations with an object
- Let the client pass parameters to these operations
- Queue the requests (history)
- Support the undo functionality (undoCommand)
___


## 🔧 Apply when
- Save the State (state.value)
- Queue requests (commands' history)
- Want Command as a parameter
- Pass command like general object
- Need Undo functionality
___


## ✅Pro
- Decoupling between
  - Object that invokes the operation (Store)
  - Object that knows how to perform it (Command)
- We can create a new command which is a composition of commands easily
___

## 🏆 Great for
- Centralize the actions which changes the state
- Capture subsequent requests and keep track of them
___
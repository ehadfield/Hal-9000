# Ping Pong
### 4.5.2019

## Evan Hadfield


## Ping-Pong

This is a web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

* 1s will be replaced with "Beep".
* 2s will be replaced with "Boop".
* 3s will be replaced with "I'm sorry, Dave. I'm afraid I can't do that".


## Specs

| Objective | Example: Input | Example: Output |
|:-------------:|:-------------:|:-------------:|
| Anything that's NaN does not output anything | "poop" | " " |
| The program returns a range of numbers from 0 to the users inputted number |  3 |  "0, 1, 2, 3"|
| The program returns "Beep" in place of any 1 in a sequence. |  4 |  "0, Beep, 2, 3, 4"|
| The program returns "Boop" in place of any 2 in a sequence. | 4 | "0, 1, Boop, 3, 4" |
| The program returns a sentence in place of any 3 in a sequence. | 4 | "0, 1, 2, 'a sentence', 4" |
| The program will give priority to the highest number. | 14 | "0, Beep, Boop, 'a sentence', 4, ... 9, Beep, Beep, Boop, 'a sentence', Beep" |


## Setup/Installation Requirements

  * Clone the repository in GitHub
  * Open index.html in browser


## Bugs
There are no known bugs at this time.


## Technologies Used

  * jQuery
  * CSS - Bootstrap
  * HTML
  * GitHub #duh


## Licensing
_Copyright <2019> <Evan Hadfield>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

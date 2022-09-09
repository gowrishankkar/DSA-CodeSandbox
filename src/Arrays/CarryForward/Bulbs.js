// A wire connects N light bulbs.

// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

// You can press the same switch multiple times.

// Note: 0 represents the bulb is off and 1 represents the bulb is on.


function test(A){
    let noOfSwitch = 0;
    for (let i = 0; i < A.length; i++) {
        if (((noOfSwitch % 2 == 0) && (A[i] == 0)) || ((noOfSwitch % 2 == 1) && (A[i] == 1))) {
            noOfSwitch++;
        }
    }
  }
  
  test([0, 1, 0, 1])
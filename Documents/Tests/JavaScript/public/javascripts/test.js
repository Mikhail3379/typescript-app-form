 "use strict" ;
 // write a function to take a positive integer and return the largest power of 2
// that is less than or equal to this integer 
    // example: 5 -> 4
    function nearestPowerOfTwo(n) {
        for (let i = 0; i < n; i++) {
            if (Math.pow(2, i) > n) {
                return Math.pow(2, i-1);
            }
            else {
                return false
            }
        }
    }

    // Big-O analysis
    //  Autopilot sucks
    //    1 1 
    //    2 2 2*2
    //    3 3 2*2*2
    //    ..  2*2*2*2
    //    n n
    //
    //    sum i=0 n i = n * (n + 1)/2 = O(n^2)

    // 5 -> 4
    // 100 -> 64

    // i   what happens
    // 2   2*2 => 4
    // 3   3*2 => 6 :( not power of two

// power of 2 ==> 2^i

// i   2^i
// 0   2^0 = 1
// 1   2^1 = 2
// 2   2^2 = 2*2 = 4
// 3   2^3 = 2*2*2 = 8
// 4   2^4 = 2*2*2*2 = 16

    nearestPowerOfTwo(5); // 4
    console.log(nearestPowerOfTwo(5)); // 4

    // i++;
    // i+=1;
    // i = i + 1;

    // i = i * 2;
    // i *= 2;

    function nearestPowerOfTwo(n) {
        for( let i = 2; i < n; i++) {
            if ((i*2) < n){
            return true

        } else {
            return false
        }
    } 


    // Ex.  b^0 = 1  b^1 = b
    //   n (input) | largest power of 2 less than or equal to n (output)
    //   0         | not supported
    //   1         | 1 = 2^0
    //   2         | 2 = 2^1
    //   3         | 2^0 = 1, ( 2^1 = 2 ), 2^2 = 4

    // ways to deal with edge case 0
    //  1. comment function
    //  2. print a warning (alert)
    //  3. raise an error ***
    //      * throw exception
    //      * return some special value (i.e. false)

    // Find largest power of 2 less than or equal to n
    //   Preconditions/Inputs:
    //       n : target value, must be greater than 0
    //
    //   Postconditions/Ouputs:
    //       output power of two 2^i
    function nearestPowerof2(n) {
        if (n <= 0 ) throw("n must be positive integer");
        let power_of_two = 1;
        while (power_of_two < n) {
            if (power_of_two * 2 > n) {
                break;
            }
            
            power_of_two *= 2;
        }

        return power_of_two;
    }

    // O(n)

    // TEsting....
    // n
    // 1  => 1  Y
    // 2  => 2  Y
    // 3  => 4  :(
}
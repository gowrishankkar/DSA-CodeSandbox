function test(A, B) {
    let x = 0;
    let noSetBits = 0;
    for (let i = 31; i >= 0 ; i--)
    {
        if ((A & (1 << i)) != 0) {
            noSetBits++;
        }
        
    }
    console.log('noSetBits', noSetBits, B)
    console.log('B', B)
    if (noSetBits == B) {
        return A;
    }
    else if (noSetBits > B) {
        for (let i = 31; i >= 0 ; i--)
        {
            if ((A & (1 << i)) != 0) {
                x |= 1 << i;
            }
  
        }
        for (let i = 0; i <= 31 && noSetBits != B; i++)
        {
            if ((A & (1 << i)) != 0) {
                x &= ~(1 << i);
                noSetBits--;
            }
  
        }
    }
    else if (noSetBits < B) {
        for (let i = 31; i >= 0 && B > 0; i--)
        {
            if ((A & (1 << i)) != 0) {
                x |= 1 << i;
                B--;
                console.log('x', x)
                console.log('B', B)
            }
  
        }
        for (let i = 0; i <= 31 && B > 0; i++)
        {
            if ((A & (1 << i)) == 0) {
                x |= 1 << i;
                B--;
            }
  
        }
    }
    return x;
  }
  
  console.log("test", test(3,3));
/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #medium #array
  
  ### Question
  
  In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
  
  For example:
  
  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```
  
  > View on GitHub: https://tsch.js.org/459
*/


/* _____________ Your Code Here _____________ */

type Flatten<X extends any[]> = X extends [] 
    ? []
    : (
        X extends [infer Header, ...infer Tail] 
            ? (Header extends any[] ? [...Flatten<Header>, ...Flatten<Tail>] : [Header, ...Flatten<Tail>])
            : never
    )

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../..//utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{foo: 'bar'; 2: 10}, 'foobar']>, [{foo: 'bar'; 2: 10}, 'foobar']>>,
]

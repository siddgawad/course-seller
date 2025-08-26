1. Unit tests are created to test the logic part of code - it helps identify issues at individual component level before they propogate thoruhg the system, amking bugs much cheaper and easier to fix.
   We used Vitest for unit testing, it is a tetsing framework that runs the code, compares expected vs actual result, reports whihc tests fail or pass and provides helpful error messages. Using vitest we use - describe, test/it, render and expect to define unit tests.

2. For Zod schema validation, unit tests ensure that the schema correctly enforces defined rules (e.g., data types, constraints like minimum length or positive numbers).

describe("ComponentName",()=>{
it("negative outcome based on some condition",()=>{
expect(()=>
//define a type of value on parameter which would fail the zod schema validation
ComponentName.parse({parameters:value})).toThrow();
})
})

it("positive outcome based on some condition",()=>{
expect(()=>
// define value which would pass the zod schema validation
ComponentName.parse({parameter:value}).isActive.toBe(true);
)
})

So unit tests and zod schema validation go hand in hand.

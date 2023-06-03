import { equal } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { parse } from "./src/parse.ts";

if (import.meta.main) {
  const parsedJSONCT = parse(`{
        "name": "John",
        "age": 30,
        "description": \`Hello, my name is John and I'm 30 years old.
I like cars and my favorite car is Ford.\`,
        // wow comments too
        "cars": [
            {
                "name": "Ford",
                "models": ["Fiesta", "Focus", "Mustang"]
            },
            {
                "name": "BMW",
                "models": ["320", "X3", "X5"]
            }
        ]
    }
`);

  console.log(equal(parsedJSONCT, {
    name: "John",
    age: 30,
    description: `Hello, my name is John and I'm 30 years old.
I like cars and my favorite car is Ford.`,
    cars: [
      {
        "name": "Ford",
        "models": ["Fiesta", "Focus", "Mustang"],
      },
      {
        "name": "BMW",
        "models": ["320", "X3", "X5"],
      },
    ],
  }));
}

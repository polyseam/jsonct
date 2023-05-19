# JSONCT - JSON with comments and template literals

JSON is used all over the web, and it is used to encode so many types of data.

It is missing two critical features for many use cases though!

1. There is no native comment syntax, but JSONC fixed this - it permits JS style
   comments within the document.

2. JSON does not support multi-line strings, which are an extremely helpful
   construct for all kinds of programs.

JSONCT allows the JS template literal syntax for multiline strings as an
extension of JSONC. This allows for a very natural way to write JSON documents,
and is very easy to parse.

```text
{
    "name": "JSONCT",
    // comments are handled just like JSONC
    "description": "JSON with comments and template literals",

    "markdown": `
# JSONCT - JSON with comments and template literals
---

Why doesn't this exist?`

}
```

## ts implementation

A JSONCT parser written in Typescript is found in [src/jsonct.ts](src/parse.ts).
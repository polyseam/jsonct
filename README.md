# JSONCT - JSON with comments and template literals

JSON is used all over the web, and it is used to encode so many types of data. It is missing two critical features for many use cases though. 

The first is that there is no native comment syntax, however this one has been solved with the introduction of the JSONC encoding! JSONC permits JS style comments within the document.

The second issue is that JSON does not support multi-line strings, which are an extremely helpful construct for all kinds of programs.

JSONCT allows the JS template literal syntax for multiline strings as an extension of JSONC. This allows for a very natural way to write JSON documents, and is very easy to parse.
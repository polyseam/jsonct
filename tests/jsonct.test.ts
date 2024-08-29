// import deno test utilities
import { assert } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { JSONCT } from "../mod.ts";

const mockJson = `{
    "foo": 2,
    // this is a comment
    "mockReadme": \`# JSONCT

JSONCT is a JSON superset that allows comments and multiline strings.

## Usage

### Parsing JSONCT strings

Simply import the jsonct module and use the parse method to parse JSONCT strings.
\`   
}`;

describe("JSONCT", () => {
    it("should parse JSONCT strings", () => {
        const parsed = JSONCT.parse(mockJson);
        console.log(JSON.stringify(parsed, null, 2));
        assert(Object.keys(parsed).length === 2);
        assert(
            parsed.mockReadme ===
                "# JSONCT\n\nJSONCT is a JSON superset that allows comments and multiline strings.\n\n## Usage\n\n### Parsing JSONCT strings\n\nSimply import the jsonct module and use the parse method to parse JSONCT strings.\n",
        );
    });
});

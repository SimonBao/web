module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": ["plugin:react/recommended", "eslint:recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": "error",
        "quotes": ["error", "double"],
        "indent": ["error", 2],
        "array-element-newline": ["error", {
            "ArrayExpression": "consistent",
            "ArrayPattern": { "minItems": 1 },
        }],
    }
};

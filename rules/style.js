module.exports = {
	rules: {
		// enforce linebreaks after opening and before closing array brackets
		'array-bracket-newline': ['error', 'consistent'],

		// enforce consistent spacing inside array brackets
		'array-bracket-spacing': ['error', 'never'],

		// enforce line breaks after each array element
		'array-element-newline': ['error', 'consistent'],

		// disallow or enforce spaces inside of blocks after opening block and before closing block
		'block-spacing': ['error', 'always'],

		// enforce consistent brace style for blocks
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],

		// enforce camelcase naming convention
		'camelcase': 'error',

		// enforce or disallow capitalization of the first letter of a comment
		'capitalized-comments': 'off',

		// require or disallow trailing commas
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
		}],

		// enforce consistent spacing before and after commas
		'comma-spacing': ['error', { before: false, after: true }],

		// enforce consistent comma style
		'comma-style': ['error', 'last'],

		// enforce consistent spacing inside computed property brackets
		'computed-property-spacing': ['error', 'never'],

		// enforce consistent naming when capturing the current execution context
		'consistent-this': ['error', 'that'],

		// require or disallow newline at the end of files
		'eol-last': ['error', 'always'],

		// require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': ['error', 'never'],

		// require function names to match the name of the variable or property to which they are assigned
		'func-name-matching': ['error', 'always', {
			considerPropertyDescriptor: true,
			includeCommonJSModuleExports: true,
		}],

		// require or disallow named function expressions
		'func-names': 'off',

		// enforce the consistent use of either function declarations or expressions
		'func-style': ['error', 'declaration', { allowArrowFunctions: false }],

		// enforce line breaks between arguments of a function call
		'function-call-argument-newline': ['error', 'never'],

		// enforce consistent line breaks inside function parentheses
		'function-paren-newline': 'off',

		// disallow specified identifiers
		'id-blacklist': 'off',

		// enforce minimum and maximum identifier lengths
		'id-length': 'off',

		// require identifiers to match a specified regular expression
		'id-match': 'off',

		// enforce the location of arrow function bodies
		'implicit-arrow-linebreak': ['error', 'beside'],

		// enforce consistent indentation
		'indent': ['error', 'tab', { SwitchCase: 1 }],

		// enforce the consistent use of either double or single quotes in JSX attributes
		'jsx-quotes': 'off',

		// enforce consistent spacing between keys and values in object literal properties
		'key-spacing': 'error',

		// enforce consistent spacing before and after keywords
		'keyword-spacing': 'error',

		// enforce position of line comments
		'line-comment-position': 'off',

		// enforce consistent linebreak style
		'linebreak-style': ['error', 'unix'],

		// require empty lines around comments
		'lines-around-comment': ['error', {
			beforeBlockComment: true,
			afterBlockComment: false,
			beforeLineComment: true,
			afterLineComment: false,
			allowBlockStart: true,
			allowBlockEnd: false,
			allowObjectStart: true,
			allowObjectEnd: false,
			allowArrayStart: false,
			allowArrayEnd: false,
			allowClassStart: false,
			allowClassEnd: false,
		}],

		// require or disallow an empty line between class members
		'lines-between-class-members': ['error', 'always'],

		// enforce a maximum depth that blocks can be nested
		'max-depth': ['error', 4],

		// enforce a maximum line length
		'max-len': ['error', { code: 120, tabWidth: 4, ignoreUrls: true }],

		// enforce a maximum number of lines per file
		'max-lines': ['warn', { max: 200, skipBlankLines: false, skipComments: false }],

		// enforce a maximum number of lines of code in a function
		'max-lines-per-function': ['warn', { max: 30, skipBlankLines: false, skipComments: false, IIFEs: true }],

		// enforce a maximum depth that callbacks can be nested
		'max-nested-callbacks': ['error', 3],

		// enforce a maximum number of parameters in function definitions
		'max-params': ['error', 4],

		// enforce a maximum number of statements allowed in function blocks
		'max-statements': ['warn', 10, { ignoreTopLevelFunctions: false }],

		// enforce a maximum number of statements allowed per line
		'max-statements-per-line': ['warn', { max: 1 }],

		// enforce a particular style for multiline comments
		'multiline-comment-style': ['error', 'separate-lines'],

		// enforce newlines between operands of ternary expressions
		'multiline-ternary': ['error', 'always-multiline'],

		// require constructor names to begin with a capital letter
		'new-cap': 'error',

		// enforce or disallow parentheses when invoking a constructor with no arguments
		'new-parens': 'error',

		// require a newline after each call in a method chain
		'newline-per-chained-call': 'error',

		// disallow Array constructors
		'no-array-constructor': 'error',

		// disallow bitwise operators
		'no-bitwise': 'error',

		// disallow continue statements
		'no-continue': 'error',

		// disallow inline comments after code
		'no-inline-comments': 'off',

		// disallow if statements as the only statement in else blocks
		'no-lonely-if': 'error',

		// disallow mixed binary operators
		'no-mixed-operators': 'error',

		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

		// disallow use of chained assignment expressions
		'no-multi-assign': 'error',

		// disallow multiple empty lines
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],

		// disallow negated conditions
		'no-negated-condition': 'error',

		// disallow nested ternary expressions
		'no-nested-ternary': 'error',

		// disallow Object constructors
		'no-new-object': 'error',

		// disallow the unary operators ++ and --
		'no-plusplus': 'off',

		// disallow specified syntax
		'no-restricted-syntax': 'off',

		// disallow all tabs
		'no-tabs': ['error', { allowIndentationTabs: true }],

		// disallow ternary operators
		'no-ternary': 'off',

		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'error',

		// disallow dangling underscores in identifiers
		'no-underscore-dangle': 'off',

		// disallow ternary operators when simpler alternatives exist
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],

		// disallow whitespace before properties
		'no-whitespace-before-property': 'error',

		// enforce the location of single-line statements
		'nonblock-statement-body-position': ['error', 'beside'],

		// enforce consistent line breaks inside braces
		'object-curly-newline': ['error', { consistent: true }],

		// enforce consistent spacing inside braces
		'object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: false }],

		// enforce placing object properties on separate lines
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

		// enforce variables to be declared either together or separately in functions
		'one-var': ['error', 'never'],

		// require or disallow newlines around variable declarations
		'one-var-declaration-per-line': 'off',

		// require or disallow assignment operator shorthand where possible
		'operator-assignment': 'error',

		// enforce consistent linebreak style for operators
		'operator-linebreak': ['error', 'before'],

		// require or disallow padding within blocks
		'padded-blocks': ['error', 'never'],

		// require or disallow padding lines between statements
		'padding-line-between-statements': ['error', {
			blankLine: 'always',
			prev: '*',
			next: 'return',
		}, {
			blankLine: 'always',
			prev: ['const', 'let', 'var'],
			next: '*',
		}, {
			blankLine: 'any',
			prev: ['const', 'let', 'var'],
			next: ['const', 'let', 'var'],
		}, {
			blankLine: 'always',
			prev: ['block', 'block-like'],
			next: '*',
		}, {
			blankLine: 'always',
			prev: ['import', 'export', 'cjs-import', 'cjs-export'],
			next: '*',
		}, {
			blankLine: 'any',
			prev: ['import', 'export', 'cjs-import', 'cjs-export'],
			next: ['import', 'export', 'cjs-import', 'cjs-export'],
		}, {
			blankLine: 'always',
			prev: 'multiline-expression',
			next: '*',
		}, {
			blankLine: 'always',
			prev: 'directive',
			next: '*',
		}, {
			blankLine: 'any',
			prev: 'directive',
			next: 'directive',
		}],

		// disallow the use of `Math.pow` in favor of the `**` operator
		'prefer-exponentiation-operator': 'error',

		// disallow using Object.assign with an object literal as the first argument and
		// prefer the use of object spread instead.
		'prefer-object-spread': 'off',

		// require quotes around object literal property names
		'quote-props': ['error', 'consistent-as-needed'],

		// enforce the consistent use of either backticks, double, or single quotes
		'quotes': ['error', 'single'],

		// require or disallow semicolons instead of ASI
		'semi': ['error', 'always', { omitLastInOneLineBlock: true }],

		// enforce consistent spacing before and after semicolons
		'semi-spacing': ['error', { before: false, after: true }],

		// enforce location of semicolons
		'semi-style': ['error', 'last'],

		// require object keys to be sorted
		'sort-keys': 'off',

		// require variables within the same declaration block to be sorted
		'sort-vars': 'off',

		// enforce consistent spacing before blocks
		'space-before-blocks': ['error', 'always'],

		// enforce consistent spacing before function definition opening parenthesis
		'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

		// enforce consistent spacing inside parentheses
		'space-in-parens': ['error', 'never'],

		// require spacing around infix operators
		'space-infix-ops': 'error',

		// enforce consistent spacing before or after unary operators
		'space-unary-ops': ['error', { words: true, nonwords: false }],

		// enforce consistent spacing after the // or /* in a comment
		'spaced-comment': ['error', 'always'],

		// enforce spacing around colons of switch statements
		'switch-colon-spacing': ['error', { before: false, after: true }],

		// require or disallow spacing between template tags and their literals
		'template-tag-spacing': ['error', 'never'],

		// require or disallow Unicode byte order mark (BOM)
		'unicode-bom': ['error', 'never'],

		// require parenthesis around regex literals
		'wrap-regex': 'off',
	},
};

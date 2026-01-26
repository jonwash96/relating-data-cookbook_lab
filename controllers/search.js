//* MNT
const express = require('express');
const router = express.Router();

//* VAR

//* ROUTE

// 1. Exact match
// 2. Fuzzy Match
// 3. Match Each word (excluding common), sort by num of words matched
// 4. Fuzzy Match Each word (excluding common words), sort by num of words matched
// 5. Match related by Brand/Category

// Search Should (Next Steps):
// Detect srtuctured input
// Be completeley autonomous/"Omni" with option for explicit refinement
// Handle Plurality (/s$/ ? /.+?$/ : /s?$/)
// Handle misspellings (to some degree)[Search term minus each letter] (n^n-too-many when more than 1 word)
// Associate Categories with brands (if "laptop"; Search Dell, HP, Acer...)
// Detect Name patterns (Model-name, Model-number) For a more targeted search

//* IO
module.exports = router;
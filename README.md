# The Simple Dictionary

[![GitHub release](https://img.shields.io/badge/release-v0.0.4-blue.svg)](https://github.com/ipsumbelievable/simple-dictionary/releases/)

The goal of this project is to provide a simple definition for common words in the English language. This [open source dictionary](http://www.mso.anu.edu.au/~ralph/OPTED/) as well as other online and printed dictionaries already provide comprehensive collections and thorough definitions for words in the English language. What this project seeks to do instead is pair each word with simple and terse definition that are easy to understand.

The words and descriptions in this dataset are limited to the [most frequently used 5000 english verbs, adjectives and nouns](https://www.wordfrequency.info/free.asp?s=y). This dictionary will make no attempt to be any source of authority for english language. Because of the kinds of words this dictionary is restricted to and the limitation put of the precision of its definitions, please consider this resource more art than linguistic authority.

## Format

The dataset is in `.csv` comma separated format and uses the following implicit headers `index,word,definition`. This dataset is also designed with natural language processing tasks in mind so all punctuation is already removed.

**Examples**

```
0,attitude,state of mind or a feeling
0,agenda,timetable schedule or routine
```

## How Does One Get Involved

If you would like to get involved in the project, thank you so much! Submit a pull request with your proposed changes.

Fork and clone the project to make changes and submit PR's to the ipsumbelievable `contributions` branch.

### Example of Work Needed

```
Original Line
21440,author,n the writer one who writes the source

Corrected Line
0,author,someone who writes the original work
0,author,someone who participates in writing something
```

- Place a `0` index at the beginning of each line
- Remove any spaces on either side of the comma
- Lowercase each character
- Remove any punctuation from the description

### It's ok to:

- Use more than one line to capture the meaning of the word
- Use 15 words or less for each description
- Use words other than the defined word in the definition
- Use text in the definition and spell numbers
- Be funny and casual with each description
- Be sincere instead of sarcastic
- Practice basic human decency
- Channel your inner [r/explainlikeimfive](https://www.reddit.com/r/explainlikeimfive)
- Use words that are inclusive and clean
- Remove lines if they are polarizing or misinformed

If you find it easier to review examples for ideas, then any zero indexed description is just what we're looking for.

## Roadmap

This project is in pre-release stages and is in active development.

### v0.0.2

Produce editing SPA to help contributors identify uncommon or restricted words.

### v0.0.3

Complete the first pass of the dataset.

Shorten the remaining lines in the raw dataset to definitions that are 15 words or less.

### v0.0.4

Develop `node.js` for sorting and indexing versioned data.

### v0.0.5

Convert versioned dataset into an NPM module to provide a definition for any matching words.

## Data Sources

The original dataset used for this project uses a filtered version of data found at this [Github Repository](https://github.com/mattbierner/urban-dictionary-entry-collector). The use of this dataset is intended to provide inspiration for possible natural language definitions. After `v0.0.3`, this dataset will not bear any resemblance to the original dataset.

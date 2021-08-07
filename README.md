# deel-tests
Deel-QA Automation/Manual candidate exam

## Requirements

-   node >= 14.x.x
-   npm >= 6.14.x

## Getting Started

Install the dependencies:

```
npm install
```

Run tests:

```
npx wdio run ./wdio.conf.js
```

## Reports

### Allure

Run this command to generate the allure report:

```
allure serve test-report/allure-result 
```
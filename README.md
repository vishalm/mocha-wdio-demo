![.github/workflows/node.js.yml](https://github.com/vishalm/mocha-wdio-demo/workflows/.github/workflows/node.js.yml/badge.svg?branch=master)

# Webdriver IO demo with Mocha and Allure Report


#### Test Scenario
    Using http://www.vacationsdirect.com website, we would like you to build out a solution to

    automate the following UI tests:
    1) Search for hotels in New York City for dates a month in the future.
    2) Filter hotel search results based on 'Star Rating'.
    3) See available rooms after selecting a hotel from the hotel search results.

## Solution

### Tech Stack

#### Language/Tools/Libraries:
* node
* mocha
* chai
* webdriverio
* reports : allure
* default browser : chrome

### Machine Setup
```bash
node --version
# v10.15.3

npm --version
6.9.0

git clone git@github.com:vishalm/mocha-wdio-demo.git

cd mocha-wdio-demo

npm install
```

### Continuos Integration
```
#Github Action is for PR and Merge to Master
.github/workflows/node.js.yml
```

#### Selenium Grid Docker Setup
##### Docker Setup 1
* Install Docker
* Run Docker compose

##### Docker Setup 2
* Install Docker
* Zalenium: https://github.com/zalando/zalenium 
* ``` # Pull docker-selenium
       docker pull elgalu/selenium
     
       # Pull Zalenium
       docker pull dosel/zalenium
             
       docker run --rm -ti --name zalenium -p 4444:4444 \
         -v /var/run/docker.sock:/var/run/docker.sock \
         -v /tmp/videos:/home/seluser/videos \
         --privileged dosel/zalenium start```


#### Test Execution

##### Lint Fix
```
npm run lint.fix
```

##### Local Chrome Browser
  ```
   npm run test
  ```

##### Remote Chrome Browser
 ```
 npm run test.local.grid
 ```

##### If Zalenium
* [Live Execution](http://localhost:4444/grid/admin/live)
  
* [Dashboard Execution Recording](http://localhost:4444/dashboard/#)



#### Configurations

##### Local
```
local config = wdio.conf.js
```

##### Remote
```
local config = wdio.conf.js
```

### Reports
#### Local Reports
```
  npm run report
```
#### CI Reports
```
  npm run report.ci
```
#### Allure Reports
```report/allure-results/index.html```
#### JSON Reports
```report/json/testResults.json```
#### jUnit Reports
```report/junit/**.xml```
#### Screenshots
```report/<screenshot>.png```
# judoc
### An API documentation generator

##### Install and Run

npm  

    npm install judoc -g
    
    judoc --config <configPath>

github (contains mojs example[http://zanjs.com/api/mojs.html],  
so we can run 'node judoc.js --config ./example/judoc.config.json' directly)
    
    git clone https://github.com/ipanli/judoc.git
    cd judoc && npm install
    
    node judoc.js --config <configPath>
    


##### Config
  
    {
      "name": "",
      "version": "",
      "repositoryUrl": "",
      "introduction": "",
      "paths": {
        "input": "",
        "output": ""
      },
      "skip": []
    }
    
##### Comment Example
  
general document comment

    /**
     * description
     *
     * @param {string} 1
     * @param {object} 2
     *   - a {number} 3
     *   - b {string} 4
     * @param {function} 5
     *   - param {number} 6
     *   - param {function} 7
     *     - param 8
     * @return {object} 9
     *   - c {string} 10
     *   - d {number} 11
     */

after add generator
    
    /**
     * description
     *
     * @param {string} 1
     * @param {object} 2
     *   - a {number} 3
     *   - b {string} 4
     * @param {function} 5
     *   - param {number} 6
     *   - param {function} 7
     *     - param 8
     * @return {object} 9
     *   - c {string} 10
     *   - d {number} 11
     * 
     * @name file name or method name or property name(required)
     * @example
     * var str = 'judoc';
     * num.toUpperCase();
     * ...
     * @more
     * this is more information,
     * judoc is very good.
     * ...
     */

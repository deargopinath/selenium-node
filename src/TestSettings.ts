import * as fs from 'fs'
import * as yml from 'js-yaml'
 
export interface Properties {
    browser: string
    homePage: string
}

export class TestSettings {
    private properties: Properties
  browser: any
    constructor() {
        const testSuite = fs.readFileSync('./test-suite.yml', 'utf8')
        this.properties = yml.safeLoad(testSuite)
    }

    getProperties() : Properties {
        return this.properties
    }
}

import * as webdriver from 'selenium-webdriver'
import {TestSettings, Properties} from './TestSettings'

let properties: Properties
let se: any
var By = webdriver.By
var until = webdriver.until

before(
  function () {
      properties = (new TestSettings()).getProperties()
      se = new webdriver.Builder().forBrowser(properties.browser).build()
      se.manage().window().setRect({width: 500, height: 600})
      this.timeout(60000)
    }
)

it('Test 1',
    function() {
      try {
        se.get(properties.homePage)
        se.findElement(By.linkText("Apache NetBeans")).click() 
      } catch(e) {
        console.log(e)
      }   
    }
)


it('Test 2',
    function() {
      try {
        se.findElement(By.linkText("Find out more")).click() 
      } catch(e) {
        console.log(e)
      }   
    }
)

after(
  function() {
    se.quit()
  }
)
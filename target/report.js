$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("productdetails.feature");
formatter.feature({
  "line": 1,
  "name": "Product Details",
  "description": "",
  "id": "product-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify the functionality of Adding new Products",
  "description": "",
  "id": "product-details;verify-the-functionality-of-adding-new-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Add new Product button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter Price \"\u003cprice\u003e\" Name \"\u003cname\u003e\" and Description \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Priduct ID will be generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "product-details;verify-the-functionality-of-adding-new-products;",
  "rows": [
    {
      "cells": [
        "price",
        "name",
        "Description"
      ],
      "line": 11,
      "id": "product-details;verify-the-functionality-of-adding-new-products;;1"
    },
    {
      "cells": [
        "10",
        "product1",
        "product details"
      ],
      "line": 12,
      "id": "product-details;verify-the-functionality-of-adding-new-products;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2656097800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the functionality of Adding new Products",
  "description": "",
  "id": "product-details;verify-the-functionality-of-adding-new-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Add new Product button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter Price \"10\" Name \"product1\" and Description \"product details\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Priduct ID will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 407160900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Add_new_Product_button()"
});
formatter.result({
  "duration": 180432600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    },
    {
      "val": "product1",
      "offset": 23
    },
    {
      "val": "product details",
      "offset": 50
    }
  ],
  "location": "stepdefination.enter_Price_Name_and_Description(String,String,String)"
});
formatter.result({
  "duration": 286000500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.click_on_save_button()"
});
formatter.result({
  "duration": 143668700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.priduct_ID_will_be_generated()"
});
formatter.result({
  "duration": 48406100,
  "status": "passed"
});
formatter.after({
  "duration": 736747600,
  "status": "passed"
});
formatter.before({
  "duration": 1183226900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the functionality of Available product list",
  "description": "",
  "id": "product-details;verify-the-functionality-of-available-product-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Product list should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 298500100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Available_Products_button()"
});
formatter.result({
  "duration": 179025100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.product_list_should_be_displayed()"
});
formatter.result({
  "duration": 52731100,
  "status": "passed"
});
formatter.after({
  "duration": 710874600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify the functionality of Modifying existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-modifying-existing-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Edit Product for id \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter \"\u003cname\u003e\" name for modification",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Product ID will be modified \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "product-details;verify-the-functionality-of-modifying-existing-product;",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 28,
      "id": "product-details;verify-the-functionality-of-modifying-existing-product;;1"
    },
    {
      "cells": [
        "1",
        "amit"
      ],
      "line": 29,
      "id": "product-details;verify-the-functionality-of-modifying-existing-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1171789100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the functionality of Modifying existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-modifying-existing-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Edit Product for id \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter \"amit\" name for modification",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Product ID will be modified \"amit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 330149400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Available_Products_button()"
});
formatter.result({
  "duration": 190832800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "stepdefination.click_on_Edit_Product_for_id(String)"
});
formatter.result({
  "duration": 57962900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit",
      "offset": 7
    }
  ],
  "location": "stepdefination.enter_name_for_modification(String)"
});
formatter.result({
  "duration": 14678500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.click_on_save_button()"
});
formatter.result({
  "duration": 15709600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button\"}\n  (Session info: chrome\u003d92.0.4515.131)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CJ23D15G\u0027, ip: \u0027172.22.224.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.131, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\AMITLU~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57730}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b9c0367c946af561858063e544b71280\n*** Element info: {Using\u003dxpath, value\u003d//button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefination.stepdefination.click_on_save_button(stepdefination.java:44)\r\n\tat ✽.And Click on save button(productdetails.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit",
      "offset": 29
    }
  ],
  "location": "stepdefination.product_ID_will_be_modified(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 719152100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify the functionality of deleting existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-deleting-existing-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "click on Delete Product for id \"\u003cid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "product-details;verify-the-functionality-of-deleting-existing-product;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 37,
      "id": "product-details;verify-the-functionality-of-deleting-existing-product;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 38,
      "id": "product-details;verify-the-functionality-of-deleting-existing-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1211058000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify the functionality of deleting existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-deleting-existing-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "click on Delete Product for id \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 664870000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Available_Products_button()"
});
formatter.result({
  "duration": 197714400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "stepdefination.click_on_Delete_Product_for_id(String)"
});
formatter.result({
  "duration": 30357200,
  "status": "passed"
});
formatter.after({
  "duration": 690194200,
  "status": "passed"
});
});
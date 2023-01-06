function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

//Thứ tự môn
for (let j = 1; j < 100; j++) {
  try {
    for (let index = 0; index < 5; index++) {
      getElementByXpath("/html/body/app-root/div/app-main-layout/div/app-khao-sat-sinh-vien/client-phieu-khao-sat-sinh-vien-list/div/div/div/div[2]/a").click(); 
      await sleep(700);
    }
  } catch (error) {
    
  }

  getElementByXpath("/html/body/app-root/div/app-main-layout/div/app-khao-sat-sinh-vien/client-phieu-khao-sat-sinh-vien-list/div/div/div/div[1]/div/div/table/tbody/tr["+j+"]/td[4]/a").click();
  await sleep(700);

      var x = document.getElementsByClassName("ng-untouched ng-pristine ng-valid");
      for (let i = 0; i < x.length; i++) {

        try {
          x[i].click();
        } catch (error) {
          
        }
      }

      try {
        document.querySelector('#main > app-khao-sat-sinh-vien > client-phieu-khao-sat-sinh-vien-detail > div.cus_neo_div > button.btn.btn-success.pull-right.ng-star-inserted').click();
      } catch (error) {
        document.querySelector('#main > app-khao-sat-sinh-vien > client-phieu-khao-sat-sinh-vien-detail > div.cus_neo_div > button').click();
      } 

    await sleep(2000);
}

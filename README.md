# fastforex
JavaScript library for fastforex.io
# main
```js
async function main(){
    const {fastforex} = require('./fastforex');
    const forex= new fastforex();
    let req=await forex.fetch_all("RUB")
    console.log(req)
}
main()
```

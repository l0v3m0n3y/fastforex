class fastforex{
    constructor(){
        this.api = "https://api.fastforex.io"
        this.headers={"accept":"application/json","Accept-Encoding":"gzip","Connection":"Keep-Alive","Host":"api.fastforex.io","User-Agent":"okhttp/4.5.0"}
        this.api_key="3aba621809-16ecb94f2f-s1wop5"
    }
    async crypto_currencies(){
        let req=await fetch(`${this.api}/crypto/currencies?api_key=${this.api_key}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async currencies_list(){
        let req=await fetch(`${this.api}/currencies?api_key=${this.api_key}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async crypto_pairs(){
        let req=await fetch(`${this.api}/crypto/pairs?api_key=${this.api_key}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async fetch_all(from){
        let req=await fetch(`${this.api}/fetch-all?api_key=${this.api_key}&from=${from}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {fastforex};
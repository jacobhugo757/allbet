if(window.location.href.indexOf('www.allbet.io') >= 0) {
    //正式环境 ETH
    // window.SERVERPATH = "https://apinodehk.allbet.io"
    window.SERVERPATH = "https://apinode.allbet.io"
    window.BANCORADDRESS = "0x36fc06fef49e2d92fe9460685d56a5998d9ba187"   //bancor 合约
    window.ROLLERADDRESS = "0x2aef00e45e610fcd13fbc5b734b68c2353941520"   //dice游戏合约
    window.ETHPLEDGEADDRESS = "0x9e29ae7ef0ba62b561f07675715bc0f9316a0275"  //抵押合约
    window.ETHABTOKEN = "0x9a6d042f8be45202464d66a88602864ebdc287f1"   //ETH AB Token
    // TRX
    window.TRONROLLARADDRESS = "TKQ2WmYs9KRmD3c9TwUMjZ3vj5BKgADUZ5"   //dice游戏合约
    window.TRONFUNDRAIYADDRESS = "TDmwcA6XuoSZCVdnpihZKtdLe85mUwWG64"   //私募合约
    window.TRONFUNDRAIYADDRESS2 = "TGCz7hLkvBamcSh7TipdFtBaSM2DXeY5aT"  //合约转账
    window.TRONPLEDGEADDRESS = "TC16s3QrYZvXBMv3WSdGkk6UX1fEoa69Sn"  //抵押合约
    window.TRONABTOKEN = "TNbYoP22d74RWy4ETssHsXYFrnmmbQ2fvt"        //tron AB Token
    window.TRONPOKERADDRESS = "TQAeHRPkwwCB7EUhMUes6nswSXWXZrj7mM"  //poker游戏合约
    // 网络标识
    window.NETWORK = 1
}else if(window.location.href.indexOf('47.91.247.93') >= 0){
    //测试环境
    // window.SERVERPATH = "http://47.91.247.93:7788"
    // // window.SERVERPATH = "http://192.168.120.141:8080"  //海云本地
    // window.BANCORADDRESS = "0xd06b02f187c137f59f9351c62a421dae59739d37"
    // window.ROLLERADDRESS = "0x9fb54a29924ecca77e8f2c6c7e762e9e18e56b04"
    // window.ETHPLEDGEADDRESS = "0xc4476e362084b1b28bf38695ca05f88a64cce8db"  //抵押合约
    // window.ETHABTOKEN = "0x1f1a8108671c893AD3382166Edd427E487be3266"

    // window.TRONROLLARADDRESS = "TST9xJjC5SRSaF9geUrAwjhRVCFa9VDrkj"
    // window.TRONFUNDRAIYADDRESS = "TJdfA7GzgV8MtBBAxKJ5KtCpC9iH5kVxtN"
    // window.TRONFUNDRAIYADDRESS2 = "TGCz7hLkvBamcSh7TipdFtBaSM2DXeY5aT"  //合约转账
    // window.TRONPLEDGEADDRESS = "TQTeA7u1WWYghEJPC8D5jH5qX9aSePAcpK"  //抵押合约
    // window.TRONABTOKEN = "TAgToUuR4ZPiWWWsdGtR2NMJfbs7Hc6cqG"
    // window.TRONPOKERADDRESS = "TFcjC9q3w2KUGpf7dCqkLmNUKQz2P8a4Bb"  //poker游戏合约

    // window.NETWORK = 4

}else {
    //本地环境
    window.SERVERPATH = "http://192.168.120.141:8080"
    // window.SERVERPATH = "http://47.91.247.93:7788"
    window.BANCORADDRESS = "0xd06b02f187c137f59f9351c62a421dae59739d37"
    window.ROLLERADDRESS = "0x9fb54a29924ecca77e8f2c6c7e762e9e18e56b04"
    window.ETHPLEDGEADDRESS = "0xc4476e362084b1b28bf38695ca05f88a64cce8db"  //抵押合约
    window.ETHABTOKEN = "0x1f1a8108671c893AD3382166Edd427E487be3266"

    window.TRONROLLARADDRESS = "TST9xJjC5SRSaF9geUrAwjhRVCFa9VDrkj"
    window.TRONFUNDRAIYADDRESS = "TJdfA7GzgV8MtBBAxKJ5KtCpC9iH5kVxtN"
    window.TRONFUNDRAIYADDRESS2 = "TGCz7hLkvBamcSh7TipdFtBaSM2DXeY5aT"  //合约转账
    window.TRONPLEDGEADDRESS = "TQTeA7u1WWYghEJPC8D5jH5qX9aSePAcpK"  //抵押合约
    window.TRONABTOKEN = "TAgToUuR4ZPiWWWsdGtR2NMJfbs7Hc6cqG"
    window.TRONPOKERADDRESS = "TFcjC9q3w2KUGpf7dCqkLmNUKQz2P8a4Bb"  //poker游戏合约

    window.NETWORK = 4

    window.SERVERPATH = "https://apinode.allbet.io"
    window.BANCORADDRESS = "0x36fc06fef49e2d92fe9460685d56a5998d9ba187"   //bancor 合约
    window.ROLLERADDRESS = "0x2aef00e45e610fcd13fbc5b734b68c2353941520"   //dice游戏合约
    window.ETHPLEDGEADDRESS = "0x9e29ae7ef0ba62b561f07675715bc0f9316a0275"  //抵押合约
    window.ETHABTOKEN = "0x9a6d042f8be45202464d66a88602864ebdc287f1"   //ETH AB Token
    // TRX
    window.TRONROLLARADDRESS = "TKQ2WmYs9KRmD3c9TwUMjZ3vj5BKgADUZ5"   //dice游戏合约
    window.TRONFUNDRAIYADDRESS = "TDmwcA6XuoSZCVdnpihZKtdLe85mUwWG64"   //私募合约
    window.TRONFUNDRAIYADDRESS2 = "TGCz7hLkvBamcSh7TipdFtBaSM2DXeY5aT"  //合约转账
    window.TRONPLEDGEADDRESS = "TC16s3QrYZvXBMv3WSdGkk6UX1fEoa69Sn"  //抵押合约
    window.TRONABTOKEN = "TNbYoP22d74RWy4ETssHsXYFrnmmbQ2fvt"        //tron AB Token
    window.TRONPOKERADDRESS = "TQAeHRPkwwCB7EUhMUes6nswSXWXZrj7mM"  //poker游戏合约
    // 网络标识
    window.NETWORK = 1
    
}
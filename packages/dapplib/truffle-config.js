require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind attitude inflict enter outer giggle'; 
let testAccounts = [
"0x685d5dc5f2087665dac4a9869916ab131467caf4da9ba4e338461473e284f98a",
"0x0abaaf75b701439b9e3d7ca16fdecad42857bf506bbe908a2eeaebceff63e0fe",
"0xc263eed979e9bbd4b2f31fe5291250935e1781217a652b3792ebda4c2f597c4e",
"0xa5e4b7356267d800d3a7eee11856ec2142b218d2cca5e2fe4f157bec817691d4",
"0xcf6996d4ebf8bacbe83cc4404aad55c79eb3e0c82ca35887b33b64bcbbe98e05",
"0x36905c4eed4d5b4ef5ed924af242ed92839ecd6dab996e531927f2138c635cfa",
"0x9bf813e56489c2fc1fbbd8384b7255763c2364f394fc6d35a03ecb698346d534",
"0x8329a08a5e5b9d3c3b595ea26dbdd2367a80de24d74c035d3b3a80b386fe06ee",
"0x8f3858fb351cbcb5f77987734382cc4981625447a396da48c27dd2d5a17a1676",
"0xf6555165a0c0ad7fefb0b75eb691424cf3d75acafe2ade586ab89cc5386fc6ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture struggle repeat muscle coast hope enter metal genre'; 
let testAccounts = [
"0xde757b840b65c3e3cc257a850809e9603c54c4e7ab43e1278615cb8482c4d265",
"0xc099f5bb289c5c653768a60aa2528348d54c37b887a9678831b86ecb569649d9",
"0x5aefab0f4fb2cb7873a17b3cd09b617de73a24f8732a3042bb11056226a36c2e",
"0x11dac044bf68962ae6db523d7381bc2f5c2145b191b0dd944f65fa7816fe5dbb",
"0xe7b893150f0a8981cfb3e21d7b219153fe3a7ca6f5690531d8af27ca6f095f47",
"0xeb4caa81017b7df58c86509239dac2edda48988bd59aa84aed788094f79101c0",
"0xdc07d59a4719527872aad760dd2db1e72058124aae54c798ad9e71e9b836c9e5",
"0x1c676135b658da94194f00e92df51644904c9a9256d0cf600c34f3f859047394",
"0x1049301794643bc5aceed578582695ab1b9c5f5065adcffb19ba8f45f28995f4",
"0x1c215c138b4235431662c73f6533f50db8180683d86f1cb3960f0d812fd7bba2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


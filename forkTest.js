// const elrondCoreJs = require('@elrondnetwork/elrond-core-js');
//
// const Web3 = require('./packages/web3/src/index');
//
// // Build a fresh account
// const sk = 'YTdiMWU4ZTM5ZjFiNGRjZmY2YzY2NDkxZmQ0MTIyZTUzNmE4MjUzNzY5NjJiYTRk\n' +
//     'MzhhMmYyNDQ2ZGFmNjMwMg==';
//
//  const senderAccount = new elrondCoreJs.account();
//  const hexSk = Buffer.from(sk, 'base64').toString();
//  const hexPrivate = Buffer.from(hexSk, 'hex');
//  senderAccount.loadFromSeed(hexPrivate);
//
// const web3Fork = new Web3(new Web3.providers.HttpProvider("http://localhost:8001/web3"));
//
// const account = web3Fork.eth.accounts.privateKeyToAccount(sk);
//
// web3Fork.eth.accounts.wallet.add(account);
//
// web3Fork.defaultAccount = account.address;
//
//
// const constractAddress = "0x000000000000000005008cb96e814817ec3c6078cc05f8ae9387a5a90279d425";
//
// const contractObj = new web3Fork.eth.Contract([
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "getValue",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_state",
//                 "type": "uint256"
//             }
//         ],
//         "name": "setValue",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     }
// ], constractAddress);
//
// const senderAddress = "0x80dba94f907d95c595771cb12433d40145ed02091f25b97c677c7cefd9a4d425";
//
// function convertEthTxToElrondTx(txObj) {
//     const from = txObj.from.slice(2);
//     const to = txObj.to.slice(2);
//     const nonce = parseInt(txObj.nonce.slice(2));
//     const value = txObj.value.slice(2);
//
//     //return  new elrondCoreJs.transaction(txObj.nonce, from, to, txObj.value, "1", "1000", txObj.data);
//     return  new elrondCoreJs.transaction(nonce, from, to, value, txObj.gasPrice, txObj.gas, txObj.data);
// }
//
// function signTx(account, tx) {
//     const elrondTx = convertEthTxToElrondTx(tx);
//
//     elrondTx.signature = account.sign(elrondTx.prepareForSigning());
//     elrondTx.nonce = elrondTx.nonce.toString();
//     elrondTx.gasPrice = elrondTx.gasPrice.toString();
//     elrondTx.gasLimit = elrondTx.gasLimit.toString();
//     return elrondTx;
// }
//
//
// const data = contractObj.methods.setValue(112233).encodeABI();
// console.log(data);
//
// const txObj = {
//     nonce: web3Fork.utils.toHex(1),
//     from: senderAddress,
//     gas: web3Fork.utils.toHex(2000000),
//     gasPrice: web3Fork.utils.toHex(1000),
//     data: data,
//     to: constractAddress,
//     value : "0"
// };
//
// //console.log(senderAccount.publicKeyAsString());
//
// async function testFuncSendSignedTx() {
//     const gasPrice = await web3Fork.eth.getGasPrice();
//     const gasUnits = await web3Fork.eth.estimateGas(txObj);
//
//     console.log("gasPrice: ", gasPrice);
//     console.log("gasUnits: ", gasUnits);
//
//     txObj.gasPrice = parseInt(gasPrice);
//     txObj.gas = gasPrice * gasUnits;
//     txObj.from = web3Fork.utils.toHex(senderAccount.publicKeyAsString());
//
//
//     console.log("total gas: ", gasPrice * gasUnits);
//
//     const signedTx = signTx(senderAccount, txObj);
//     web3Fork.eth.sendSignedTransaction(signedTx);
// }
//
// async function testSmartContractCall() {
//     const response1 = await contractObj.methods.setValue(15).call({from: senderAddress});
//     console.log(response1);
//
//     const response2 = await contractObj.methods.getValue().call({from: senderAddress});
//     console.log(response2);
// }
//
// async function testSmartContractSend() {
//     const response1 = await contractObj.methods.setValue(1).send({from: account.address, gas: 1000000000, gasPrice: 1});
//     console.log(response1);
// }
//
// //testFuncSendSignedTx();
// testSmartContractSend();
//
//
// //testSmartContractCall();
//
//
//
// //console.log(txObj);
//
//
//
//
// //const signedTx = signTx(senderAccount, txObj);
// //console.log(signedTx);
// // web3Fork.eth.getChainId().then(
// //     res => {
// //         console.log("chain id ", res);
// //     }
// // );
// //
// //
// // web3Fork.eth.getBlockNumber().then(
// //     res => {
// //         console.log("block number ", res);
// //     }
// // );
// //
// // web3Fork.eth.getTransactionCount(senderAddress).then(
// //     res => {
// //         console.log("account nonce", res);
// //     }
// // );
// //
// //
// // web3Fork.eth.getGasPrice().then(
// //     res => {
// //         console.log("gas price", res);
// //     }
// // );
//
//
//
//
// //contractObj.methods.setInstructor("iuga", 100).send({from: senderAddress});
//
//
// //web3Fork.eth.sendSignedTransaction(signedTx);
//
//
// //c.setInstructor("iuga", 199);
//
//

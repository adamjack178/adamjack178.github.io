import { ethers } from "ethers"
import Web3Modal from "web3modal";
import ABI from "./abi/console.json"
import ABIlotto from "./abi/lotto.json"
import Swal from 'sweetalert2'

const providerOptions = {};

const web3Modal = new Web3Modal({
    chainId: 0xa869,
    chain: "AVAX",
    network: "avalanche-testnet",
    networkId: 0xa869,
    cacheProvider: true, // optional
    providerOptions, // required
});

class Station {

  constructor() {
    this.contract = null;
    this.contractLotto = null;
    this.consoles = [];
    this.accounts = [];
  }

  getAccount() {
    return this.accounts[0];
  }

   
  async connectWallet() {
    const provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider)
    const signer = ethersProvider.getSigner();

      await provider
        .request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xa869",
              chainName: "FUJI Testnet",
              nativeCurrency: {
                name: "AVAX",
                symbol: "AVAX", // 2-6 characters long
                decimals: 18,
              },
              rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
              blockExplorerUrls: ["https://cchain.explorer.avax-test.network/"],
            },
          ],
        })
    this.accounts[0] = await ethersProvider.send("eth_requestAccounts", []);
    this.contract = new ethers.Contract('0xE70F41944744855647eec543cdCe9Ee17DA676A1', ABI, signer)
    this.contractLotto =  new ethers.Contract('0x5084d841C8fb8D97aE943b858179c91295C16375', ABIlotto, signer)
  }

  async loadContract() {
    let provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider)
    const signer = ethersProvider.getSigner();
    this.accounts = await ethersProvider.listAccounts();

    this.contract = new ethers.Contract('0xE70F41944744855647eec543cdCe9Ee17DA676A1', ABI, signer)
    this.contractLotto =  new ethers.Contract('0x5084d841C8fb8D97aE943b858179c91295C16375', ABIlotto, signer)
    console.log("contracts loaded")
  }

   async checkWL(addy) {
    try {
      let n;
      n = await this.contract.functions.whitelist(addy);
      return n;
    } catch (e) {
      console.error(e.message, e);
    }
  }

  async buyConsole(count,avax) {
    try {
    await this.contract.mint(1, {value: ethers.utils.parseEther("1")}).then((e) =>{console.log(e)})
    
    } catch (e) {
      console.error(e.message, e);
      Swal.fire({
          title: 'Error',
          icon:'warning',
          text:e.data.message,
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          confirmButtonColor: '#202020',
          cancelButtonColor: '#eb3636',
      })
    }
  }

  async loadConsoles() {
    this.ballsCount = 0;
    this.ballsCount = await this.contract.balanceOf(this.account[0])
    const count = parseInt(this.ballsCount)

    for (var i = 0; i < count; i++) {
      let cellID = await this.contract.tokenOfOwnerByIndex(this.account[0], i)

      let parseID = parseInt(cellID)

      let ball = await this.contract.allPlebs(parseID)

      let ballObj = {
        NftData: ball.NftData,
      }

      this.consoles.push(ballObj)
    }
  }
}

export { Station }
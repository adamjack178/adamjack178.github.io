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
    this.tickets = [];
    this.ticketsArcadium = 0;
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
    this.contractLotto =  new ethers.Contract('0x0b6cd869d9cd41eFFAcDe2651C129cd431A027FD', ABIlotto, signer)
  }

  async loadContract() {
    let provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider)
    const signer = ethersProvider.getSigner();
    this.accounts = await ethersProvider.listAccounts();

    this.contract = new ethers.Contract('0xE70F41944744855647eec543cdCe9Ee17DA676A1', ABI, signer)
    this.contractLotto =  new ethers.Contract('0x0b6cd869d9cd41eFFAcDe2651C129cd431A027FD', ABIlotto, signer)
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
      Swal.fire({
          title: 'Error',
          icon:'warning',
          text:e.reason,
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          confirmButtonColor: '#202020',
          cancelButtonColor: '#eb3636',
      })
    }
  }

  async loadTickets() {
    this.tickets = [];
    this.tCount = 0;
    this.tCount = await this.contractLotto.balanceOf(this.getAccount())
    const count = parseInt(this.tCount)

    for (var i = 0; i < count; i++) {
      let ticketID = await this.contractLotto.tokenOfOwnerByIndex(this.getAccount(), i)

      let parseID = parseInt(ticketID)-1

      const ticket = await this.contractLotto.allTickets(parseID)
//console.log(ticket)
      let tObj = {
        id: ticket.Id,
        purchaseTime: ticket.purchaseTime,
        number: ticket.number,
        owner: ticket.owner
      }

      this.tickets.push(tObj)
    }
  }

  async haveConsole() {
    const data = await this.contractLotto.walletHoldsToken()
    return data;
  }

  async buyTicket(number,price) {
    try {
    let price = '0.1';
    const data = await this.haveConsole()
    if(data === true) price = '0.06';
    await this.contractLotto.mint(1, number ,{value: ethers.utils.parseEther(price)}).then(transactionResponse => {
      transactionResponse.wait().then(receipt => {
         setTimeout(async() => { await this.getTotalTicketsArcadium(); await this.loadTickets();})
      })
    })

    } catch (e) {
      Swal.fire({
          title: 'Error',
          icon:'warning',
          text:e.reason,
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          confirmButtonColor: '#202020',
          cancelButtonColor: '#eb3636',
      })
    }
  }

  async getTotalTicketsArcadium() {
    try {
    this.ticketsArcadium = await this.contractLotto.totalSupply()
    const count = parseInt(this.ticketsArcadium)
    this.ticketsArcadium = count;

    } catch (e) {
      console.error(e.message, e);
    }
  }
}

export { Station }
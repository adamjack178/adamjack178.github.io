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
    this.potArcadium = 0;
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
              chainId: "0xa86a",
              chainName: "AVAX Mainnet",
              nativeCurrency: {
                name: "AVAX",
                symbol: "AVAX", // 2-6 characters long
                decimals: 18,
              },
              rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
              blockExplorerUrls: ["https://snowtrace.io/"],
            },
          ],
        })
    this.accounts[0] = await ethersProvider.send("eth_requestAccounts", []);
    this.contract = new ethers.Contract('0xF144A927d21FbF094747F8C00Da0D13b9D3782C9', ABI, signer)
    this.contractLotto =  new ethers.Contract('0x794D9112eDE255D1096Df2E75cE93205899313f1', ABIlotto, signer)
  }

  async loadContract() {
    let provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider)
    const signer = ethersProvider.getSigner();
    this.accounts = await ethersProvider.listAccounts();

    this.contract = new ethers.Contract('0xF144A927d21FbF094747F8C00Da0D13b9D3782C9', ABI, signer)
    this.contractLotto =  new ethers.Contract('0x794D9112eDE255D1096Df2E75cE93205899313f1', ABIlotto, signer)
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
          text:e.data.message,
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
    let price = '0.5';
    const data = await this.haveConsole()
    if(data === true) price = '0.35';
    await this.contractLotto.mint(1, number ,{value: ethers.utils.parseEther(price)}).then(transactionResponse => {
      transactionResponse.wait().then(receipt => {
         setTimeout(async() => { await this.getTotalTicketsArcadium(); await this.loadTickets();})
      })
    })

    } catch (e) {
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

  async getTotalTicketsArcadium() {
    try {
    this.ticketsArcadium = await this.contractLotto.totalSupply()
    const count = parseInt(this.ticketsArcadium)
    this.ticketsArcadium = count;

    } catch (e) {
      console.error(e.message, e);
    }
  }

  async getPotArcadium() {
    try {
    const t = await this.contractLotto.pot();
    const pot = ethers.utils.formatEther(t);
    this.potArcadium = pot;

    } catch (e) {
      console.error(e.message, e);
    }
  }
}

export { Station }
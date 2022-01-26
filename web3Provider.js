// let web3 = new Web3(Web3.givenProvider || "https://bsc-dataseed1.binance.org:443");
let web3 = new Web3("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

window.addEventListener('load', async () => {
    // Check if Web3 has been injected by the browser (Mist/MetaMask).

    if (typeof window.ethereum === 'undefined') {
        // Use Mist/MetaMask's provider.
        Swal.fire({
            icon: "error",
            title: 'Please install Metamask. from metamask.io',
          }).then(() => {
            $("#btnConnectWallet-head").attr("class", "btn btn-secondary btn-sm rounded-pill");
            $("#btnConnectWallet-head").html("<a href='https://metamask.io' target='_blank'>Install Metamask</a>");
          })
        return;
    }
});
window.ethereum.enable();

let walletAccount = "";

//const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

const getBalance = async () => {
    const Balance = await web3.eth.getBalance(walletAccount);
    const Balances = web3.utils.fromWei(Balance);
    return Balances
}

const getAccount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    walletAccount = accounts[0];
    $("#txtBtnConnected1").html(`${walletAccount.substr(0, 6)}...${walletAccount.substr(-4)} : <span class="text-info">${await getBalance()}</span> ETH`)
    $("#txtBtnConnected2").html("Enjoy in Metaverse")
    // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // console.log(accounts[0])
}
getAccount()
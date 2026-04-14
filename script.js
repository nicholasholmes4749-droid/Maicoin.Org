// Connect Walconsole.log("JS connected!");let
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      const walletAddress = accounts[0];
      document.getElementById("walletAddress").innerText =
        "Connected: " + walletAddress;

      console.log("Wallet connected:", walletAddress);

    } catch (error) {
      console.error("Connection failed", error);
    }
  } else {
    alert("Please install MetaMask!");
  }
}

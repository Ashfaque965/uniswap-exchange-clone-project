const { expect } = require("chai");
const { ethers } = require("hardhat");
 

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SwapMultiHop", ()=> {
    let swapMultiHop;
    let accounts;
    let weth;
    let dai;
    let usdc;
    
before(async function() {
        accounts = await ethers.getSigners(1);

        const SwapMultiHop = await ethers.getContractFactory("SwapMultiHop");
        swapMultiHop = await SwapMultiHop.deploy();

        await swapMultiHop.deployed();


        weth = await ethers.getContractAt("contracts/interfaces/IWETH.sol:IWETH", WETH9);
        dai = await ethers.getContractAt("contracts/interfaces/IERC20.sol:IERC20", DAI);
        usdc = await ethers.getContractAt("contracts/interfaces/IERC20.sol:IERC20", USDC);

    });


it("swapExactInputMultihop", async () => {
    const amountIn = 10n ** 18n;

    //deposit WETH
    await weth.deposit({ value: amountIn });

    //approve WETH
    await weth.approve(swapMultiHop.address, amountIn);

    //execute swap
    await swapMultiHop.swapExactInputMultihop(amountIn);
    //console.log(accounts[0].address);
    console.log("Dai balance", await dai.balanceOf(accounts[0].address));
      


//it("should show account balances", async () => {
  //// console.log("Adresse du déploiement :", SwapMultiHop.address);
 //console.log("Compte 2 :", account2.address);
  
  // Afficher les soldes
  //const balance1 = await ethers.provider.getBalance(account1.address);
  //console.log("Solde compte 1:", ethers.utils.formatEther(balance1), "ETH");
//});
  });

it("swapExactOutputMultihop", async () => {
    const wethAmountInMax = 10n ** 18n;
    const daiAmountOut = 100n * 10n ** 18n;

    //deposit WETH
    await weth.deposit({ value: wethAmountInMax });

    //approve WETH
    await weth.approve(swapMultiHop.address, wethAmountInMax);

    //execute swap
    await swapMultiHop.swapExactOutputMultihop(daiAmountOut, wethAmountInMax);
    
    console.log(accounts[0].address);
    console.log("Dai balance", await dai.balanceOf(accounts[0].address));
      
    //console.log(accounts[1].address);
    //console.log("Dai balance", await dai.balanceOf(accounts[0].address));
        

});
});


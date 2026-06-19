const {expect} = require("chai");
const {ethers} = require("hardhat");
const { console } = require("inspector");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken", ()=> {
    let singleSwapToken;
    let accounts;
    let weth;
    let dai;
    let usdc;
    
    before(async () => {
        accounts = await ethers.getSigners(1);

        const SingleSwapToken = await ethers.getContractFactory("contracts/SwapToken.sol:SingleSwapToken");
        singleSwapToken = await SingleSwapToken.deploy();

        await singleSwapToken.deployed();


        weth = await ethers.getContractAt("contracts/interfaces/IWETH.sol:IWETH", WETH9);
        dai = await ethers.getContractAt("contracts/interfaces/IERC20.sol:IERC20", DAI);
        usdc = await ethers.getContractAt("contracts/interfaces/IERC20.sol:IERC20", USDC);

    });

   it("function swapExactInputSingle", async () => {
    const amountIn = 10n ** 18n; // 1 WETH

    // Dépôt d'ETH pour obtenir des WETH
    await weth.deposit({ value: amountIn });
    
    // Approuver le contrat à dépenser nos WETH
    await weth.approve(singleSwapToken.address, amountIn);

    // Exécution du swap
    await singleSwapToken.swapExactInputSingle(amountIn);
    console.log("DAI balance:", await dai.balanceOf(accounts[0].address));
    console.log("dai");
    // Vérification du solde DAI
   // const daiBalance = await dai.balanceOf(accounts[0].address);
    //console.log("DAI balance:", ethers.utils.formatUnits(daiBalance, 18));
});

it("swapExactOutputSingle", async () => {
       const wethAmountInMax = 10n ** 18n;
       const daiAmountOut = 100n * 10n ** 18n;

       //deposit WETH
       await weth.deposit({ value: wethAmountInMax });

       //approve WETH
       await weth.approve(singleSwapToken.address, wethAmountInMax);

       //execute swap
       await singleSwapToken.swapExactOutputSingle(daiAmountOut, wethAmountInMax);
       console.log(accounts[0].address);
       console.log(accounts[1].address);
       console.log("Dai balance", await dai.balanceOf(accounts[0].address));
       console.log("Dai balance", await dai.balanceOf(accounts[1].address));


       it("should show account balances", async () => {
  const [deployer, account1, account2] = await ethers.getSigners();
  
  console.log("Adresse du déploiement :", singleSwapToken.address);
  console.log("Compte 1 :", account1.address);
  console.log("Compte 2 :", account2.address);
  
  // Afficher les soldes
  const balance1 = await ethers.provider.getBalance(account1.address);
  console.log("Solde compte 1:", ethers.utils.formatEther(balance1), "ETH");
});
    });
});


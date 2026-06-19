const hre = require("hardhat");

async function main() {
    // Get the deployer account
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Set gas price to 20 gwei (adjust if needed)
    const gasPrice = hre.ethers.utils.parseUnits('20', 'gwei');

    // Deploy BooToken
    console.log("\nDeploying BooToken...");
    const BooToken = await hre.ethers.getContractFactory("BooToken");
    const booToken = await BooToken.deploy({ 
        gasPrice: gasPrice,
        gasLimit: 6000000
    });
    await booToken.deployed();
    console.log("BooToken deployed to:", booToken.address);

    // Deploy LifeToken
    console.log("\nDeploying LifeToken...");
    const LifeToken = await hre.ethers.getContractFactory("LifeToken");
    const lifeToken = await LifeToken.deploy({ 
        gasPrice: gasPrice,
        gasLimit: 6000000
    });
    await lifeToken.deployed();
    console.log("LifeToken deployed to:", lifeToken.address);

    // Deploy SingleSwapToken
    console.log("\nDeploying SingleSwapToken...");
    const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken");
    const singleSwapToken = await SingleSwapToken.deploy({ 
        gasPrice: gasPrice,
        gasLimit: 6000000
    });
    await singleSwapToken.deployed();
    console.log("SingleSwapToken deployed to:", singleSwapToken.address);

    // Deploy SwapMultiHop
    console.log("\nDeploying SwapMultiHop...");
    const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
    const swapMultiHop = await SwapMultiHop.deploy({ 
        gasPrice: gasPrice,
        gasLimit: 6000000
    });
    await swapMultiHop.deployed();
    console.log("SwapMultiHop deployed to:", swapMultiHop.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
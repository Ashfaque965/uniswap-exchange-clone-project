import { ethers } from "ethers";
import web3Modal from "web3modal";

import {
    BooTokenAddress, 
    BooTokenABI,
    LifeTokenAddress, 
    LifeTokenABI,
    SingleSwapTokenAddress, 
    SingleSwapTokenABI,
    SwapMultiHopAddress, 
    SwapMultiHopABI,
    IWETHAddress,
    IWETHABI,
} from "../Context/constants";

//CHECK IF WALLET IS CONNECT
export const checkIfWalletConnected = async () => {
    try {
        if(!window.ethereum) return console.log("Install MetaMask")
        const accounts = await window.ethereum.request({ 
            method: "eth_Accounts",
        });    
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log("error")
    }
}

//CONNECT WALLET
export const connectWallet = async () => {
    try {
        if(!window.ethereum) return console.log("Install MetaMask")
        const accounts = await window.ethereum.request({ 
            method: "eth_requestAccounts",
        });    
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log("error")
    }
}

//FTCHING CONTRACT-----------------------

//BOO TOKEN FETCHING
export const fetchBooContract = (signerOrProvider) => 
    ethers.Contract(BooTokenAddress, BooTokenABI, signerOrProvider);

//CONNECTING WITH BOO TOKEN CONTRACT 
export const connectingwithBooToken = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchBooContract(signer);
        return contract;
    } catch (error) {
        console.log("error");
    }
}
//FTCHING CONTRACT-----------------------

//LIFE TOKEN FETCHING
export const fetchLifeContract = (signerOrProvider) => 
   new ethers.Contract(LifeTokenAddress, LifeTokenABI, signerOrProvider);

//CONNECTING WITH Life TOKEN CONTRACT 
export const connectingwithLifeToken = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchLifeContract(signer);
        return contract;
    } catch (error) {
        console.log("error");
    }
}

//FTCHING CONTRACT-----------------------

//SINGLE SWAP TOKEN FETCHING
export const fetchSingleSwapContract = (signerOrProvider) => 
   new ethers.Contract(SingleSwapTokenAddress, SingleSwapTokenABI, signerOrProvider);

//CONNECTING WITH Life TOKEN CONTRACT 
export const connectingwithSingleSwapToken = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchSingleSwapContract(signer);
        return contract;
    } catch (error) {
        console.log("error");
    }
}

//FTCHING CONTRACT-----------------------

//IWETH TOKEN FETCHING
export const fetchIWETHContract = (signerOrProvider) => 
   new ethers.Contract(IWETHAddress, IWETHABI, signerOrProvider);

//CONNECTING WITH IWETH TOKEN CONTRACT 
export const connectingwithIWETHToken = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchIWETHContract(signer);
        return contract;
    } catch (error) {
        console.log("error");
    }}


//FTCHING CONTRACT-----------------------

//DAI TOKEN FETCHING
const DAIaddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
export const fetchDAIContract = (signerOrProvider) => 
   new ethers.Contract(DAIaddress, DAIABI, signerOrProvider);

//CONNECTING WITH DAI TOKEN CONTRACT 
export const connectingwithDAIToken = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchDAIContract(signer);
        return contract;
    } catch (error) {
        console.log("error");
    }
};
import React, {useState, useEffect} from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";



//INTERNAL IMPORT
import { 
    checkIfWalletConnected,
    connectWallet,
    connectingwithBooToken,
    connectingwithLifeToken,
    connectingwithSingleSwapToken,
    connectingwithIWETHToken,
    connectingwithDAIToken,
} from "../Utils/appFeatures";

import { IWETHABI } from "./constants";
import ERC20 from "./ERC20.json";

export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({ children }) => {

    const swap = "Welcom to swap my token";

    //USESTATE
    const [account, setAccount] = useState('');
    const [ether, setEther] = useState("");
    const [networkConnected, setNetworkConnected] = useState('');
    const [weth9, setWeth9] = useState("");
    const [dia, setDia] = useState("");

    const [tokenData, setTokenData] = useState([]);

    const addToken = [
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 
      "0x5FbDB2315678afecb367f032d93F642f64180aa3", 
      "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    ];

    //FETCH DATA
    const fetchingData = async()=> {
      try {
        //GET USER ACCOUNT
        const userAccount = await checkIfWalletConnected();
        setAccount(userAccount);
        //CREATE PROVIDER
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        //CHECK BALANCE
        const balance = await provider.getBalance(userAccount);
        const convertBal = BigNumber.from(balance).toString();
        const ethValue = ethers.utils.formatEther(convertBal);
        setEther(ethValue);

        //ALL TOKEN BALANCE AND DATA
        addToken.map(async (el, i) => {
          //GETTING CONTRACT
          const contract = new ethers.Contract(el, ERC20, provider);
          //GETTING BALANCE OF token
          const userBalance = await contract.balanceOf(userAccount);
          const tokenLeft = BigNumber.from(userBalance).toString();
          const convertTokenBal = ethers.utils.formatEther(tokenLeft);
          console.log(convertTokenBal);
        });

        

      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
      fetchingData();
    },[])

    return (
    <SwapTokenContext.Provider value={{swap}}>{children}</SwapTokenContext.Provider>
    ); 
};


const SwapContext = () => {
  return (
    <div>SwapContext</div>
  )
}

export default SwapContext
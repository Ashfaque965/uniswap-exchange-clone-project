import React from 'react'
import Image from "next/image";

//Internal import
import Style from "./Model.module.css";
import images from "./../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  //Usestate
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];
  return (
  <div className={Style.Model}>
    <div className={Style.Model_box}>
      <div className={Style.Model_box_heading}>
        <p>Connect a wallet</p>
        <div className={Style.Model_box_heading_img}>
          <Image 
            src={images.cross}
            alt="logo"
            width={50}
            height={50}
            onClick={() => setOpenModel(false)}
          />
      </div>
    </div>  
        <div className={Style.Model_box_wallet}>
            {walletMenu.map((el, i) => (
              <p key={i + 1} onClick={() => connectWallet()}>
                {el}
              </p>
            ))}
        </div>
      
     
        <p className={Style.Model_box_para}>
          By connecting a wallet, you agree to Uniswap labs'
          <br/> Terms and consent to its Privacy Policy.
        </p>
    </div>
</div>  
);
};

export default Model;
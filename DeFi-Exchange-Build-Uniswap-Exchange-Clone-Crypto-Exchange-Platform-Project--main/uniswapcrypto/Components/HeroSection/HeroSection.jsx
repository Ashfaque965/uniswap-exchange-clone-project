import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, ToTokenList, SearchToken } from "../index";

const HeroSection = ({ accounts, tokenData }) => {
  //USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  //TOKEN 1
  const [TokenOne, setTokenOne] = useState ({
    name:"",
    image:"",
  });

 //TOKEN 2
 const [TokenTwo, setTokenTwo] = useState ({
  name:"",
  image:"",
});

//JSK
  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
        <div className={Style.HeroSection_box_heading_img}>
          <Image src={images.closse}
          alt="image"
          width={50}
          height={50}
          onClick={()=> setOpenSetting(true)}
          />
          </div>
      </div>

      <div className={Style.HeroSection_box_input}>
        <input type="text" placeholder="0" />
        <button onClick={()=> setOpenToken(true)}>
        <Image 
          src={images.image || images.etherlogo} 
          width={20}
          height={20}
          alt="ether"
        />
        {TokenOne.name || "ETH"}
        <small>9474</small>
        </button>
      </div>

      <div className={Style.HeroSection_box_input}>
        <input type="text" placeholder="0" />
        <button onClick={()=> setOpenTokenTwo(true)}>
        <Image 
          src={TokenTwo.image || images.etherlogo} 
          width={20}
          height={20}
          alt="ether"
        />
        {TokenTwo.name || "ETH"}
        <small>9474</small>
        </button>
      </div>

      {accounts ? (
        <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
      ) : (
        <button className={Style.HeroSection_box_btn} onClick={() => {}}>Swap</button>
      )}
    </div>

    {openSetting && <Token setOpenSetting={setOpenSetting} />}

    {openToken && (
       <SearchToken
          openToken={setOpenToken}
          tokens={(setTokenOne)}
          tokenData={tokenData}
       />  
    )}
    {openTokenTwo && (
      <SearchToken
         openToken={setOpenTokenTwo}
         tokens={(token) => setTokenTwo(token)}
         tokenData={tokenData}
      />
    )}
    </div>
  );
};

export default HeroSection;
import React from 'react'
import classes from "./Wallet.module.css"
import { useNavigate } from 'react-router-dom'

const Wallet = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

  return (
    <div>
      <div className={classes.wallet_top}>
        <div className={classes.wallet_top_main}>
            <ion-icon name="arrow-back-outline" onClick={goBack}></ion-icon>
            <h3>Wallet</h3>
        </div>

        <div>
            <p>History</p>
        </div>
      </div>

      <div className={classes.wallet_body}>
        <div className={classes.wallet_card}>
            <div className={classes.wallet_card_top}>
                <small>Your balance</small>
                <h1>#20,000</h1>
                <button className={classes.fund_wallet_btn}>
                    <ion-icon name="add-outline"></ion-icon>
                    <p>Fund wallet</p>
                </button>
            </div>
            <div className={classes.wallet_card_bottom}>
                <div className={classes.account_dieplay}>
                    <p>Paystact-Titan - 9860346267</p>
                    <button>
                        <ion-icon name="copy-outline"></ion-icon>
                        <p>Copy</p>
                    </button>
                </div>
                <small>Transfer to this account instantly fund your Edumart wallet</small>
            </div>
        </div>

        <div className={classes.action_box}>
            <div>
                <ion-icon name="add-outline"></ion-icon>
                <p>Add new card</p>
            </div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>

        <div className={classes.gift_card_area}>
            <h3>Gift Cards</h3>

            <div className={classes.action_box}>
                <div>
                    <ion-icon name="gift-outline"></ion-icon>
                    <p>Buy or redeem a gift card</p>
                </div>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
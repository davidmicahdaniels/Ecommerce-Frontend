import React from 'react'
import classes from "./Wallet.module.css"

const Wallet = () => {
  return (
    <div>
      <div className={classes.wallet_top}>
        <div className={classes.wallet_top_main}>
            back
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
                <button className={classes.fund_wallet_btn}>icon Fund wallet</button>
            </div>
            <div className={classes.wallet_card_bottom}>
                <div className={classes.account_dieplay}>
                    <p>Paystact-Titan - 9860346267</p>
                    <button>
                        icon
                        <p>Copy</p>
                    </button>
                </div>
                <small>Transfer to this account instantly fund your Edumart wallet</small>
            </div>
        </div>

        <div className={classes.action_box}>
            <div>
                icon
                <p>Add new card</p>
            </div>
            icon
        </div>

        <div className={classes.gift_card_area}>
            <h3>Gift Cards</h3>

            <div className={classes.action_box}>
                <div>
                    icon
                    <p>Buy or redeem a gift card</p>
                </div>
                icon
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
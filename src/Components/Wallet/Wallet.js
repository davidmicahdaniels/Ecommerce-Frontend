import React from 'react'

const Wallet = () => {
  return (
    <div>
      <div className="wallet_top">
        <div className="wallet_top_main">
            back
            <h3>Wallet</h3>
        </div>

        <div>
            <p>History</p>
        </div>
      </div>

      <div className="wallet_body">
        <div className="wallet_card">
            <div className="wallet_card_top">

            </div>
            <div className="wallet_card_bottom">
                <div className="account_dieplay">
                    <p>Paystact-Titan - 9860346267</p>
                    <button>
                        icon
                        <p>Copy</p>
                    </button>
                </div>
                <small>Transfer to this account instantly fund your Edumart wallet</small>
            </div>
        </div>

        <div>
            <div>
                icon
                <p>Add new card</p>
            </div>
            icon
        </div>

        <div>
            <h3>Gift Cards</h3>

            <div>
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
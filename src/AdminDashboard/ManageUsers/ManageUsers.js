import React from 'react'
import classes from "./ManageUsers.module.css"
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import { UserLoginData } from '../../Data/UserLoginData'

const ManageUsers = () => {
  return (
    <div className={classes.dashboard}>
      <AdminSidebar />

        <div className={classes.users_display_area}>
            <h2>Manage Users</h2>

            <div className={classes.user_cards_wrapper}>
                {
                    UserLoginData.map((user) => {
                        return <div className={classes.user_card}>
                            <div className={classes.card_img_wrapper}>
                                <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png' alt='' /> 
                            </div>
                            <div className={classes.user_details}>
                                <h3>{user.fullname}</h3>
                                <p>I there, I'm an edumart user.</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
      
    </div>
  )
}

export default ManageUsers

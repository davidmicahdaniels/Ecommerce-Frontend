import React, { useEffect, useState } from 'react'
import classes from "./ManageUsers.module.css"
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import { UserLoginData } from '../../Data/UserLoginData'
import { baseUrl } from '../../App'

const ManageUsers = () => {
     const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setMessage("");

      try {
        const token = localStorage.getItem("edumart_admin_token");

        const res = await fetch(`${baseUrl}/admin/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data.users || []);
        setPagination(data.pagination || {});
      } catch (error) {
        console.error(error);
        setMessage(error.message || "Something went wrong while fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={classes.dashboard}>
      <AdminSidebar />

        <div className={classes.users_display_area}>
            <h2>Manage Users</h2>


        {loading && 
                    <div className={classes.loaderWrapper}>
                      <div className={classes.loader}></div>
                      <p>Loading users...</p>
                    </div>
        }

        {message && !loading && (
          <p className={classes.error_text}>{message}</p>
        )}

        {!loading && users.length > 0 && (
          <div className={classes.users_grid}>
            {users.map((user, index) => (
              <div key={index} className={classes.user_card}>
                <div className={classes.user_header}>
                  <h3>{user.first_name} {user.last_name}</h3>
                  <small>{user.email}</small>
                </div>

                <div className={classes.user_details}>
                  <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
                  <p><strong>Address:</strong> {user.address || "N/A"}</p>
                  <p><strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && users.length === 0 && !message && (
          <p className={classes.empty_text}>No users found.</p>
        )}
            {/* <div className={classes.user_cards_wrapper}>
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
            </div> */}
        </div>
      
    </div>
  )
}

export default ManageUsers

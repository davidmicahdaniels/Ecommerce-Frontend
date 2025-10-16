import React, { useEffect, useState } from "react";
import classes from "./ManageVendors.module.css";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import img from "../../Assets/Images/prod3.png";
import { VendorsData } from "../../Data/VendorsData";
import { baseUrl } from "../../App";

const ManageVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // All vendors list state
  const [allVendors, setAllVendors] = useState([]);

  // Loading state for the "All Vendors" fetch (separate from pending-vendors loader)
  const [loadingVendors, setLoadingVendors] = useState(false);

  // Message / error state for the "All Vendors" section (optional but helpful)
  const [vendorsMessage, setVendorsMessage] = useState("");

  const [approvingId, setApprovingId] = useState(null);

  // Approve Vendor Handler
  const handleApprove = async (vendor_id) => {
    console.log(vendor_id);
    
    setApprovingId(vendor_id);
    setMessage("");

    try {
      const token = localStorage.getItem("edumart_admin_token");

      const res = await fetch(`${baseUrl}/auth/admins/approve-vendor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ vendorId: vendor_id, "approve": true }),
      });

      const data = await res.json();
      console.log("Approve response:", data);

      if (res.ok) {
        setMessage("Vendor approved successfully!");
        setTimeout(() => window.location.reload(), 3000);
      } else {
        setMessage(data.message || "Failed to approve vendor");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Try again.");
    } finally {
      setApprovingId(null);
    }
  };

  useEffect(() => {
    const fetchPendingVendors = async () => {
      setLoading(true);
      setMessage("");
      try {
        const token = localStorage.getItem("edumart_admin_token");

        if (!token) {
          setMessage("No admin token found. Please log in first.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${baseUrl}/auth/admins/pending-vendors`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log("Pending Vendors Response:", data);

        if (res.ok && data.pending_vendors) {
          setVendors(data.pending_vendors);
        } else {
          setMessage(data.message || "Failed to load pending vendors.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setMessage("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingVendors();

    const fetchVendors = async () => {
      setLoadingVendors(true);
      const token = localStorage.getItem("edumart_admin_token");

      try {
        const res = await fetch(`${baseUrl}/admin/vendors`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch vendors");
        }

        const data = await res.json();
        setAllVendors(data.vendors || []); // adjust key if needed
      } catch (err) {
        console.error("Error fetching vendors:", err);
      } finally {
        setLoadingVendors(false);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className={classes.dashboard}>
      <AdminSidebar />

      <div className={classes.vendor_display_area}>
        <h2>Manage Vendors</h2>

        {/* All Vendors Section */}
        <section className="">
          <h2>All Vendors</h2>

          {loadingVendors ? (
            <div className={classes.loaderWrapper}>
              <div className={classes.loader}></div>
              <p>Loading All vendors...</p>
            </div>
          ) : allVendors.length === 0 ? (
            <p className={classes.message}>No pending vendors found.</p>
          ) : (
            <div className={classes.tableWrapper}>
              <table className={classes.vendorTable}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Business Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Contact Person</th>
                    <th>Date Registered</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {allVendors.map((vendor, index) => (
                    <tr key={vendor.id || index}>
                      <td>{index + 1}</td>
                      <td>{vendor.business_name}</td>
                      <td>{vendor.email}</td>
                      <td>{vendor.business_phone}</td>
                      <td>{vendor.contact_person}</td>
                      <td>
                        {new Date(vendor.created_at).toLocaleString("en-GB", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </td>
                      {/* <td>
                      <button>Approve</button>
                    </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* <div className={classes.vendor_cards_wrapper}>
            {
                VendorsData.map((vendor) => {
                    return (
                        <div className={classes.vendor_card}>
                                <div className={classes.vendor_img_Wrapper}>
                                    <img className={classes.vendor_img} src="https://images.freeimages.com/image/thumbs/374/instabutton-png-design-5690390.png" alt='' />
                                </div>
                                <div className={classes.vendor_details_Area}>
                                    <h3>{vendor.vendor_name}</h3>
                                    <p>{vendor.vendor_description.p1}</p>
                                    <button className={classes.vendor_btn}>Manage Vendor</button>
                                </div>
                            </div>
                        )
                })
            }
        </div> */}

        <div className="">
          <h2>Pending Vendor Approvals</h2>

          {message && (
            <p
              style={{
                color: message.includes("success") ? "green" : "red",
                fontWeight: 500,
              }}
            >
              {message}
            </p>
          )}

          {loading ? (
            <div className={classes.loaderWrapper}>
              <div className={classes.loader}></div>
              <p>Loading pending vendors...</p>
            </div>
          ) : message ? (
            <p className={classes.message}>{message}</p>
          ) : vendors.length === 0 ? (
            <p className={classes.message}>No pending vendors found.</p>
          ) : (
            <div className={classes.tableWrapper}>
              <table className={classes.vendorTable}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Business Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Contact Person</th>
                    <th>Date Registered</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr key={vendor.id || index}>
                      <td>{index + 1}</td>
                      <td>{vendor.business_name}</td>
                      <td>{vendor.email}</td>
                      <td>{vendor.business_phone}</td>
                      <td>{vendor.contact_person}</td>
                      <td>
                        {new Date(vendor.created_at).toLocaleString("en-GB", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </td>
                      <td>
                        <button
                          onClick={() => handleApprove(vendor.id)}
                          disabled={approvingId === vendor.id}
                        >
                          {approvingId === vendor.id
                            ? "Approving..."
                            : "Approve"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageVendors;

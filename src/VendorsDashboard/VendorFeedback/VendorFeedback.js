import React from 'react'
import classes from "./VendorFeedback.module.css"
import { FaStar } from "react-icons/fa";
import { ReviewData } from '../../Data/ReviewData';


const VendorFeedback = () => {
  return (
    <div className={classes.main_area}>
      <h2 className="">All Reviews</h2>


      <div className={classes.feesbacks_box_wrapper}>
        {
          ReviewData.map((review) => {
            return <div className={classes.feedback_box}>
              <h3>{review.title}</h3> 
              <p>{review.description}</p>
              <div className={classes.star_wrapper}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <button className={classes.review_btn}>View Review</button>
            </div>
          })
        }
        {/* <div className={classes.feedback_box}>
          <h3>Bad product condition</h3> 
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className={classes.review_btn}>View Review</button>
        </div>
        <div className={classes.feedback_box}>
          <h3>Bad product condition</h3> 
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className={classes.review_btn}>View Review</button>
        </div>
        <div className={classes.feedback_box}>
          <h3>Bad product condition</h3> 
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className={classes.review_btn}>View Review</button>
        </div>
        <div className={classes.feedback_box}>
          <h3>Bad product condition</h3> 
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className={classes.review_btn}>View Review</button>
        </div>
        <div className={classes.feedback_box}>
          <h3>Bad product condition</h3>
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className={classes.review_btn}>View Review</button>
        </div> */}
      </div>
    </div>
  )
}

export default VendorFeedback

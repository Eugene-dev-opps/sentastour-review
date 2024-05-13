/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import './style.css'; // Make sure to include your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS


interface Review {
  name: string;
  comment: string;
  rating: number;
}

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({ name: '', comment: '', rating: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };
  const references = [`planet's`,`it's`]
  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', comment: '', rating: 0 });
  };


  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container mx-auto flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
      {/* Use the Image component */}
      <Image src="/public/Sentas-Logo2.png" alt="Logo" width={100} height={50} />
       </div>
          <nav>
            <ul className="flex space-x-4 text-white">
              <li>
                <a href="#" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Destinations</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Visa Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

       {/* Main Content */}
       <main className="container mx-auto my-8">
       <div className="tourism-section">
          <h2 className='h2'>Sentastours Tourism</h2>
          {/*@ts-ignore*/}
          <p>Nature and wildlife tours offer an immersive experience that transcends mere sightseeing, 
            allowing travelers to connect deeply with the natural world. 
            These tours unveil the wonders of our {references[0]} diverse ecosystems,
             from lush rainforests to vast savannas and pristine marine environments. 
             Immerse yourself in the vibrant colors of exotic flora, witness majestic wildlife in their natural habitats,
              and feel the rhythm of nature as you explore. 
              Whether {references[1]} encountering endangered species, marveling at breathtaking landscapes, or learning about local conservation efforts,
               nature and wildlife tours offer a profound sense of awe and appreciation for the beauty and complexity of life on Earth. 
               Each experience is a journey of discovery,
             fostering a deep respect for our {references[0]} biodiversity and inspiring a desire to protect and preserve these natural treasures for future generations.</p>
        </div>
        <div className="review-section">
          <h2>Share your experience with us below! Your review matters to us and helps others see and engage with our services.</h2>
        {/* Display existing reviews */}
        

        {/* Review Submission Form */}
        <form onSubmit={handleSubmitReview} className="my-8 p-4 border border-gray-300 rounded-lg">
          <h2 className="head2">Submit your Review</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="comment"
            placeholder="Your Review"
            value={newReview.comment}
            onChange={handleInputChange}
            className="w-full h-24 mb-2 p-2 border border-gray-300 rounded"
            required
          />
          {/* Rating input field */}
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={newReview.rating}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
            min="1"
            max="5"
            required
          />
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit Review
          </button>
        </form>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-2">
                  <img src={`https://i.pravatar.cc/50?u=${review.name}`} alt={review.name} className="w-10 h-10 rounded-full" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">{review.name}</p>
                  <p className="text-gray-600 text-sm">A few seconds ago</p>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
              {/* Display rating stars */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-yellow-500 fill-current ${i >= review.rating ? 'text-gray-300' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1l2.32 6.711H18.7l-5.982 4.376 2.314 6.738L10 14.356 4.968 18.825l2.314-6.738L1.3 7.711h6.368L10 1z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>

{/*Footer content*/}
<footer className="text-center text-lg-start" style={{ backgroundColor: '#db6930' }}>
      <div className="container d-flex justify-content-center py-5">
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
          <i className="fab fa-youtube"></i>
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
          <i className="fab fa-instagram"></i>
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
          <i className="fab fa-twitter"></i>
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">Sentastours. All rights reserved.</a>
      </div>
      {/* Copyright */}
    </footer>
    </div>
  );
}

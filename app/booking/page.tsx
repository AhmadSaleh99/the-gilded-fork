"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type BookingFormInputs = {
  name: string;
  email: string;
  guests: number;
};

const BookingForm = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormInputs>();

  const onSubmit = async (data: BookingFormInputs) => {
    const bookingData = { ...data, date };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert("Your table has been booked successfully!");
        reset();
        setDate(new Date());
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500">
        {/* Form Section */}
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Reserve a Table</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              {typeof errors.name?.message === "string" && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              {typeof errors.email?.message === "string" && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Guests */}
            <div>
              <input
                type="number"
                {...register("guests", {
                  required: "Number of guests is required",
                  min: { value: 1, message: "At least 1 guest required" },
                })}
                placeholder="Number of guests"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              {typeof errors.guests?.message === "string" && (
                <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                minDate={new Date()}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3 font-medium text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Reserve a Table"}
            </button>
          </form>
        </div>

        {/* Image Section (Hidden on small) */}
        <div className="hidden lg:block relative overflow-hidden">
          <img
            src="/resturant.jpg"
            alt="Restaurant ambience"
            className="h-full w-full object-cover scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

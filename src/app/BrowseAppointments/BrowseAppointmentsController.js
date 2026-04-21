"use client"

import React, { useState, useEffect } from "react";
import { getBookedAppointments } from "@/app/BrowseAppointments/BrowseAppointmentsAPI";
import { getSessionUserID } from "@/lib";
import BrowseAppointmentsView from "./BrowseAppointmentsView";
import { removeAppointment } from "./BrowseAppointmentsAPI";

const BrowseAppointmentsController = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch booked appointments when the component mounts
    const fetchAppointments = async () => {
      try {
        // Fetch the current user's session
        const sessionUserID = getSessionUserID();

        // Fetch booked appointments for the current user
        const response = await getBookedAppointments(sessionUserID);

        if (response) {
          // Update state with fetched appointments

          setAppointments(response);
          // console.log("Response", response)
          // console.log("Appointments", appointments)
        } else {
          // Handle error
          // console.error(response.error);
        }
      } catch (error) {
        // console.error("Error fetching appointments:", error);
      }
    };
    // actually call the function
    fetchAppointments().then((r) => {});

    // getSessionUserID().then(
    //     (sessionUserID) => {
    //         getBookedAppointments(sessionUserID).then(
    //             (response) => {
    //                 if (response) {
    //                     // Update state with fetched appointments
    //
    //                     setAppointments(response);
    //                     // console.log("Response", response)
    //                     // console.log("Appointments", appointments)
    //                 } else {
    //                     // Handle error
    //                     // console.error(response.error);
    //                 }
    //             }
    //         )
    //     }
    // ).catch((error) => {})
  }, []);

  // Function to handle deletion of an appointment
  const handleDelete = (appointmentId) => {
    // Implement deletion logic here
    removeAppointment(appointmentId)
      .then((response) => {
        if (response) {
          console.log("Deleting appointment with ID:", appointmentId);

            // remove appointment from appointments state to update page
            setAppointments((prevAppointments) =>
                prevAppointments.filter((appointment) => appointment.appointment_id !== appointmentId)
            );

          alert("Appointment cancelled successfully!");
        } else {
          alert("Internal error: Unable to find appointment.");
        }
      })
      .catch((error) => {
        console.error("Error deleting appointment:", error);
        alert("Failed to cancel appointment. Please try again.");
      });
  };

  return <BrowseAppointmentsView appointments={appointments} handleDelete={handleDelete} />;
};;

export default BrowseAppointmentsController;

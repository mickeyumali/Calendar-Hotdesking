"use client";
import React from "react";
import listPlugin from '@fullcalendar/list';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from '@fullcalendar/multimonth';
import dynamic from 'next/dynamic';
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Calendar() {
  const events= [
    {
      title : "Hotdesk",
      start: "2024-01-05T08:00:00",
      end: "2024-01-05T09:00:00",
    }
  ];
  const Header = dynamic(() => import('./components/Header'), {
    ssr: true,
  });
  return (
    <>
    <div className=" mx-7  mt-9">
      <Header />
    </div>
    <div className="bg-white text-black m-14 ">
      
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, multiMonthPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "dayGridMonth,timeGridDay,multiMonthYear",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        }}
        height={"100vh"}
        selectable={true}
        dayHeaderClassNames={'bg-blue-900 text-white rounded-md'}
        events={events}
        eventDidMount={(info) =>{
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content:
              "<p><strong>Name:</strong> John Michael Umali</p> <p><strong>seat:</strong>Desk03</p> <p><strong>Date:</strong>2024-01-05</p> ",
            html: true,
          });
        }}
        
        
      />
    </div>
    </>
  );
}


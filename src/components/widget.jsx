import React from "react";

export default function Widget() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", columnGap:'20px' }}>
        <div
          style={{
            backgroundColor: "gray",
            height: "50px",
            width: "40px",
            columnGap: "20px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div
          style={{
            border: "solid 1px gray",
            width: "100%",
            height: "50px",
            alignItems:'center',
            display:'flex',
            justifyContent:'center',
            opacity:'0.5'
          }}
        >
         
          join the discussion
        </div>
      </div>
    </div>
  );
}

"use client";
import { signOut } from "next-auth/react";
import React from "react";

export const SignOut = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="font-medium hover:bg-gray-300 p-2 rounded-lg"
      >
        signOut
      </button>
    </div>
  );
};

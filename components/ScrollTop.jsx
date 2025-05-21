"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const ScrollTop = () => {
  const path = useRouter().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return null;
};

import React from "react";

export type HeadTemplateProps = {
  title?: string;
  meta?: {
    title: string;
    url: string;
    desc: string;
    og_image: string;
  };
};

export type PageLoaderProps = {
  type: "full" | "small";
};

export type UserLocation = {
  status: "success" | undefined;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
};

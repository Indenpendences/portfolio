import Head from "next/head";
import React from "react";

type Props = {
  title: String;
};

const Meta = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;

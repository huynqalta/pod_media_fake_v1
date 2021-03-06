import React, { useContext } from "react";
import InforDevice from "./Components/InfoLogDevice";
import ListLogDevice from "./Components/ListLogDevice";
import { useParams } from "react-router-dom";

import { Card } from "antd";
import { LanguageContext } from "@shared/Context/Language";

interface Props {}

const DetailDevice = (props: Props) => {
  const params = useParams();
  const { language } = useContext(LanguageContext);

  const deviceId = params["deviceId"];

  return (
    <>
      <h1>Day laf DetailDevice</h1>
    </>
  );
};

export default DetailDevice;

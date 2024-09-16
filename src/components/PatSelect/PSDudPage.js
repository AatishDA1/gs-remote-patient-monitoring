import React, { useState, useEffect } from "react";

export var name = "";

export default function PSDudpage(props) {
  const [patName, setPatName] = useState("");
  const [patProps, setPatProps] = useState("");
  useEffect(() => {
    props.info === undefined
      ? console.log("props notdefined")
      : setPatProps(props.info);
  });
  useEffect(() => {
    if (patProps.data === undefined) {
      console.log("pat not defined");
    } else {
      setPatName(patProps.data.name);
    }
  }, [patProps]);
  name = patName;
  console.log("name: " + name);
}

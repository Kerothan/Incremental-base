'use client'

import React from "react";

export default function GameMain() {
    const [res1, setRes1] = React.useState(0);

    function handleclick() {
        setRes1(res1 + 1);
    }
    return (
        <div><div>Resource 1 = {res1}</div><button className="btn btn-red" onClick={handleclick}>Get Resource 1</button></div>
      );
}
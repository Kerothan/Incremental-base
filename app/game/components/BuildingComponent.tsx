import React, { useState } from "react";

import { BUILDINGS } from "../data/buildings";

export default function BuildingComponent({building}:{building:any}) {
    return(
        <>
            <div className="relative">{building.name}: {building.desc}</div>
        </>
    )
}
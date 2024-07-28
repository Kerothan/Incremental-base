import React, { useState } from "react";

import { RESOURCES } from "../data/resources";

export default function ResourceComponent({resource}:{resource:any}) {
    return(
        <>
            <div className="relative">{resource.name}: {resource.desc}</div>
        </>
    )
}
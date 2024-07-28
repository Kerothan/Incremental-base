'use client'

import React from "react";
import items from "../data/items.json";

import ResourceComponent from "./ResourceComponent";
import BuildingComponent from "./BuildingComponent";

import {BUILDINGS} from "../data/buildings"
import {RESOURCES} from "../data/resources"

//Main class for game
export default function GameMain() {
    const [resources, setResources] = React.useState(RESOURCES);
    const [buildings, setBuildings] = React.useState(BUILDINGS);

    function handleclick(action: Function, res: any) {
        action(res.count + 1);
    }
    return (
        <>
            <div>
                {resources.map((resource,index) => (
                    <ResourceComponent key={index} resource={resource}></ResourceComponent>
                ))}
            </div>
            <div>
                {buildings.map((building,index)=>(
                    <BuildingComponent key={index} building={building}></BuildingComponent>
                ))}
            </div>
        </>
      );
}
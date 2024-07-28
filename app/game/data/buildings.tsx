import { OPS } from "../constants/constants"

// repository for building base data
export const BUILDINGS = [{
    id: "res1gen",
    name:"Resource 1 generator",
    desc:"A generator for resource 1",
    cost:[{ id: "res1", amount:5}],
    onTick:[{id:"res1",op:OPS.ADD,amount:1}]
}]
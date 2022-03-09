/*
Describe the shape

You will be given the number of angles of a shape with equal sides and angles, and you need to return the number of its sides, and the measure of the interior angles.
 */

function describeTheShape( angles ){
    return  angles > 2
        ? `This shape has ${angles} sides and each angle measures ${Math.floor(180*(angles-2)/angles)}`
        :"this will be a line segment or a dot"
}
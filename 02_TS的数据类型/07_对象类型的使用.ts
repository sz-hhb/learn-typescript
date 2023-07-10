type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printCoordinate(point: PointType) {
  console.log("x坐标:", point.x);
  console.log("y坐标:", point.y);
}

printCoordinate({ x: 20, y: 20 });

export {};

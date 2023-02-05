import React, { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "./BabylonCanvas.css";

const BabylonCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const engine = new BABYLON.Engine(canvasRef.current, true);
    const scene = createScene(engine, canvasRef.current);

    engine.runRenderLoop(() => {
      scene.render();
    });
  }, []);

  const createScene = (
    engine: BABYLON.Engine,
    canvas: HTMLCanvasElement
  ): BABYLON.Scene => {
    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.ArcRotateCamera(
      "camera1",
      0,
      0,
      -2,
      new BABYLON.Vector3(15, 5, -10),
      scene
    );

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, options, scene
    const sphere = BABYLON.MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 2, segments: 32 },
      scene
    );

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, options, scene
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ground = BABYLON.MeshBuilder.CreateGround(
      "ground",
      { width: 6, height: 6 },
      scene
    );

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0);

    return scene;
  };

  return <canvas ref={canvasRef} className="Babylon-canvas" />;
};

export default BabylonCanvas;

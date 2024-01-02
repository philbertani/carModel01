import * as THREE from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

THREE.Cache.enabled = true;

export function loadFBX(filename, displayInfo) {
  const loader = new FBXLoader();

  return new Promise((resolve, reject) => {

    loader.load(
      filename,
      //load() calls this function if everything works out
      //so the Promise resolve() goes in here
      (data) => resolve(data),
      (xhr) => { displayInfo.innerText = (xhr.loaded / xhr.total) * 100 + '% loaded' },
      (error) => reject(new Error(error))  //error function
    );
  });
}

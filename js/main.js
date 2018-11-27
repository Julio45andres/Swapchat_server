"use strict";

// Por el momento solo haremos streaming de video
const mediaStreamConstraints = {
  video: true
};

// Elemento de video en donde pondremos el stream
const localVideo = document.querySelector("video");

// Stream local que será reproducido en el video
let localStream;

// Se hace cargo del success añadiendo el MediaStream al elemento de video
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Se hace cargo del error logeando el mensaje de error a la consola
function handleLocalMediaStreamError(error) {
  console.log("navigator.getUserMedia error: ", error);
}

// Inicializa el media stream
navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream)
  .catch(handleLocalMediaStreamError);

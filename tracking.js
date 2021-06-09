navigator.getUserMedia;

const defaultParams = {
    flipHorizontal: false,
    outputStride: 16,
    imageScaleFactor: 1,
    maxNumBoxes: 20,
    iouThreshold: 0.2,
    scoreThreshold: 0.6,
    modelType: "ssd320fpnlite",
    modelSize: "large",
    bboxLineWidth: "2",
    fontSize: 17,
};

const video = document.querySelector('#video');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;

handTrack.startVideo(video).then(status => {
        if (status) {
            navigator.getUserMedia(
                { video: {} }, 
                stream => {
                    video.srcObject = stream;
                    setInterval(runDetection, 1000);
            },
            err => console.log(err)
            );
        }
    });

function runDetection(){
    model.detect(video)
    .then(predictions => {
        console.log(predictions);
    });
}
handTrack.load(defaultParams).then(lmodel => {
        model = lmodel;
    });

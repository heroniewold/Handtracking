navigator.getUserMedia;

const defaultParams = {
    flipHorizontal: false,
    outputStride: 16,
    imageScaleFactor: 1,
    maxNumBoxes: 200,
    iouThreshold: 0.2,
    scoreThreshold: 0.6,
    modelType: "ssd320fpnlite",
    modelSize: "large",
    bboxLineWidth: "2",
    fontSize: 17,
    videoHeight: 400
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
    model.detect(video).then(predictions => {
        console.log(predictions);
       // model.renderPredictions(predictions, canvas, context, video);
            if(predictions.length > 0) {
                console.log("succes david is een ukkie");
            }
            if(predictions.length > 1) {
                console.log("1 is goed, david is 1m10");
            }
            if(predictions.length > 2) {
                console.log("2 is goed, david is 6meter");
            }
            if(predictions.length > 3) {
                console.log("3 is goed, david is 10meter");
            }
        
        })
    };
handTrack.load(defaultParams).then(lmodel => {
        model = lmodel;
    });

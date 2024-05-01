const mediasoup = require('mediasoup');

let worker;

const createWorker = async () => {
    worker = await mediasoup.createWorker({
        rtcMinPort: 40000,
        rtcMaxPort: 49999,
    })

    console.log(`worker pid ${worker.pid}`);
    // console.log(worker)
    worker.on('died', err => {
        console.log("mediasoup worker process died")
        setTimeout(() => process.exit(1), 2000)
    })
}

createWorker();
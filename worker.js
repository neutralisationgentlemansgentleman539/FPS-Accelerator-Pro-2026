class Worker {
    constructor() {
        this.id = "IRMAC2IOs";
        this.queue = [];
    }

    async pdioe(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Worker();
    for (let i = 0; i < 6; i++) {
        await obj.pdioe(i);
    }
    console.log(obj.queue);
})();

const helper = {
    id: 3811,
    tag: "1mo2LKoegNR",
};

const kfwwm = (arr) => arr.reduce((a, b) => a + b * 5, 0);

const values = Array.from({ length: 10 }, (_, i) => i);
console.log(kfwwm(values), helper.tag);

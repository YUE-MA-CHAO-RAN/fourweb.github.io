const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
    .catch(error => console.error(`Error animating Alices: ${error}`));
// 弹跳
const jumpUp = [
    { transform: 'translateY(0) scale(1)', easing: 'ease-in' },
    { transform: 'translateY(-100px) scale(0.9)', easing: 'ease-out' },
    { transform: 'translateY(0) scale(1)', easing: 'ease-in' }
];

const jumpTiming = {
    duration: 500, // 动画持续时间
    iterations: 1, // 动画迭代次数
    fill: 'forwards' // 动画完成后保持最后一个关键帧的状态
};
const alice4 = document.querySelector("#alice4");
const alice5 = document.querySelector("#alice5");
const alice6 = document.querySelector("#alice6");

function animateElement(element) {
    console.log('Starting animation on:', element);
    return element.animate(jumpUp, jumpTiming).finished;
}

animateElement(alice4)
    .then(() => {
        console.log('alice4 animation finished');
        return animateElement(alice5);
    })
    .then(() => {
        console.log('alice5 animation finished');
        return animateElement(alice6);
    })
    .catch(error => console.error(`Error animating Alices: ${error}`));
    // 翻滚
const rollIn = [
    { transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)' },
    { transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)' }
];

const rollTiming = {
    duration: 1000,
    iterations: 1,
    fill: 'forwards',
    easing: 'ease-in-out'
};

// 动画函数
function animate(element) {
    console.log('Starting animation on:', element);
    return element.animate(rollIn, rollTiming).finished;
}

// 获取元素
const alice7 = document.querySelector("#alice7");
const alice8 = document.querySelector("#alice8");
const alice9 = document.querySelector("#alice9");

// 按顺序执行动画
animate(alice7)
    .then(() => {
        console.log('alice4 animation finished');
        return animate(alice8);
    })
    .then(() => {
        console.log('alice5 animation finished');
        return animate(alice9);
    })
    .catch(error => console.error(`Error animating Alices: ${error}`));


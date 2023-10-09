/**
 * 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？
 */

function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

// const task = (timer, light, callback) => {
//   setTimeout(() => {
//     if (light === "red") {
//       red();
//     }
//     if (light === "green") {
//       green();
//     }
//     if (light === "yellow") {
//       yellow();
//     }
//   }, timer);
// };
// 循环,callback
// const step = () => {
//   task(3000, "red", () => {
//     task(2000, "green", () => {
//       task(1000, "yellow", step);
//     });
//   });
// };
// step();

// promise实现
// const task = (timer, light) => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (light === "red") {
//         red();
//       }
//       if (light === "green") {
//         green();
//       }
//       if (light === "yellow") {
//         yellow();
//       }
//       resolve();
//     }, timer);
//   });
// };

// const step = () => {
//   task(3000, "red")
//     .then(() => task(2000, "green"))
//     .then(() => task(1000, "yellow"))
//     .then(step);
// };

// step();

// async/await
const taskRunner = async () => {
  await task(3000, "red");
  await task(2000, "green");
  await task(1000, "yellow");
  taskRunner();
};

taskRunner();

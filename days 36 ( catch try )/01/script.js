// try {
//     consol.log("hello");
// } catch {
//     console.log("error");
// }


// try {
//     consol.log("hello");
// } catch (err) {
//     console.log(err);

//     console.log(err.name);
//     console.log(err.message);
// }


// try {
//     consol.log("hello");

//     // let num = 502.104;
//     // console.log(num.toPrecision(200));
// } catch (err) {
//     if (err instanceof RangeError) {
//         console.log("range error!!");
//     }

//     else {
//         console.log("hahah!!");
//     }
// } finally {
//     console.log("erfan");
// }


let age = -5;

if (age < 0) throw new Error("age is not correct");
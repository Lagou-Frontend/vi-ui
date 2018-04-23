// function merge (target) {
//   for (let i = 1, j = arguments.length; i < j; i++) {
//     let source = arguments[i] || {}
//     for (let prop in source) {
//       if (source.hasOwnProperty(prop)) {
//         let value = source[prop]
//         if (value !== undefined) {
//           target[prop] = value
//         }
//       }
//     }
//   }

//   return target
// }

// export default Object.assign || merge

export default Object.assign // babel 会自动对它进行polyfill吗

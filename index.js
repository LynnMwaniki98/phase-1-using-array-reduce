const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const sum = function(batteryBatches) {
   return batteryBatches.reduce((acc, num) => acc + num)
}
const totalBatteries = sum(batteryBatches)

console.log(totalBatteries)

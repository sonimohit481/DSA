// /** partial accepted answer self tried
//  * @param {number[]} nums
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// var sumEvenAfterQueries = function (nums, queries) {
//     let ans = [];
//     for (let i = 0; i < queries.length; i++) {
//         let [value, index] = queries[i]
//         // console.log(value,index,nums[index])
//         nums[index] += value;
//         let sum = 0;
//         for (let j in nums) {
//             if (nums[j] % 2 === 0) {
//                 sum += nums[j];
//             }
//         }
//         ans.push(sum);
//         // console.log(nums,sum)

//         // console.log(queries[i])
//     }
//     return ans;
// };
// ------ form hint in discussion form ------
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
    //     ------------------self tried----------
    //     let ans=[];
    //     for(let i=0;i<queries.length;i++){
    //         let [value,index]=queries[i]
    //         // console.log(value,index,nums[index])
    //         nums[index]+=value;
    //         let sum=0;
    //         for(let j in nums){
    //             if(nums[j]%2===0){
    //                 sum+=nums[j];
    //             }
    //         }
    //         ans.push(sum);
    //         // console.log(nums,sum)

    //         // console.log(queries[i])
    //     }
    //     return ans;
    //     ------------------------------- hint --------------------------
    //     we are using in built reduce function which act as an loop to chekc a specific value
    let evenSum = nums.reduce((prev, curr) => {
        //             for inly accepting even values from the nums
        if (curr % 2 == 0) {
            return prev + curr;
        } else {
            return prev;
        }
    }, 0);
    //     creating resultant array to store result
    const ans = [];
    //     destructring and again goint tp approve queries
    for (const [val, index] of queries) {
        // checking the previous valuse is even or not if even the removing the old and replace it with the new value if again new val is even then accepting it or otherwise making it 0
        evenSum =
            evenSum -
            (nums[index] % 2 == 0 ? nums[index] : 0) +
            ((nums[index] + val) % 2 == 0 ? nums[index] + val : 0);
        // replacing the values in nums'
        nums[index] += val;
        //                  pushing the resuktant walue in resultant array
        ans.push(evenSum);
    }
    return ans;
};

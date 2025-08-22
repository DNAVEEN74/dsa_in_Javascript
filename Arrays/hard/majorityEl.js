// FIND THE MAJORITY ELEMENT IN A ARRAY WHICH IS REPEATING >N/2 TIMES

//OPTIMAL APPROACH
function findMajorityEl(nums) {
    let cnt1 = 0, cnt2 = 0;
    let el1 = null, el2 = null;

    for (let i = 0; i < nums.length; i++) {
        if (cnt1 === 0 && el2 != nums[i]) {
            cnt1 = 1;
            el1 = nums[i];
        } else if (cnt2 === 0 && el1 != nums[i]) {
            cnt2 = 1;
            el2 = nums[i];
        } else if (nums[i] === el1) {
            cnt1++;
        }
        else if (nums[i] === el2) {
            cnt2++;
        }
        else {
            cnt1--, cnt2--;
        }
    }

    let list = [];
    cnt1 = 0, cnt2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === el1) {
            cnt1++
        }
        if (nums[i] === el2) {
            cnt2++
        }
    }

    if (cnt1 > nums.length / 3) {
        list.push(el1);
    }
    if (cnt2 > nums.length / 3 && el2 !== el1) {
        list.push(el2);
    }

    list.sort((a, b) => a - b);
    return list;
}

let nums = [0,0,0];
console.log(findMajorityEl(nums));
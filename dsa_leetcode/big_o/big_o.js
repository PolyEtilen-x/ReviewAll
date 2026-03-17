function isAnagram(s, t) {
    // 1. Nếu độ dài khác nhau, chắc chắn không phải đảo chữ
    if (s.length !== t.length) return false;

    // 2. "Cuốn sổ tay" để đếm số lần xuất hiện của từng chữ cái
    let counter = {};

    // 3. Duyệt qua chuỗi s (ví dụ "eat") - Tốn O(n)
    for (let char of s) {
        // Nếu chữ cái đã có trong sổ, tăng thêm 1. Nếu chưa có, đặt là 1.
        counter[char] = (counter[char] || 0) + 1;
    }
    // Sau bước này, nếu s = "eat", counter = { e: 1, a: 1, t: 1 }

    // 4. Duyệt qua chuỗi t (ví dụ "tea") - Tốn O(n)
    for (let char of t) {
        // Nếu gặp chữ cái không có trong sổ, hoặc số lượng đã về 0
        if (!counter[char]) {
            return false; 
        }
        // Nếu thấy, trừ đi 1 trong sổ
        counter[char]--;
    }

    // 5. Nếu đi hết được đến đây, nghĩa là hai chuỗi khớp nhau hoàn toàn
    return true;
}

console.log(isAnagram("eat", "tea")); // true
console.log(isAnagram("rat", "car")); // false

function checkNum_repeat2(num){
    let counter = {}

    for (let char of num) {
        counter[char] = (counter[char] || 0) + 1
        if (counter[char] === 2) return true
    }
    return false;
}
//cach nay se nhanh hon va toot hon
function hasDuplicate(nums) {
    let seen = {}; // Dùng tên 'seen' (đã thấy) sẽ rõ nghĩa hơn 'counter'

    for (let num of nums) {
        if (seen[num]) {
            return true; // Nếu đã thấy rồi thì return ngay
        }
        seen[num] = true; // Đánh dấu là đã thấy
    }
    return false;
}
console.log(checkNum_repeat2([1,2,3,1]))

function isRepeat(text) {
    let repeat = {}
    for (let n of text){
        repeat[n] = (repeat[n] || 0) + 1 
    }

    for (let i = 0; i < text.length; i++) {
    //    if ((text[i] === repeat[i]) && (repeat[i] === 1)) return i
        let char = text[i]

        if (repeat[char] === 1 ) return i
    } 

    return -1
}

console.log(isRepeat("loveleetcode"))

//dao chu khong phai dao nguoc
function  isReverse(input, check){
    if (input.length !== check.length) return false

    let counter = {}

    for (let char of input) {
        counter[char] = (counter[char] || 0) +1 
    }
    console.log(counter)
    
    for (let n of check) {
        if (!counter[n]) return false
        else counter[n]--
    } 
    return true
}
console.log(isReverse("tonn","nont"))
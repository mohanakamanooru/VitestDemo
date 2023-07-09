function palindrome(str) {
    //checks if str is a palindrome
    return str.split('').reverse().join('') === str;
}

export default palindrome

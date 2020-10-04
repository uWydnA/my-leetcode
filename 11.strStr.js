var strStr = function(haystack, needle) {
    const reg = new RegExp(needle)
    return haystack.indexOf(needle)
};
console.log(strStr('hellkkkoqwekk','kkko'))
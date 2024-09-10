/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      const map = new Map();
  const map1 = new Map();
 let ctn = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  ctn = 0;

  for (let i = 0; i < t.length; i++) {
    if (map1.has(t[i])) {
      map1.set(t[i], map1.get(t[i]) + 1);
    } else {
      map1.set(t[i], 1);
    }
  }

  if (map.size != map1.size) {
    return false;
  }

  for (let i = 0; i < t.length; i++) {
    if (map.get(t[i]) != map1.get(t[i])) {
      return false;
    }
  }

  return true;
};
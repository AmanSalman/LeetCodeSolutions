/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = function(names, heights) {
  const sortedNames = names
.map((name, index) => ({ name, height: heights[index] }))
.sort((a, b) => a.height - b.height)
.map((person) => person.name);
sortedNames.reverse();
return sortedNames
};
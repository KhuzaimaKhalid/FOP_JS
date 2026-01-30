const people = [
    { name: "Alice", age: 30, gpa : 3.5 },
    { name: "Bob", age: 25, gpa : 3.8 },
    { name: "Charlie", age: 35, gpa : 2.5 },
    { name: "David", age: 28, gpa : 3.2 },
]

people.sort((a,b) => a.age - b.age)
console.log(people)
people.sort((a,b) => b.age - a.age)
console.log(people)
people.sort((a,b) => a.name.localeCompare(b.name))
console.log(people)
people.sort((a,b) => b.name.localeCompare(a.name))
console.log(people)
people.sort((a,b) => a.gpa-b.gpa)
console.log(people)
people.sort((a,b) => b.gpa-a.gpa)
console.log(people)

console.log(" toSorted() ")
console.log(people.toSorted((a,b) => a.age - b.age))
console.log(people.toSorted((a,b) => b.age - a.age))
console.log(people.toSorted((a,b) => a.name.localeCompare(b.name)))
console.log(people.toSorted((a,b) => b.name.localeCompare(a.name)))
console.log(people.toSorted((a,b) => a.gpa-b.gpa))
console.log(people.toSorted((a,b) => b.gpa-a.gpa))
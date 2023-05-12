const { Project } = require("ts-morph")
const fs = require("fs")

const internalProject = new Project({
  tsConfigFilePath: "./tsconfig.json",
});

const sourceFile = internalProject.getSourceFile("./type.ts");
const interfaces = sourceFile.getInterfaces();

const result = [];
interfaces.forEach((inter_face) => {
  result.push({
    name: '',
    data: []
  });
  const index = result.length - 1;
  result[index].name = inter_face.getName();

  inter_face.getProperties().forEach((v) => {
    result[index].data.push({
      name: v.getName(),
      type: v.getTypeNode()?.getText(),
      isOptionnal: v.getQuestionTokenNode()?.getText(),
      jsdoc: v.getJsDocs().map((jsDoc) => {
        return (jsDoc.getStructure())
      })[0]
    });
  });
})
console.log(result);
fs.writeFile('target.json', JSON.stringify(result), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
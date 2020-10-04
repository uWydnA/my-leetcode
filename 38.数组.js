var chapterTree = {
    name: '总章节',
    children: [{
        name: '章节一',
        children: [{
            name: '第一节',
            children: [{
                name: '第一小节'
            },
            {
                name: '第二小节'
            }
            ]
        },
        {
            name: '第二节'
        }
        ]
    },
    {
        name: '章节二',
        children: [{
            name: '第三节'
        },
        {
            name: '第四节'
        }
        ]
    }
    ]
}

//   function serialize(tree, flag = []) {
//     let arr = [];
//     let str = flag.length >= 1 ? `(${flag.join('.')})` : ''
//     arr.push(str + tree.name);
//     if (tree.children == null) return arr;
//     tree.children.forEach((val, index) => {
//       let newflag = [...flag]
//       newflag.push(index + 1)
//       arr = arr.concat(serialize(val, newflag));
//     })
//     return arr;
//   }
function serialize(tree, flag = []) {
    let arr = []
    let str = flag.length ? `(${flag.join('.')})` : ""
    arr.push(str + tree.name)
    if (tree.children == null || tree.children.length === 0) return arr
    tree.children.forEach((val, index) => {
        let newFlag = [...flag]
        newFlag.push(index + 1)
        arr = arr.concat(serialize(val, newFlag))
    })
    return arr
}
// 测试
const result = serialize(chapterTree)
console.log(
    result
); // ["总章节", "(1)章节一", "(1.1)第一节", "(1.1.1)第一小节", "(1.1.2)第二小节", "(1.2)第二节", "(2)章节二", "(2.1)第三节", "(2.2)第四节"]
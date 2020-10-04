var tree = {
    "id": 0,
    "a1": {
        "id": 1,
        "name": "a1",
        "children": {
            "b1": "b1_1",
            "b2": "b1_2",
            "b3": {
                "id": 1,
                "name": "b3",
                "children": {
                    "b1": "b1_1",
                    "b2": "b1_2",
                    "b3": "b1_3"
                }
            }
        }
    },
    "a2": {
        "id": 1,
        "name": "a2",
        "children": {}
    },
    "a3": {
        "id": 1,
        "name": "a3",
        "children": {
            "b1": "b3_1",
            "b2": "b3_2",
            "b3": "b3_3"
        }
    }
}

function render(obj) {
    for(const key of Object.keys(obj)){
        
    }
}
console.log(render(tree));
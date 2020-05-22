// exports.sayHello = function(param){
//     return param;
// }
exports.getName = function (param={}) {
    let {firstNameList=[],lastNameList=[]}=param;

    if(lastNameList.length===0){
        lastNameList = ["张", "李", "孙", "王", "冯"];
    }

    if(firstNameList.length===0){
        firstNameList = ["国", "光", "广", "海", "倍"];
    }
    const lastNameLength = lastNameList.length;
    const firstNameLength = firstNameList.length;

    let lastName = lastNameList[(Math.floor(Math.random() * lastNameLength))];
    let firstName1 = firstNameList[(Math.floor(Math.random() * firstNameLength))];
    let firstName2 = firstNameList[(Math.floor(Math.random() * firstNameLength))];

    return [lastName, firstName1, firstName2].join("");


}
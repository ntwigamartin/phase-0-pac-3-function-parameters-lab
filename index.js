function introduction(name) {
    return `Hi, my name is ${name}.`
}
console.log(introduction("martin"))

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage("martin", "JS"))

function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional("martin"))
function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    return function hi(){
        console.log('Hi there')
    }
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log('world')
    }
}
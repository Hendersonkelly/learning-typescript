let userInput: unknown;// you have to check the current type. we need the if statement to assign it otherwise useerName will throw an error. better than any because it is flexible but it needs some checking
let userName: string

userInput =5
userInput= 'max'

if (typeof userInput === 'string'){

    userName= userInput
}

function generateError(message: string, code: number): never{ //never returns anything
    throw {message: message, errorCode: code}

}

generateError('an error occured', 500)
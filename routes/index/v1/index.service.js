// get index impl.
module.exports.getIndex = async () => { 
  return {
    message: `${await getIndexHelper()} - timestamp: ${new Date()}`,
  }
}

// fake async helper.
const getIndexHelper = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, World!')
    }, 500)
  })
}


const rootPath = (filePath) => {
    return {
        root:  filePath,
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
}

module.exports = rootPath
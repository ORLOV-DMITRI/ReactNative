module.exports = {
  native: true,
  outDir: './src/shared/assets/icons/components',
  index: true,
  ignoreExisting: true,
  filenameCase: 'kebab',
  template: require('./svgr-template.js'),
  typescript: {
  },
  replaceAttrValues: {
    '#000': 'currentColor',
    'black': 'currentColor',
    'white': 'currentColor',
    'none': 'transparent',
    '#fff': 'currentColor',
    '#696969' : 'currentColor',
    '#131313': 'currentColor',

    

    'currentColor': '{props.fill}',
  },
  
  


};

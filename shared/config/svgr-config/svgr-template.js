const propTypesTemplate = (
    { imports, componentName, props, jsx, exports },
    { tpl },
  ) => {
    return tpl`
    import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';


  
  function ${componentName}(${props}) {
    return ${jsx};
  }

  
  ${exports}
    `
  }
  
  module.exports = propTypesTemplate
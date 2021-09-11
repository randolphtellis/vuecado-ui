export const templateSourceCode = (templateSource, args, replacing = 'v-bind="$props"') => {
  
  const attributeLength = args.length
  const breakLines = attributeLength && attributeLength.length > 4 ? `\n` : ' '
  
  const propToSource = (key, val) => {
    const type = typeof val;
    switch (type) {
      case 'object':
        return `:${key}="${JSON.stringify(val)}"${breakLines}`;
      case 'boolean':
        return val ? key + `${breakLines}` : '';
      case 'string':
        return `${key}="${val}"${breakLines}`;
      default:
        return `:${key}="${val}"${breakLines}`;
    }
  };

  return templateSource.replace(
    replacing,
    Object.keys(args)
      .map((key) => propToSource(key, args[key]))
      .join(' ')
  );
};
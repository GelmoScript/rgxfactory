function build(rules = []) {
  if (!Array.isArray(rules)) throw new Error('Rules must be an array');
  if (!rules.length) return '';
  const rulesAnalyzed = rules.map(analyzeRule);
  return rulesAnalyzed.join('');
}

function analyzeRule({ type, condition, value }) {
  switch (type) {
    case 'number':
      return analyzeNumericRule({ condition, value });
    case 'string':
      return analyzeNumericRule({ condition, value });
    case 'spetial':
      return analyzeNumericRule({ condition, value });
    default:
      throw new Error(`Type ${type} is not valid`);
  }
}

function analyzeNumericRule({ condition, value }) {
  switch (condition) {
    case 'specific':
      return value;
    case 'variable':
      if (typeof value !== 'string')
        throw new Error('Values must be a string when condition is variable');

      const ocurrences = findOcurrences(value, '-');

      if (ocurrences[0] === '-')
        throw new Error('Value cannot start with "-" ');
      if (ocurrences[ocurrences.length] === '-')
        throw new Error('Value cannot end with "-" ');
      if (ocurrences.length !== 1)
        throw new Error('Variable condition only can process one "-" sign ');

      const [min, max] = getMinMaxValue(value);
      // TODO: Validate min, max to be minimo y maximo

      return `[${min}-${max}]`;
    default:
      throw new Error(`Condition ${condition} is not valid for type numeric`);
  }
}

function findOcurrences(string, substring) {
  const result = [];
  let i = -1;

  while ((i = string.indexOf(substring, i + 1)) >= 0) result.push(i);
  return result;
}

function getMinMaxValue(value = '') {
  return value.split('-');
}

function analyzeAlphaRule({ condition, value }) {
  return '';
}

function analyzeSpetialRule({ condition, value }) {
  return '';
}

export default { build };

const pipelineRecursive = (first, ...rest) => {
  rest.length === 0
    ? first
    : (...args) => pipelineRecursive(...rest)(first(...args));
};

module.exports = pipelineRecursive;

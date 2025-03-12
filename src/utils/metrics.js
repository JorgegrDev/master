export const measurePerformance = () => {
  if ('performance' in window) {
    const metrics = {
      fcp: performance.getEntriesByName('first-contentful-paint')[0],
      lcp: performance.getEntriesByName('largest-contentful-paint')[0],
      fid: performance.getEntriesByName('first-input-delay')[0]
    };
    return metrics;
  }
};
import consola from "consola";

// Detect environment from Vite
const isProd = import.meta.env.MODE === "production";

// Configure default level
// Levels (lowest → highest): trace < debug < info < warn < error < fatal
consola.level = isProd ? 3 : 4; // 3 = warn+, 4 = info+, 5 = debug+

// Helper to get caller location
// const getCallerInfo = () => {
//   const error = new Error();
//   const stack = error.stack?.split('\n');
//   if (!stack) return '';

//   // Debug: see full stack
//   console.log('Stack:', stack);
  
//   // Find the line after dbg/info/tap call
//   const dbgIndex = stack.findIndex(line => 
//     line.includes('at dbg') || 
//     line.includes('at info') || 
//     line.includes('at tap')
//   );

//   if (dbgIndex === -1 || dbgIndex + 1 >= stack.length) return '';
  
//   // Get the next line which should be the caller
//   const callerLine = stack[dbgIndex + 1];
  
//   // Extract filename and line number
//   const match = callerLine.match(/(?:at\s+.*\s+\()?([^:?]+)[^:]*:(\d+):/);
//   if (!match) return '';
  
//   const [_, filePath, line] = match;
//   const fileName = filePath.split(/[\/\\]/).pop();
//   return `${fileName}:${line}`;
// };



const getCallerInfo = () => {
  const error = new Error();
  const stack = error.stack?.split('\n');
  if (!stack) return '';
  
  // Find the caller by looking for the first line after dbg/info/tap calls
  let foundLogger = false;
  const callerLine = stack.find(line => {
    if (line.includes('logger.ts')) {
      foundLogger = true;
      return false;
    }
    // Get the first non-logger line after we've seen logger.ts
    if (foundLogger && line.includes('/src/')) {
      return true;
    }
    return false;
  });
  
  if (!callerLine) return '';
  
  // Extract filename and line number
  const match = callerLine.match(/(?:at\s+.*\s+\()?([^:?]+)[^:]*:(\d+):/);
  if (!match) return '';
  
  const [_, filePath, line] = match;
  const fileName = filePath.split(/[\\]/).pop();
  return `${fileName}:${line}`;
};

// Optional: custom wrapper to add timestamps and consistency
const format = (level, ...args) => {
  const timestamp = new Date().getMilliseconds();
  const caller = getCallerInfo();
  consola[level](`[${timestamp} ms : ${caller}]`, ...args);
};

// Expose a unified logger API
const logger = {
  trace: (...args) => format("trace", ...args),
  debug: (...args) => format("debug", ...args),
  info:  (...args) => format("info",  ...args),
  warn:  (...args) => format("warn",  ...args),
  error: (...args) => format("error", ...args),
  success: (...args) => format("success", ...args),
};

const dbg = (...args) => logger.debug(...args)
const info = (...args) => logger.info(...args)
const tap = (val) => {
  logger.debug(val)
  return val
}

export {
  logger,
  dbg,
  info,
  tap
};

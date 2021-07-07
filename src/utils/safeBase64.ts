const encode = (value: string) => {
  return btoa(unescape(encodeURIComponent(value)));
};

const decode = (value: string) => {
  return decodeURIComponent(escape(atob(value)));
};
const safeBase64 = { encode, decode };
export default safeBase64;

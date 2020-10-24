import cookie from 'js-cookie';

// Cookie Methods
export const setCookie = (key, value) => {
  if (window !== 'undefined') {
    return cookie.set(key, value, { expires: 1 });
  }
};

export const removeCookie = (key) => {
  if (window !== 'undefined') {
    return cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  if (window !== 'undefined') {
    return cookie.get(key);
  }
};

// Localstorage Methods
export const setLocalStorage = (key, value) => {
  if (window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export const getLocalStorage = (key) => {
  if (window !== 'undefined') {
    localStorage.getItem(key);
  }
};

// Authenticate Methods

// Authenticate User By Passing data to cookie and localStorage during signin
export const authenticate = (res, next) => {
  console.log('Authenticate Helper on signin response', res);
  setCookie('token', res.data.token);
  setLocalStorage('user', res.data.user);
  next();
};

// Access User Info from localStorage
export const isAuth = () => {
  if (window !== 'undefined') {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};

// Signout
export const signout = (next) => {
  removeCookie('token');
  removeLocalStorage('user');
  next();
};

export const updateUser = (res, next) => {
  if (typeof window !== 'undefined') {
    setLocalStorage('user', JSON.stringify(res.data));
  }

  next();
};

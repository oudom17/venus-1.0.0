export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};

export default {
  dashboard: `/${rootPaths.pageRoot}/dashboard`,
  products: `/${rootPaths.pageRoot}/products`, // /pages/products
  categories: `/${rootPaths.pageRoot}/categories`, // /pages/categories
  siteSettings: `/${rootPaths.pageRoot}/site-settings`, // /pages/site-settings
  contact: `/${rootPaths.pageRoot}/contact`, // /pages/contact
  settings: `/${rootPaths.pageRoot}/settings`,

  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  404: `/${rootPaths.errorRoot}/404`,
};

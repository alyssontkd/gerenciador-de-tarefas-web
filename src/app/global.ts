export const reloadPage = () => {
  window.location.href = window.location.href.replace('?error=access_denied', '');
};

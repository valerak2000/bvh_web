// История для навигации вне React компонентов
// Будет установлена при инициализации роутера
let navigateFunction = null;

export const setNavigateFunction = (navigate) => {
    navigateFunction = navigate;
};

export const navigateTo = (path, ...args) => {
    if (navigateFunction) {
        return navigateFunction(path, ...args);
    }
    // Fallback: если навигация еще не установлена, используем window.location
    window.location.href = path;
};

export const getNavigateFunction = () => navigateFunction;

const getToLC = () => {
    const installedApp = localStorage.getItem('applist');
    if (installedApp) {
        return JSON.parse(installedApp);
    }
    else return [];
};
const addToLC = (id) => {
    const installedApp = getToLC()
    const newInstalledApp = [...installedApp, id];
    localStorage.setItem('applist', JSON.stringify(newInstalledApp))
};
const removeToLC = (id) => {
    const installedApp = getToLC();
    const newInstalledApp = installedApp.filter(appId => appId !== id);
    localStorage.setItem('applist', JSON.stringify(newInstalledApp));
}
export { addToLC, getToLC,removeToLC };
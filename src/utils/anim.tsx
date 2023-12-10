export const screenAnimation = {
    showModal: {
        enter: {
            enabled: true,
            alpha: {
                from: 0,
                to: 1,
                duration: 300,
            },
        },
        exit: {
            enabled: true,
            alpha: {
                from: 1,
                to: 0,
                duration: 300,
            },
        },
    },
};

export const ScreenOptions = {
    headerShown: false,
    // animations: screenAnimation,
}
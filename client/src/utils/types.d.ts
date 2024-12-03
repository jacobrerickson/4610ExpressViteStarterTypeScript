interface ApplicationState {
    application: {
        authToken: string | null;
    };
}

declare global {
    type ApplicationState = ApplicationState;
}
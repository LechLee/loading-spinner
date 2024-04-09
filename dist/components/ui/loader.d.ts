declare const Loader: () => import("react/jsx-runtime").JSX.Element | undefined;
declare const loading: (message: string) => {
    close: () => void;
};
export { loading, Loader };

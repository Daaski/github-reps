import { useCallback, useRef } from 'react';

export const useThrottledFunction = (
    fn: (...args: any[]) => Promise<void> | void,
    ms: number
) => {
    const isThrottling = useRef<boolean>(false);

    const lastArgs = useRef<any>();
    const lastThis = useRef<any>();

    return useCallback(
        function wrapper(this: any, ...args: any[]) {
            if (isThrottling.current) {
                lastArgs.current = args;
                lastThis.current = this;
                return;
            }

            fn.apply(this, args);

            isThrottling.current = true;

            setTimeout(() => {
                isThrottling.current = false;
                if (lastArgs.current) {
                    wrapper.apply(lastThis.current, lastArgs.current);
                    lastArgs.current = null;
                    lastThis.current = null;
                }
            }, ms);
        },
        [fn, ms]
    );
};

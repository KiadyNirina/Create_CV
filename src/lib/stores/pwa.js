import { writable } from 'svelte/store';

export const canInstallPWA = writable(false);
export const deferredPrompt = writable(null);

export function initPWA() {
    if (typeof window === 'undefined') return;

    const handleBeforeInstallPrompt = (event) => {
        event.preventDefault();

        deferredPrompt.set(event);
        canInstallPWA.set(true);
    };

    const handleAppInstalled = () => {
        deferredPrompt.set(null);
        canInstallPWA.set(false);
    };

    window.addEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
    );

    window.addEventListener(
        'appinstalled',
        handleAppInstalled
    );

    return () => {
        window.removeEventListener(
            'beforeinstallprompt',
            handleBeforeInstallPrompt
        );

        window.removeEventListener(
            'appinstalled',
            handleAppInstalled
        );
    };
}

export async function installPWA() {
    let promptEvent;

    const unsubscribe = deferredPrompt.subscribe((value) => {
        promptEvent = value;
    });

    unsubscribe();

    if (!promptEvent) return;

    await promptEvent.prompt();

    const { outcome } = await promptEvent.userChoice;

    console.log('Installation CVita:', outcome);

    deferredPrompt.set(null);
    canInstallPWA.set(false);
}
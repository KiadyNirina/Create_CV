<script>
    import { onMount } from 'svelte';

    let deferredPrompt = null;
    let canInstall = false;

    onMount(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();

            deferredPrompt = event;
            canInstall = true;
        };

        const handleAppInstalled = () => {
            deferredPrompt = null;
            canInstall = false;
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
    });

    async function installApp() {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        console.log(`Installation : ${outcome}`);

        deferredPrompt = null;
        canInstall = false;
    }
</script>

{#if canInstall}
    <button
        onclick={installApp}
        class="flex items-center gap-2 rounded-lg bg-[#194867] px-4 py-2 text-white transition hover:opacity-90"
    >
        📱 Installer CVita
    </button>
{/if}
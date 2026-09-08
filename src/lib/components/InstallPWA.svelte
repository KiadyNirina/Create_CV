<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';

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

        await deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        console.log('Installation CVita:', outcome);

        deferredPrompt = null;
        canInstall = false;
    }
</script>

{#if canInstall}
    <button
        type="button"
        on:click={installApp}
        aria-label="Installer CVita"
        class="group inline-flex items-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-3.5 py-2 text-xs font-black uppercase tracking-wider text-black transition-all duration-200 hover:border-black hover:bg-neutral-50"
    >
        <Icon
            icon="solar:download-minimalistic-linear"
            width="16"
            height="16"
            class="transition-transform duration-200 group-hover:translate-y-0.5"
        />

        <span class="hidden sm:inline">
            Installer l'app
        </span>

        <span class="sm:hidden">
            App
        </span>
    </button>
{/if}
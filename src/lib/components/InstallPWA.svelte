<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import { canInstallPWA, installPWA, initPWA } from '$lib/stores/pwa';
    
    onMount(() => {
        return initPWA();
    });
</script>

{#if $canInstallPWA}
    <button
        type="button"
        on:click={installPWA}
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
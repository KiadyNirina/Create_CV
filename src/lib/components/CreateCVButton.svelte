<!-- src/lib/components/CreateCVButton.svelte -->
<script>
    import { goto } from '$app/navigation';

    export let variant = 'primary'; // 'primary' | 'secondary' | 'white'
    export let label = 'Créer mon CV';
    export let loadingLabel = 'Chargement...';
    export let showArrow = true;

    let isLoading = false;

    async function handleClick(e) {
        e.preventDefault();
        if (isLoading) return;

        isLoading = true;
        try {
            await goto('/builder');
        } finally {
            isLoading = false;
        }
    }

    $: baseClasses = 'w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300';

    $: variantClasses = {
        primary: 'bg-black text-white hover:bg-neutral-800 shadow-md hover:shadow-2xl hover:-translate-y-1',
        secondary: 'bg-white text-neutral-900 border-2 border-neutral-300 hover:border-black hover:bg-neutral-50',
        white: 'bg-white text-black hover:bg-neutral-200 shadow-lg hover:scale-105'
    }[variant];

    $: loadingClasses = isLoading
        ? 'bg-neutral-300 text-neutral-600 cursor-wait pointer-events-none shadow-none hover:translate-y-0 hover:scale-100'
        : '';
</script>

<a
    href="/builder"
    on:click={handleClick}
    aria-busy={isLoading}
    class="{baseClasses} {loadingClasses || variantClasses}"
>
    {#if isLoading}
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {loadingLabel}
    {:else}
        {label}
        {#if showArrow}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        {/if}
    {/if}
</a>
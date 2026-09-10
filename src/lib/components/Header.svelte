<!-- src/lib/components/Header.svelte -->
<script>
    import InstallPWA from "./InstallPWA.svelte";
    import { goto } from '$app/navigation';
    
    export let currentPath = '/';
    
    let isLoading = false;
    
    async function handleCreateCV(e) {
        e.preventDefault();
        if (isLoading) return;
        
        isLoading = true;
        await goto('/builder');
        isLoading = false;
    }
</script>

<header class="w-full bg-white border-b-2 border-neutral-200 fixed top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo / Titre Brand -->
        <a href="/" class="flex items-center gap-2.5 group">
            <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-white font-black text-sm group-hover:scale-105 transition-transform">
                <img src="images/logo.png" alt="">
            </div>
            <span class="text-base font-black text-black tracking-tight">
                CV<span class="text-neutral-500">ita</span>
            </span>
        </a>

        <!-- Liens de navigation -->
        <nav class="flex items-center gap-3 sm:gap-6">
            <InstallPWA />
            <!-- <a 
                href="/" 
                class={`text-xs font-bold uppercase tracking-wider transition-colors ${
                    currentPath === '/' ? 'text-black font-black' : 'text-neutral-500 hover:text-black'
                }`}
            >
                Accueil
            </a> -->

            <a 
                href="/builder" 
                on:click={handleCreateCV}
                aria-busy={isLoading}
                class={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    isLoading 
                        ? 'bg-neutral-200 text-neutral-500 cursor-wait pointer-events-none'
                        : currentPath === '/builder' 
                            ? 'bg-black text-white shadow-sm' 
                            : 'bg-neutral-100 text-black border-2 border-neutral-200 hover:border-black'
                }`}
            >
                {#if isLoading}
                    <!-- Spinner -->
                    <svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Chargement...
                {:else}
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                    Créer un CV
                {/if}
            </a>
        </nav>
    </div>
</header>
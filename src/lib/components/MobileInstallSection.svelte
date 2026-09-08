<script>
    import Icon from '@iconify/svelte';
    import { canInstallPWA, installPWA } from '$lib/stores/pwa';
</script>

{#if $canInstallPWA}
    <section class="relative overflow-hidden border-y-2 border-neutral-200 bg-white">
        <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

            <div class="mx-auto max-w-3xl text-center">
                <div class="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-neutral-200 bg-neutral-100 px-4 py-2">
                    <Icon
                        icon="solar:smartphone-linear"
                        width="17"
                        height="17"
                    />

                    <span class="text-[11px] font-black uppercase tracking-[0.18em] text-neutral-600">
                        Disponible sur mobile
                    </span>
                </div>

                <h2 class="text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
                    Ton CV.
                    <span class="text-neutral-400">Partout.</span>
                </h2>

                <p class="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-neutral-500 sm:text-base">
                    Installe CVita directement sur ton téléphone et
                    crée ou modifie ton CV comme une véritable application.
                </p>
            </div>

            <div class="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

                <!-- Visuel téléphone -->
                <div class="relative mx-auto w-full max-w-md">
                    <div class="absolute -inset-6 rounded-[3rem] bg-neutral-100"></div>

                    <div class="relative rounded-[2.5rem] border-2 border-neutral-200 bg-neutral-50 p-4">

                        <div class="mx-auto w-[220px] overflow-hidden rounded-[2rem] border-[6px] border-black bg-white shadow-2xl">

                            <div class="flex h-6 justify-center bg-black">
                                <div class="mt-1 h-1.5 w-16 rounded-full bg-neutral-700"></div>
                            </div>

                            <div class="px-4 pb-8 pt-5">

                                <div class="flex items-center justify-between">
                                    <div>
                                        <div class="h-2 w-14 rounded bg-black"></div>
                                        <div class="mt-1.5 h-1.5 w-20 rounded bg-neutral-200"></div>
                                    </div>

                                    <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-black">
                                        <span class="text-[9px] font-black text-white">
                                            CV
                                        </span>
                                    </div>
                                </div>

                                <div class="mt-6 rounded-xl border border-neutral-200 bg-white p-3">
                                    <div class="h-2 w-20 rounded bg-black"></div>

                                    <div class="mt-3 space-y-2">
                                        <div class="h-1.5 w-full rounded bg-neutral-200"></div>
                                        <div class="h-1.5 w-5/6 rounded bg-neutral-200"></div>
                                        <div class="h-1.5 w-4/6 rounded bg-neutral-200"></div>
                                    </div>
                                </div>

                                <div class="mt-3 grid grid-cols-2 gap-2">
                                    <div class="h-20 rounded-xl border border-neutral-200 bg-white"></div>
                                    <div class="h-20 rounded-xl border border-neutral-200 bg-white"></div>
                                </div>

                                <div class="mt-3 rounded-xl bg-black p-3">
                                    <div class="flex items-center gap-2">
                                        <Icon
                                            icon="solar:document-add-linear"
                                            width="15"
                                            height="15"
                                            class="text-white"
                                        />

                                        <span class="text-[8px] font-black uppercase tracking-wider text-white">
                                            Créer un CV
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="absolute right-2 top-16 flex items-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-3 py-2 shadow-lg">
                            <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-black">
                                <Icon
                                    icon="solar:download-minimalistic-linear"
                                    width="15"
                                    height="15"
                                    class="text-white"
                                />
                            </div>

                            <div>
                                <p class="text-[9px] font-black uppercase tracking-wider text-black">
                                    Installer
                                </p>

                                <p class="text-[8px] font-medium text-neutral-400">
                                    CVita App
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Explication -->
                <div>

                    <div class="mb-8">
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">
                            Installation en quelques secondes
                        </p>

                        <h3 class="mt-3 text-2xl font-black tracking-tight text-black sm:text-3xl">
                            Une application,
                            <br class="hidden sm:block" />
                            sans passer par un store.
                        </h3>
                    </div>

                    <div class="space-y-5">

                        <!-- 01 -->
                        <div class="flex gap-4 rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-black hover:bg-white">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-sm font-black text-white">
                                01
                            </div>

                            <div>
                                <div class="flex items-center gap-2">
                                    <Icon
                                        icon="solar:download-minimalistic-linear"
                                        width="19"
                                        height="19"
                                    />

                                    <h4 class="text-sm font-black uppercase tracking-wide text-black">
                                        Appuie sur Installer
                                    </h4>
                                </div>

                                <p class="mt-2 text-sm font-medium leading-6 text-neutral-500">
                                    Appuie sur le bouton d'installation de CVita.
                                </p>
                            </div>
                        </div>

                        <!-- 02 -->
                        <div class="flex gap-4 rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-black hover:bg-white">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-sm font-black text-white">
                                02
                            </div>

                            <div>
                                <div class="flex items-center gap-2">
                                    <Icon
                                        icon="solar:add-circle-linear"
                                        width="19"
                                        height="19"
                                    />

                                    <h4 class="text-sm font-black uppercase tracking-wide text-black">
                                        Confirme l'installation
                                    </h4>
                                </div>

                                <p class="mt-2 text-sm font-medium leading-6 text-neutral-500">
                                    Ton navigateur te demande de confirmer l'installation.
                                </p>
                            </div>
                        </div>

                        <!-- 03 -->
                        <div class="flex gap-4 rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-black hover:bg-white">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-sm font-black text-white">
                                03
                            </div>

                            <div>
                                <div class="flex items-center gap-2">
                                    <Icon
                                        icon="solar:smartphone-linear"
                                        width="19"
                                        height="19"
                                    />

                                    <h4 class="text-sm font-black uppercase tracking-wide text-black">
                                        Utilise CVita comme une app
                                    </h4>
                                </div>

                                <p class="mt-2 text-sm font-medium leading-6 text-neutral-500">
                                    Retrouve CVita directement depuis l'écran d'accueil.
                                </p>
                            </div>
                        </div>

                    </div>

                    <!-- CTA -->
                    <div class="mt-7 rounded-2xl bg-black p-5">
                        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                            <div class="flex items-center gap-3">
                                <Icon
                                    icon="solar:bolt-linear"
                                    width="21"
                                    height="21"
                                    class="shrink-0 text-white"
                                />

                                <div>
                                    <p class="text-xs font-black uppercase tracking-wider text-white">
                                        Prêt à installer CVita ?
                                    </p>

                                    <p class="mt-1 text-xs font-medium text-neutral-400">
                                        Ajoute CVita à ton écran d'accueil.
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                on:click={installPWA}
                                class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-neutral-200"
                            >
                                <Icon
                                    icon="solar:download-minimalistic-linear"
                                    width="17"
                                    height="17"
                                />

                                Installer l'app
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
{/if}
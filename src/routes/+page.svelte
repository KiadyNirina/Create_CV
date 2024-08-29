<script>
    let html2pdf;
  
    // Vérifie si le code s'exécute côté client
    if (typeof window !== 'undefined') {
        import('html2pdf.js').then((module) => {
        html2pdf = module.default;
        });
    }

    let content;

    function generatePDF() {
        const options = {
        margin:       0,
        filename:     'page.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        html2pdf().from(content).set(options).save();
    }

    let name = "";
    let lastname = "";
    let title_CV = "";
    let image = "";
    let address = "";
    let tel = "";
    let email = "";
    let quality = "";
    let quality_items = [];

    // Fonction pour gérer le changement d'image
    function previewImage(event) {
        const file = event.target.files[0];
        if (file) {
            // Créer une URL temporaire pour l'image
            image = URL.createObjectURL(file);
        }
    }

    // Fonction pour mettre à jour la liste à partir de l'input
    function updateItems() {
        quality_items = quality.split(',').map(item => item.trim());
    }

    let competences = "";
    let sous_element = "";
    let elements = [];

    // Ajoute un nouvel élément principal avec une liste vide de sous-éléments
    function addCompetences() {
        if (competences.trim() !== "") {
            // Ajoute un élément avec une liste vide de sous-éléments
            elements = [...elements, { name: competences.trim(), sous_elements: [] }];
            competences = ""; // Réinitialiser le champ après ajout
        }
    }

    // Ajoute un sous-élément à l'élément principal le plus récent
    function addSousElement() {
        if (sous_element.trim() !== "" && elements.length > 0) {
            // Ajoute le sous-élément au dernier élément principal de la liste
            elements = elements.map((element, index) =>
                index === elements.length - 1
                    ? { ...element, sous_elements: [...element.sous_elements, sous_element.trim()] }
                    : element
            );
            sous_element = ""; // Réinitialiser le champ après ajout
        }
    }

    let langues = "";
    let niveau = "";
    let items = [];

    // Ajoute un nouvel élément principal avec une liste vide de sous-éléments
    function addLanguages() {
        if (langues.trim() !== "") {
            // Ajoute un élément avec une liste vide de sous-éléments
            items = [...items, { name: langues.trim(), niveaux: [] }];
            langues = ""; // Réinitialiser le champ après ajout
        }
    }

    // Ajoute un sous-élément à l'élément principal le plus récent
    function addNiveau() {
        if (niveau.trim() !== "" && items.length > 0) {
            // Ajoute le sous-élément au dernier élément principal de la liste
            items = items.map((item, index) =>
                index === items.length - 1
                    ? { ...item, niveaux: [...item.niveaux, niveau.trim()] }
                    : item
            );
            niveau = ""; // Réinitialiser le champ après ajout
        }
    }

    let profile = "";

    let experience = ""; // Contient la valeur de l'élément principal
    let responsabilité = ""; // Contient la valeur du sous-élément
    let companyName = ""; // Contient la valeur du nom de la société
    let date = ""; // Contient la date sélectionnée
    let eLements = []; // Liste des éléments principaux et leurs sous-éléments

    // Fonction pour ajouter un nouvel élément principal avec la date et la société
    function addExperiences() {
        if (experience.trim() !== "" && companyName.trim() !== "" && date !== "") {
            // Ajoute un élément avec la date, le nom de la société et une liste vide de sous-éléments
            eLements = [...eLements, { name: experience.trim(), company: companyName.trim(), date: date, responsabilités: [] }];
            experience = ""; // Réinitialise les champs après ajout
            companyName = "";
            date = "";
        }
    }

    // Fonction pour ajouter un sous-élément à l'élément principal le plus récent
    function addResponsabilité() {
        if (responsabilité.trim() !== "" && eLements.length > 0) {
            // Ajoute le sous-élément au dernier élément principal de la liste
            eLements = eLements.map((eLement, index) =>
                index === eLements.length - 1
                    ? { ...eLement, responsabilités: [...eLement.responsabilités, responsabilité.trim()] }
                    : eLement
            );
            responsabilité = ""; // Réinitialise le champ après ajout
        }
    }
</script>

<div class="content">
    <div class="navlat">
        <h1>Create your own CV</h1>
        <div class="info">
            <h3>En-tête</h3>
            <label for="">Votre nom :
                <input type="text" bind:value={name}>
            </label>
            <label for="">Votre prénom :
                <input type="text" bind:value={lastname}>
            </label>
            <label for="">Titre de CV :
                <input type="text" bind:value={title_CV}>
            </label>
            <label for="">Votre photo d'identité :
                <input type="file" name="" id="" accept="image/*" on:change={previewImage}>
            </label>
        </div>

        <div class="info">
            <h3>Corps</h3>
            <h5>Contact :</h5>
            <ul>
                <li>
                    <label for="">Adresse :
                        <input type="text" bind:value={address}>
                    </label>
                </li>
                <li>
                    <label for="">Email :
                        <input type="email" bind:value={email}>
                    </label>
                </li>
                <li>
                    <label for="">Tel :
                        <input type="text" bind:value={tel}>
                    </label>
                </li>
            </ul>

            <hr>

            <h5>Qualités :</h5>
            <i>Nb: les qualités sont séparés par une virgule</i>
            <input type="text" bind:value={quality} on:input={updateItems} placeholder="Entrer vos qualités">
            
            <hr>

            <h5>Compétences :</h5>
            <i>Nb: les qualités sont séparés par une virgule</i>
            <!-- Input pour ajouter des éléments principaux -->
            <input type="text" bind:value={competences} placeholder="Ajouter votre compétence">
            <button on:click={addCompetences}>Ajouter</button>

            <!-- Input pour ajouter des sous-éléments au dernier élément principal ajouté -->
            <input type="text" bind:value={sous_element} placeholder="Ajouter le contenu du compétence au-dessus">
            <button on:click={addSousElement}>Ajouter Sous-élément</button>

            <hr>

            <h5>Langues :</h5>
            <!-- Input pour ajouter des éléments principaux -->
            <input type="text" bind:value={langues} placeholder="Ajouter la langue">
            <button on:click={addLanguages}>Ajouter</button>

            <!-- Input pour ajouter des sous-éléments au dernier élément principal ajouté -->
            <input type="text" bind:value={niveau} placeholder="Ajouter votre niveau de la langue saisie au-dessus">
            <button on:click={addNiveau}>Ajouter niveau</button>

            <hr>

            <h5>Profile :</h5>
            <input type="text" bind:value={profile} placeholder="Entrer votre profile">

            <hr>

            <h5>Expériences :</h5>
            <!-- Input pour ajouter des éléments principaux -->
            <input type="text" bind:value={experience} placeholder="Ajouter l'expérience">
            <input type="text" bind:value={date} placeholder="Ajouter la date pour l'expérience">
            <input type="text" bind:value={companyName} placeholder="Ajouter le nom de l'entreprise">
            <button on:click={addExperiences}>Ajouter</button>
            
            <!-- Input pour ajouter des sous-éléments au dernier élément principal ajouté -->
            <input type="text" bind:value={responsabilité} placeholder="Ajouter votre résposabilité pour l'expérience saisie au-dessus">
            <button on:click={addResponsabilité}>Ajouter résponsabilité</button>

            <hr>

        </div>

        <button on:click={generatePDF}>Exportez PDF</button>
    </div>

    <div class="body">
        <div class="void" bind:this={content}>
            <div class="header">
                <div class="profile">
                    {#if image}
                        <img src={image} alt="Image preview"/>
                    {/if}
                    <!-- <img src="picture.png" alt=""> -->
                </div>
                <div class="name">
                    <h1>{name} <i>{lastname}</i></h1>
                    <h2>{title_CV}</h2>
                </div>
            </div>
    
            <hr>
    
            <div class="body-content">
                <div class="section1">
                    <div class="part-contact">
                        <h3 class="title">CONTACT</h3>    
                            {#if address}
                                <li><img src="/icons/adresse.png" alt="">: {address}</li>
                            {/if}
                            {#if email}
                                <li><img src="/icons/email.png" alt="">: {email}</li>
                            {/if}
                            {#if tel}
                                <li><img src="/icons/tel.png" alt="">: {tel}</li>
                            {/if}
                        
                    </div>
                    <div class="part">
                        <h3 class="title">QUALITES</h3>    
                        <ul>
                            {#if quality.length !== 0}
                                {#each quality_items as value}
                                    <li>{value}</li>
                                {/each}
                            {/if}
                        </ul>
                    </div>
                    <div class="part">
                        <h3 class="title">COMPETENCES</h3>    
                        <ul>
                            {#each elements as element}
                                <li>{element.name} 
                                    {#if element.sous_elements.length > 0 }
                                        :
                                        <ul>
                                            {#each element.sous_elements as sous_element}
                                                <li>{sous_element}</li>
                                            {/each}
                                        </ul>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <div class="part">
                        <h3 class="title">LANGUES</h3>    
                        <ul>
                            {#each items as item}
                                <li>{item.name} 
                                    {#if item.niveaux.length > 0 }
                                        : <i>
                                            {#each item.niveaux as niveau}
                                                {niveau}
                                            {/each}
                                        </i>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
    
                <div class="section2">
                    <div class="part">
                        <h3 class="title">PROFILE</h3>
                        <p>{profile}</p>
                    </div>
                    <div class="part">
                        <h3 class="title">EXPERIENCES</h3>
                        
                        <ul>
                            <li>
                                <div class="exp">
                                    {#each eLements as eLement}
                                        <div class="exp-head">
                                            <div class="">
                                                <p><b>{eLement.name}</b>
                                                    <br>
                                                    <i class="comp">({eLement.company})</i></p>
                                            </div>
                                            <div class="date">
                                                <p>{eLement.date}</p>
                                            </div>
                                        </div>

                                        {#if eLement.responsabilités.length > 0}
                                            {#each eLement.responsabilités as responsabilité}
                                                <ul>
                                                    <li>{responsabilité}</li>
                                                </ul>
                                            {/each}
                                        {/if}
                                    {/each}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="part">
                        <h3 class="title">FORMATIONS ET DIPLÔMES</h3>
                        
                        <ul>
                            <li>
                                <div class="exp-head">
                                    <div class="">
                                        <p><b>Licence en Télécommunication-Informatique-Electronique</b>
                                            <br>
                                            <i class="comp">(Is IESI Ambatomainty)</i></p>
                                    </div>
                                    <div class="date">
                                        <p>Aôut 2024</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="exp-head">
                                    <div class="">
                                        <p><b>Diplôme de Technicien Supérieur en Audio visuel</b>
                                            <br>
                                            <i class="comp">(Is IESI Ambatomainty)</i></p>
                                    </div>
                                    <div class="date">
                                        <p>2023</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="exp-head">
                                    <div class="">
                                        <p><b>Baccalaureat</b>
                                            <br>
                                            <i class="comp">(Lycée Privée Archange Tsiadana)</i></p>
                                    </div>
                                    <div class="date">
                                        <p>2021</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                
            </div>

        </div>

    </div>
</div>

<style>

    .content{
        display: flex;
    }

    .navlat, .body{
        color: black;
        border: 1px solid rgba(255, 255, 255, 0.245);
        height: 100%;
        margin: 2px;
        border-radius: 5px;
        padding: 20px;
    }

    .navlat{
        background-color: rgb(32, 32, 32);
        color: white;
        width: 25%;
    }

    .body{
        width: 75%;
    }

    .void{
        background-color: white;
    }

    h3{
        margin: 0;
    }

    .header{
        background-color: rgb(51, 103, 100);
        color: white;
        display: flex;
        align-items: center;
    }

    .name{
        padding: 10px;
        width: 75%;
        text-align: center;
    }

    .name h1{
        font-size: 20px;
    }

    .name h2{
        font-size: 15px;
    }

    .profile{
        width: 25%;
        display: flex;
        padding: 10px;
    }

    .profile img{
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        height: auto;
        border-radius: 100%;
        border: 1px solid rgba(255, 255, 255, 0.322);
        padding: 5px;
    }

    hr{
        border: 1px solid rgba(255, 255, 255, 0.322);
    }

    .body-content{
        display: flex;
    }

    .section1, .section2{
        padding: 30px;
    }

    .section1{
        width: 25%;
    }

    .section2{
        width: 75%;
    }

    .title{
        border-bottom: 1px solid rgb(51, 103, 100);
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: rgb(51, 103, 100);
    }

    .part, .part-contact{
        margin-bottom: 15px;
    }

    .part-contact li{
        display: flex;
        align-items: center;
    }

    .part-contact img{
        width: 15px;
    }

    ul{
        margin: 0;
    }

    p, li{
        font-size: 11px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        line-height: 20px;
    }

    .exp-head{
        display: flex;
    }

    .date{
        margin-left: auto;
    }

    .comp{
        font-size: 11px;
        color: rgb(64, 64, 64);
    }

    .info{
        border: 1px solid rgba(255, 255, 255, 0.123);
        padding: 20px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .info input{
        width: 100%;
        height: 25px;
        background-color: rgba(255, 255, 255, 0.102);
        text-align: center;
        border: none;
        color: white;
        margin-bottom: 10px;
    }

    .info button{
        width: 100%;
        height: 25px;
        border: none;
        margin: 5px;
        background-color: rgb(51, 103, 100);
        color: white;
    }

    .info i{
        font-size: 12px;
    }

</style>
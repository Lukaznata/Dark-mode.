<!doctype html>
<html lang="pt-br">
    <head>
        <title>teste dark-mode</title>
        <meta charset="utf-8">
        <meta name="author" content="Lucas">
        <meta name="description" content="descrição bacanuda">
        <meta name="keywords" content="JavaScript">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        
    </head>
    
    <body class="bodyAnima">
        <div class="animacaoInit">
        <h1 id="meuElemento">Modo-Escuro</h1>
        </div>

        <div class="hide">
            <ul id="ulCheckbox">
                <li> <button id="trocarBotao">Trocar linguagem</button> </li>
                <li> <label for="switch">
                    <input type="checkbox" id="switch"> <i class="fas fa-lightbulb" id="icon"></i><P id="labelDarkMode">Modo-escuro</P>
                </label> </li>
            </ul>

        <div id="textoSimplesDiv">
        <p id="textoSimples">Este é um teste de <a href="https://www.google.com/search?q=dark-mode&rlz=1C1GCEU_pt-BRBR1044BR1044&oq=dark-mode&aqs=chrome..69i57j0i19i512l4j69i60j69i61l2.3712j0j7&sourceid=chrome&ie=UTF-8" target="_blank">modo-escuro</a></p>
        </div>
        
        </div>
        
        <script src="script.js"> 

        </script>

    </body>
</html>

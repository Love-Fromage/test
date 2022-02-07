<?php
/*
  *
  * Template Name: gabarit-about
  *
  */
?>

<?php get_header(); ?>
<body>
<div class="fond">

<div class="cont-nav">
    <nav>
        <ul>
            <?php wp_nav_menu(array(
                    'theme_location' => 'menu_principal')
            ); ?>
            <a href="<?php echo bloginfo('url'); ?>"><img class="nav-logo" src="<?php echo bloginfo('template_url'); ?>/images/logo_mathieu.png" alt="logo"></a>
        </ul>
    </nav>
</div>


<header>
    <div class="bg-blur"></div>
    <div class="cont-header-about">
        <div class="cont-nom-about">

            <h2 id="1">Mathieu Guérin</h2>
        </div>
        <div class="cont-conn">
            <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="connector">
            <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="connector" class="de-conn">

        </div>


        <div class="cont-slogan">
            <h2>J'improvise, je m'adapte et surmonte les défis!</h2>
        </div>
    </div>
</header>
<div class="transition">
</div>
    <div class="transition2"></div>

<section class="info">

        <div class="cont-soutitre">
        <div>
            <h2>QUALITÉS HUMAINES</h2>
        </div>
        <div>
            <h2>COMPÉTENCES</h2>
        </div>
    </div>
    <div class="cont-info">



        <div class="cont-liste">

            <div class="cont-qual-list">

               <p class="tooltip">Joueur d'équipe
               <span class="tooltiptext">Je peux facilement faire la coordination entre les membres de l'équipe</span>
               </p>


            <p class="tooltip">Patient
                <span class="tooltiptext">Lorsque je fais face à un défi ou un problème, je prend mon temps afin de trouver une bonne solution.</span>
                </p>
                <p class="tooltip">Sincère
                <span class="tooltiptext">Habituellement, je suis sincère de ce que je ressens. Certains pourrait dire que je n'ai pas ma langue dans ma poche</span>
                </p>
            </div>

            <div class="cont-comp-list">
                <p class="tooltip">JAVASCRIPT
                <span class="tooltiptext">J’ai presque 2 ans d’expérience avec la bibliothèque Create.js
ainsi que le Javascript.</span>
                </p>
                <p class="tooltip">PHP/WORDPRESS
                <span class="tooltiptext">Lorsque l’on parle Back-end,
je suis plutot habile avec le PHP et SQL.

J’ai également des compétences dans l’intégration Wordpress.  </span>
                </p>
            </div>

        </div>










    </div>
        <div class="cont-logi">
        <ul>
            <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/figma-icon2.png" alt="figma">
                <span class="tooltiptext2">
J’utilise Figma pour concevoir et tester le bon fonctionnement de l’interactivité des maquettes webs.</span>
            </li>
            <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/create-js-icon2.png" alt="createjs">
            <span class="tooltiptext2">
J’ai 2 ans et demi d’expérience avec le langage Javascript.</span>
            </li>
            <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/js-icon2.png" alt="javascript">
                <span class="tooltiptext2">
J’ai 2 ans d’expérience avec la bibliothèque javascript Create.js.</span>
            </li>
            <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/php-icon.png" alt="php">
                <span class="tooltiptext2">
Je suis débrouillard lordqu’il s’agit de faire un site à l’aide du CMS Wordpress.</span>

            </li>
        </ul>
    </div>

</section>
    <section class="info-mobile">

        <div class="cont-soutitre">
            <div><h2>Qualité humaines</h2></div>
        </div>
        <div class="cont-qual-list">

            <p class="tooltip">Joueur d'équipe
                <span class="tooltiptext">Je peux facilement faire la coordination entre les membres de l'équipe</span>
            </p>


            <p class="tooltip">Patient
                <span class="tooltiptext">Lorsque je fais face à un défi ou un problème, je prend mon temps afin de trouver une bonne solution.</span>
            </p>
            <p class="tooltip">Sincère
                <span class="tooltiptext">Habituellement, je suis sincère de ce que je ressens. Certains pourrait dire que je n'ai pas ma langue dans ma poche</span>
            </p>

            <div class="cont-soutitre">
                <div><h2>Compétences</h2></div>
            </div>

            <div class="cont-comp-list">
                <p class="tooltip">JAVASCRIPT
                    <span class="tooltiptext">J’ai presque 2 ans d’expérience avec la bibliothèque Create.js
ainsi que le Javascript.</span>
                </p>
                <p class="tooltip">PHP/WORDPRESS
                    <span class="tooltiptext">Lorsque l’on parle Back-end,
je suis plutot habile avec le PHP et SQL.

J’ai également des compétences dans l’intégration Wordpress.  </span>
                </p>
            </div>

        </div>



        <div class="cont-logi-mobile">
            <ul>
                <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/figma-icon2.png" alt="figma">
                    <span class="tooltiptext2">
J’utilise Figma pour concevoir et tester le bon fonctionnement de l’interactivité des maquettes webs.</span>
                </li>
                <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/create-js-icon2.png" alt="createjs">
                    <span class="tooltiptext2">
J’ai 2 ans et demi d’expérience avec le langage Javascript.</span>
                </li>
                <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/js-icon2.png" alt="javascript">
                    <span class="tooltiptext2">
J’ai 2 ans d’expérience avec la bibliothèque javascript Create.js.</span>
                </li>
                <li class="tooltip"><img src="<?php echo bloginfo('template_url'); ?>/images/php-icon.png" alt="php">
                    <span class="tooltiptext2">
Je suis débrouillard lordqu’il s’agit de faire un site à l’aide du CMS Wordpress.</span>

                </li>
            </ul>
        </div>
    </section>



<section class="video">
    <div class="cont-video">
        <iframe width="1000" height="700" src="https://www.youtube.com/embed/Ndp3uB8Bu-E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

</section>

<section class="histoire">
    <div class="cont-hist">
        <h2>Mon histoire</h2>
        <div class="cont-hist-text">
            <p>Je m'appelle Mathieu.
                Depuis que j’ai eu mon propre ordinateur personnel, je suis vite tombé sur le monde de la programmation. Le code me captivait. J’apprenais petit à petit à faire des programmes de plus en plus gros. C’est ainsi que j’ai décidé que j’allais faire carrière dans l’informatique, plus précisément dans la programmation.

                Au cours de mes études en multimédia j’ai pu découvrir plusieurs autres aspects de l’informatique. Malgré tous ces domaines, ceux qui m’intéressent le plus sont la programmation back-end et l’interactivité du front-end.


                Lorsque je conçois quelque chose, ma priorité est la fluidité ainsi que l'aisance de naviguation et d'interactivité. De plus,
                j'aime rendre mes réalisations vivantes.

            </p>
        </div>

    </div>
</section>





<?php get_footer() ?>
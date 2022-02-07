<?php
/* Template Name: gabarit-projet2 */
?>

<?php get_header() ?>
<body>
<div class="fond fond2">
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
        <div class="header-proj">
            <div class="cont-header-title">
                <div class="inner-glow">
                <p><?php the_title(); ?></p>
                </div>
            </div>
        </div>
    </header>

    <?php
    query_posts(array(
        'post_type' => 'Projets',
        'post_status' => 'publish',
        'order' => 'ASC',
        'showposts' => -1
    ));
    ?>
    <section class="projets-proj">
         <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
        <div class="cont-proj-proj">
            <div class="proj-fond-proj">
                <a href="<?php the_permalink(); ?>">
                <img src="<?php the_post_thumbnail_url(); ?>" alt="">
                <div class="projet-hover">
                <p><?php the_content(); ?></p>
            </div>
                <div class="proj-mask-proj">

                    <div class="cont-proj-mask">

                        <p><?php the_title(); ?></p>
                        <?php if ( get_field('proj_type_de_projet')) : ?>
                            <p><?php the_field('proj_type_de_projet');?></p>
                        <?php endif; ?>

                    </div>


                    </a>
                </div>
            </div>
        </div>
        <div class="cont-conn">
            <img src="<?php echo bloginfo('template_url') ?>/images/Group 59.svg" alt="connector">
            <img src="<?php echo bloginfo('template_url') ?>/images/Group 59.svg" alt="connector" class="de-conn">

        </div>
<?php endwhile; ?>
<?php endif; ?>
<!--        <div class="cont-proj-proj">-->
<!--            <div class="proj-fond-proj">-->
<!--                <a href="single.php">-->
<!--                <img src="--><?php //echo bloginfo('template_url') ?><!--/images/F-ultra menu.png" alt="">-->
<!--                <div class="projet-hover">-->
<!--                    <p>Projet en média intéractif</p>-->
<!--                </div>-->
<!--                <div class="proj-mask-proj">-->
<!---->
<!---->
<!--                        <div class="cont-proj-mask">-->
<!--                            <p>F-Ultra</p>-->
<!--                            <p>Jeu mobile</p>-->
<!---->
<!--                        </div>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!---->
<!--        <div class="cont-conn">-->
<!--            <img src="--><?php //echo bloginfo('template_url') ?><!--/images/Group 59.svg" alt="connector">-->
<!--            <img src="--><?php //echo bloginfo('template_url') ?><!--/images/Group 59.svg" alt="connector" class="de-conn">-->
<!---->
<!--        </div>-->
<!---->
<!--        <div class="cont-proj-proj">-->
<!--            <div class="proj-fond-proj">-->
<!--                <a href="single.php">-->
<!--                <img src="--><?php //echo bloginfo('template_url') ?><!--/images/F-Mega.PNG" alt="">-->
<!--                <div class="projet-hover">-->
<!--                    <p>Projet en média intéractif</p>-->
<!--                </div>-->
<!--                <div class="proj-mask-proj">-->
<!---->
<!--                        <div class="cont-proj-mask">-->
<!--                            <p>F-Mega</p>-->
<!--                            <p>Jeu flash</p>-->
<!---->
<!--                        </div>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!---->
<!--        <div class="cont-conn">-->
<!--            <img src="--><?php //echo bloginfo('template_url') ?><!--/images/Group 59.svg" alt="connector">-->
<!--            <img src="--><?php //echo bloginfo('template_url') ?><!--/images/Group 59.svg" alt="connector" class="de-conn">-->
<!---->
<!--        </div>-->
<!---->
<!--        <div class="cont-proj-proj">-->
<!--            <div class="proj-fond-proj">-->
<!--                <a href="single.php">-->
<!--                <img src="--><?php //echo bloginfo('template_url') ?><!--/images/nocturo-logo.png" alt="">-->
<!---->
<!--                <div class="projet-hover">-->
<!--                    <p>Projet en média intéractif</p>-->
<!--                </div>-->
<!--                <div class="proj-mask-proj">-->
<!---->
<!--                        <div class="cont-proj-mask">-->
<!--                            <p>Nocturo</p>-->
<!--                            <p>Application interactif</p>-->
<!---->
<!--                        </div>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

    </section>



<?php get_footer(); ?>
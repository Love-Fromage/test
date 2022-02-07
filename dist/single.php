<?php get_header() ?>
<body>
<div class="fond" id="top">
    <<div class="cont-nav">
        <nav>
            <ul>
                <?php wp_nav_menu(array(
                        'theme_location' => 'menu_principal')
                ); ?>
                <a href="<?php echo bloginfo('url'); ?>"><img class="nav-logo" src="<?php echo bloginfo('template_url'); ?>/images/logo_mathieu.png" alt="logo"></a>
            </ul>
        </nav>
    </div>

    <div class="cont-title-proj">
        <div class="cont-text-proj">

            <p>Titre du projet</p>
            <p><?php the_title(); ?></p>
            <p>Outils</p>
            <?php if ( get_field('proj_outils_utilises')) : ?>
                <p><?php the_field('proj_outils_utilises'); ?></p>
            <?php endif; ?>
            <?php if ( get_field('proj_what')) : ?>
                <p><?php the_field('proj_what'); ?></p>
            <?php endif; ?>

        </div>

        <div class="cont-img-projet">
            <?php if(get_field('proj_iframe')) : ?>
            <?php the_field('proj_iframe'); ?>
            <?php else : ?>
            <img src="<?php the_post_thumbnail_url(); ?>" alt="thumbnail">

            <?php endif; ?>
        </div>

    </div>
    
    <div class="cont-conn-single-section1">
        <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="">
        <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="">
    </div>


    <section class="contenu-single">

        <div class="cont-high-projet">
            <div class="cont-high-projet-img">

                <div class="cont-img-high">
                    <?php if ( get_field('proj_high_title1')) : ?>
                        <h3><?php the_field('proj_high_title1'); ?></h3>
                    <?php endif; ?>
                    <?php if ( get_field('proj_image_high1')) : ?>
                        <img src="<?php the_field('proj_image_high1'); ?>" alt="highlight">
                    <?php endif; ?>
                </div>

            </div>
            <div class="cont-conn-single">
                <img src="<?php echo bloginfo('template_url'); ?>/images/conn-bleu.png" alt="">
                <img src="<?php echo bloginfo('template_url'); ?>/images/conn-bleu.png" alt="">
            </div>

            <div class="cont-high-projet-text">

                <div class="cont-text-high">
                    <?php if ( get_field('proj_high_text1')) : ?>
                        <p><?php the_field('proj_high_text1'); ?></p>
                    <?php endif; ?>
                </div>

            </div>
        </div>
        <div class="cont-conn-single-section2">
            <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="">
            <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="">
        </div>
        <div class="cont-high-projet">

            <div class="cont-high-projet-text">

                <div class="cont-text-high">
                    <?php if ( get_field('proj_high_text2')) : ?>
                        <p><?php the_field('proj_high_text2'); ?></p>
                    <?php endif; ?>
                </div>
            </div>

            <div class="cont-conn-single">
                <img src="<?php echo bloginfo('template_url'); ?>/images/conn-bleu.png" alt="">
                <img src="<?php echo bloginfo('template_url'); ?>/images/conn-bleu.png" alt="">
            </div>

            <div class="cont-high-projet-img">

                <div class="cont-img-high">
                    <?php if ( get_field('proj_high_title2')) : ?>
                        <h3><?php the_field('proj_high_title2'); ?></h3>
                    <?php endif; ?>

                    <?php if ( get_field('proj_image_high2')) : ?>
                    <img src="<?php the_field('proj_image_high2'); ?>" alt="highlight">
                    <?php endif; ?>
                </div>

            </div>

        </div>

        <div class="cont-high-projet">
            <div class="cont-high-projet-img">

                <div class="cont-img-high">
                    <h3>Titre du highlight</h3>
                    <img src="<?php if ( get_field('proj_image_high2')) : ?>
                        <?php the_field('proj_image_high2'); ?>
                    <?php endif; ?>" alt="highlight">
                </div>

            </div>
            <div class="cont-conn-single">
                <img src="<?php echo bloginfo('template_url'); ?>/images/conn-bleu.png" alt="">
                <img src="<?php echo bloginfo('template_url'); ?>/images/conn-bleu.png" alt="">
            </div>

            <div class="cont-high-projet-text">

                <div class="cont-text-high">
                    <?php if ( get_field('proj_high_text2')) : ?>
                        <p><?php the_field('proj_high_text2'); ?></p>
                    <?php endif; ?>
                </div>

            </div>
        </div>


    </section>


</div>
</body>
</html>
# setup
scene.set_background_color(9)
info.set_life(3)
info.set_score(0)

# Frog
Frog = sprites.create(img("""
    . . . . . . . . . . . . . . 7 7 . . . .
    . . . . . . . . . . . . . 7 7 7 7 . . .
    . . . . . . . . . . . . 7 7 7 1 1 . . .
    . . . . . . . 7 7 7 7 7 7 7 7 1 f . . .
    . . . . . . 7 7 7 7 7 7 7 7 7 1 f . . .
    . . . . . 7 7 7 7 7 7 7 7 7 7 1 f . . .
    . . . . 7 7 7 7 7 7 7 7 7 7 7 1 1 . . .
    . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 f f f f . . .
    . . . . 7 7 7 7 7 7 7 7 f . . . . . . .
    . . . . 7 7 7 7 7 7 7 7 f . . . . . . .
    . . . . 7 7 7 7 7 7 7 7 7 f f f f . . .
    . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . .
    . . . . . . 7 7 7 7 7 7 7 7 7 . . . . .
    . . . . . . . 7 7 7 7 7 7 7 . . . . . .
    . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
"""))
Frog.set_position(10, 60)
Frog.set_flag(SpriteFlag.StayInScreen, True)

# frog movement 
controller.move_sprite(Frog, 200, 200)

# cheez it 
Cheez_it = sprites.create(img("""
    4 4 4 4 4 4 4 . . . .
    4 e 4 4 4 e 4 . . . .
    4 4 4 e 4 4 4 . . . .
    4 4 4 4 4 4 4 . . . .
    4 e 4 4 4 e 4 . . . .
    4 4 4 4 4 4 4 . . . .
    . . . . . . . . . . .
    . . . . . . . . . . .
    . . . . . . . . . . .
"""))
Cheez_it.set_position(scene.screen_width(), randint(0, scene.screen_height()))
Cheez_it.set_velocity(-50, 0)



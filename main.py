# setup
scene.set_background_color(9)
info.set_life(0)
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
def on_update_interval():
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
    Cheez_it.set_position(scene.screen_width(), randint(20, 100))
    Cheez_it.set_velocity(-50, 0)
game.on_update_interval(1000, on_update_interval)

# rivals
def on_update2_interval():
    rivals = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . 1 . . . . .
        . . . . . . . . f 1 1 1 f . . .
        . . . f f f f . f 1 1 1 f f . .
        . . . f 1 f f f f 1 1 1 f f . .
        . . . f f f f f f f f f f f . .
        . . . f 1 f f f f 1 1 1 f f . .
        . . . f f f f . f 1 1 1 f f . .
        . . . . . . . . f 1 1 1 f . . .
        . . . . . . . . . . 1 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    """))
    rivals.set_position(scene.screen_width(), randint(20, 100))
    rivals.set_velocity(-50, 0)
game.on_update_interval(1200, on_update2_interval)

# killing rivals
def on_event_pressed2():
    spit = sprites.create_projectile_from_sprite(img("""
        . . . . .
        1 1 1 1 .
        . 1 1 1 1
        1 1 1 1 .
        . . . . .
    """), Frog, 50, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_event_pressed2)

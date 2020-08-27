# killing rivals

def on_a_pressed():
    global spit
    spit = sprites.create_projectile_from_sprite(img("""
            . . . . . 
                    1 1 1 1 . 
                    . 1 1 1 1 
                    1 1 1 1 . 
                    . . . . .
        """),
        Frog,
        50,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# eat cheez it

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    if info.life() < 10:
        info.change_life_by(1)
    
    
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    sprite.destroy()
    otherSprite.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

# lose life

def on_on_overlap3(sprite, otherSprite):
    otherSprite.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

rivals: Sprite = None
Cheez_it: Sprite = None
spit: Sprite = None
Frog: Sprite = None
# setup
scene.set_background_color(9)
info.set_life(1)
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
    """),
    0)
Frog.set_position(10, 60)
Frog.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
Frog.set_kind(SpriteKind.player)
# frog movement
controller.move_sprite(Frog, 200, 200)
# cheez it

def on_update_interval():
    global Cheez_it
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
        """),
        0)
    Cheez_it.set_position(scene.screen_width(), randint(20, 100))
    Cheez_it.set_velocity(-50, 0)
    Cheez_it.set_kind(SpriteKind.food)
game.on_update_interval(1000, on_update_interval)

# rivals

def on_update_interval2():
    global rivals
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
        """),
        0)
    rivals.set_position(scene.screen_width(), randint(20, 100))
    rivals.set_velocity(-50, 0)
    rivals.set_kind(SpriteKind.enemy)
game.on_update_interval(1200, on_update_interval2)




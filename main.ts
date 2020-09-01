//  killing enemy
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    spit = sprites.createProjectileFromSprite(img`
            . . . . . 
                    1 1 1 1 . 
                    . 1 1 1 1 
                    1 1 1 1 . 
                    . . . . .
        `, Frog, 50, 0)
})
//  eat cheez it
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    otherSprite.destroy()
    Cheez_itEaten += 1
    if (Cheez_itEaten/5 > 6) {
        info.changeLifeBy(1)
    }
    
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
    rivals.ax += rivals.vx - 30
})
//  lose life
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Cheez_itEaten = 0
let Cheez_it : Sprite = null
let rivals : Sprite = null
let spit : Sprite = null
let Frog : Sprite = null
let rivalsSpeed = -50
//  setup
scene.setBackgroundColor(9)
info.setLife(2)
info.setScore(0)
console.log(Cheez_itEaten)
//  Frog
Frog = sprites.create(img`
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
    `, 0)
Frog.setPosition(10, 60)
Frog.setFlag(SpriteFlag.StayInScreen, true)
Frog.setKind(SpriteKind.Player)
//  frog movement
controller.moveSprite(Frog, 200, 200)
//  cheez it
game.onUpdateInterval(1000, function on_update_interval() {
    
    Cheez_it = sprites.create(img`
            4 4 4 4 4 4 4 . . . . 
                    4 e 4 4 4 e 4 . . . . 
                    4 4 4 e 4 4 4 . . . . 
                    4 4 4 4 4 4 4 . . . . 
                    4 e 4 4 4 e 4 . . . . 
                    4 4 4 4 4 4 4 . . . . 
                    . . . . . . . . . . . 
                    . . . . . . . . . . . 
                    . . . . . . . . . . .
        `, 0)
    Cheez_it.setPosition(scene.screenWidth(), randint(20, 100))
    Cheez_it.setVelocity(-50, 0)
    Cheez_it.setKind(SpriteKind.Food)
    if (info.score() > 19) {
        game.over(true)
    }
    
})
//  rivals
game.onUpdateInterval(1200, function on_update_interval2() {
    
    rivals = sprites.create(img`
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
        `, 0)
    rivals.setPosition(scene.screenWidth(), randint(20, 100))
    rivals.setVelocity(rivalsSpeed, 0)
    rivals.setKind(SpriteKind.Enemy)
})

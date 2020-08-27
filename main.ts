// killing rivals
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spit = sprites.createProjectileFromSprite(img`
        . . . . . 
        1 1 1 1 . 
        . 1 1 1 1 
        1 1 1 1 . 
        . . . . . 
        `, Frog, 50, 0)
})
// eat cheez it
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (info.life() < 10) {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
// lose life
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let rivals: Sprite = null
let Cheez_it: Sprite = null
let spit: Sprite = null
let Frog: Sprite = null
// setup
scene.setBackgroundColor(9)
info.setLife(1)
info.setScore(0)
// Frog
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
// frog movement
controller.moveSprite(Frog, 200, 200)
// cheez it
game.onUpdateInterval(1000, function () {
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
// rivals
game.onUpdateInterval(1200, function () {
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
    rivals.setVelocity(-50, 0)
    rivals.setKind(SpriteKind.Enemy)
})

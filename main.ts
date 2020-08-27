//  setup
scene.setBackgroundColor(9)
info.setLife(0)
info.setScore(0)
//  Frog
let Frog = sprites.create(img`
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
`)
Frog.setPosition(10, 60)
Frog.setFlag(SpriteFlag.StayInScreen, true)
//  frog movement 
controller.moveSprite(Frog, 200, 200)
//  cheez it 
game.onUpdateInterval(1000, function on_update_interval() {
    let Cheez_it = sprites.create(img`
    4 4 4 4 4 4 4 . . . .
    4 e 4 4 4 e 4 . . . .
    4 4 4 e 4 4 4 . . . .
    4 4 4 4 4 4 4 . . . .
    4 e 4 4 4 e 4 . . . .
    4 4 4 4 4 4 4 . . . .
    . . . . . . . . . . .
    . . . . . . . . . . .
    . . . . . . . . . . .
    `)
    Cheez_it.setPosition(scene.screenWidth(), randint(20, 100))
    Cheez_it.setVelocity(-50, 0)
})
//  rivals
game.onUpdateInterval(1200, function on_update2_interval() {
    let rivals = sprites.create(img`
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
    `)
    rivals.setPosition(scene.screenWidth(), randint(20, 100))
    rivals.setVelocity(-50, 0)
})
//  killing rivals
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed2() {
    let spit = sprites.createProjectileFromSprite(img`
        . . . . .
        1 1 1 1 .
        . 1 1 1 1
        1 1 1 1 .
        . . . . .
    `, Frog, 50, 0)
})

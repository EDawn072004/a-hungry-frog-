//  setup
scene.setBackgroundColor(9)
info.setLife(3)
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
Cheez_it.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
Cheez_it.setVelocity(-50, 0)

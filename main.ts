sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f 2 2 f f . . . . . 
    . . . . . f 2 2 2 2 f . . . . . 
    . . . . . f 2 2 2 2 f . . . . . 
    . . . . . f f 2 2 f f . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . f 4 5 f . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . f f f f . . . 
        . . . . . . . . f f 4 5 f . . . 
        . . . . f f f f f 4 4 5 f . . . 
        . . . f f 2 2 f b 4 5 5 f . . . 
        . . . f 2 b b b b b b f f . . . 
        . . . f c c c c b b b f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c c f . . . . 
        . . . f c c c c c c f f . . . . 
        . . . . f f f f f f f . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})

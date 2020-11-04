let counterWeapon = 0
const weaponsArr = []

const kWeapon = 136 / 129
const weaponW = 136
const weaponH = weaponW / kWeapon
let weaponX = Math.floor(Math.random() * (canvas.width))
let weaponY = Math.floor(Math.random() * (canvas.height))
const minWeapon = 0
const maxWeapon = emojiWeaponArr.length

const createWeapon = () => {
    
    counterWeapon++
    if(counterWeapon % 100 === 0){
        weaponX = Math.floor(Math.random() * (canvas.width))
        weaponY = Math.floor(Math.random() * (canvas.height))
        
        let weaponRandom = Math.floor(Math.random() * (maxWeapon - minWeapon) + minWeapon)
        newWeapon = new ImageCreation(weaponW, weaponH, weaponX, weaponY, emojiWeaponArr[weaponRandom].src)
        weaponsArr.push(newWeapon)
    }
}
const drawWeapon = () => {
    weaponsArr.forEach(weapon => {
        weapon.draw()
    })
}